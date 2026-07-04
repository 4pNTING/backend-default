import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { OrderEntity } from '@infrastructure/entities/order.entity';
import { OrderItemEntity } from '@infrastructure/entities/order-item.entity';
import { IOrderRepository } from '@domain/repositories/order.repository.interface';
import {
    CreateOrderRequest, CreateOrderResponse,
    AddOrderItemRequest, AddOrderItemResponse,
    RemoveOrderItemRequest,
    UpdateOrderStatusRequest,
    CancelOrderRequest,
    DeleteOrderRequest,
    LoadAllOrderResponse,
    LoadOrderByIdRequest, LoadOrderByIdResponse,
    LoadOrderByTableRequest, LoadOrderByTableResponse,
} from '@domain/models/order.model';
import { OrderStatus } from '@domain/enums/enum';
import { QueryProps } from '@domain/models/query.model';

import { RedisService } from '../../cache/redis.service';
import { CacheKeys }    from '../../cache/cache-keys.constants';

@Injectable()
export class DatabaseOrderRepository implements IOrderRepository {
    constructor(
        @InjectRepository(OrderEntity)
        private readonly orderEntity: Repository<OrderEntity>,
        @InjectRepository(OrderItemEntity)
        private readonly orderItemEntity: Repository<OrderItemEntity>,
        private readonly dataSource: DataSource,
        private readonly redisService: RedisService,
    ) { }

    // ─── Generate Order Number ────────────────────────────
    private async generateOrderNumber(): Promise<string> {
        const now    = new Date();
        const datePart = now.toISOString().slice(0, 10).replace(/-/g, '');
        const count  = await this.orderEntity.count();
        const seq    = String(count + 1).padStart(4, '0');
        return `ORD-${datePart}-${seq}`;
    }

    async create(params: CreateOrderRequest): Promise<CreateOrderResponse> {
        const session = this.dataSource.createQueryRunner();
        await session.connect();
        await session.startTransaction();
        try {
            const orderNumber = await this.generateOrderNumber();
            const entity = session.manager.create(OrderEntity, {
                orderNumber,
                tableId:  params.tableId,
                staffId:  params.staffId,
                status:   OrderStatus.pending,
                note:     params.note,
                discount: params.discount ?? 0,
                subTotal: 0,
                total:    0,
            });
            const saved = await session.manager.save(OrderEntity, entity);
            await session.commitTransaction();

            await this.redisService.del(CacheKeys.ORDER_LIST);
            await this.redisService.del(CacheKeys.ORDER_BY_TABLE(params.tableId));

            return { ...saved, items: [] };
        } catch (error) {
            await session.rollbackTransaction();
            throw error;
        } finally {
            await session.release();
        }
    }

    async addItem(params: AddOrderItemRequest): Promise<AddOrderItemResponse> {
        const session = this.dataSource.createQueryRunner();
        await session.connect();
        await session.startTransaction();
        try {
            const order = await session.manager.findOne(OrderEntity, { where: { _id: params.orderId } });
            if (!order) throw new BadRequestException('Order not found');
            if (order.status === OrderStatus.paid || order.status === OrderStatus.cancelled) {
                throw new BadRequestException(`Cannot add items to order with status: ${order.status}`);
            }

            const totalPrice = params.unitPrice * params.quantity;
            const item = session.manager.create(OrderItemEntity, {
                orderId:      params.orderId,
                menuItemId:   params.menuItemId,
                menuItemName: params.menuItemName,
                quantity:     params.quantity,
                unitPrice:    params.unitPrice,
                totalPrice,
                note:         params.note,
            });
            const savedItem = await session.manager.save(OrderItemEntity, item);

            // Recalculate totals
            const newSubTotal = Number(order.subTotal) + totalPrice;
            const newTotal    = newSubTotal - Number(order.discount);
            await session.manager.update(OrderEntity, { _id: params.orderId }, {
                subTotal: newSubTotal,
                total:    newTotal,
            });

            await session.commitTransaction();

            await this.redisService.del(CacheKeys.ORDER_BY_ID(params.orderId));
            await this.redisService.del(CacheKeys.ORDER_LIST);

            return { orderId: params.orderId, item: savedItem };
        } catch (error) {
            await session.rollbackTransaction();
            throw error;
        } finally {
            await session.release();
        }
    }

    async removeItem(params: RemoveOrderItemRequest): Promise<void> {
        const session = this.dataSource.createQueryRunner();
        await session.connect();
        await session.startTransaction();
        try {
            const item = await session.manager.findOne(OrderItemEntity, {
                where: { _id: params.orderItemId, orderId: params.orderId }
            });
            if (!item) throw new BadRequestException('Order item not found');

            await session.manager.remove(OrderItemEntity, item);

            // Recalculate order totals
            const order = await session.manager.findOne(OrderEntity, {
                where: { _id: params.orderId },
                relations: ['items'],
            });
            if (order) {
                const subTotal = order.items.reduce((sum, i) => sum + Number(i.totalPrice), 0);
                const total    = subTotal - Number(order.discount);
                await session.manager.update(OrderEntity, { _id: params.orderId }, { subTotal, total });
            }

            await session.commitTransaction();
            await this.redisService.del(CacheKeys.ORDER_BY_ID(params.orderId));
        } catch (error) {
            await session.rollbackTransaction();
            throw error;
        } finally {
            await session.release();
        }
    }

    async updateStatus(params: UpdateOrderStatusRequest): Promise<void> {
        await this.orderEntity.update({ _id: params._id }, { status: params.status });
        await this.redisService.del(CacheKeys.ORDER_BY_ID(params._id));
        await this.redisService.del(CacheKeys.ORDER_LIST);
    }

    async cancel(params: CancelOrderRequest): Promise<void> {
        await this.orderEntity.update({ _id: params._id }, { status: OrderStatus.cancelled });
        await this.redisService.del(CacheKeys.ORDER_BY_ID(params._id));
        await this.redisService.del(CacheKeys.ORDER_LIST);
    }

    async delete(params: DeleteOrderRequest): Promise<void> {
        const session = this.dataSource.createQueryRunner();
        await session.connect();
        await session.startTransaction();
        try {
            await session.manager.softDelete(OrderEntity, params._id);
            await session.commitTransaction();
            await this.redisService.del(CacheKeys.ORDER_BY_ID(params._id));
            await this.redisService.del(CacheKeys.ORDER_LIST);
        } catch (error) {
            await session.rollbackTransaction();
            throw error;
        } finally {
            await session.release();
        }
    }

    async findAll(query: QueryProps): Promise<LoadAllOrderResponse> {
        const cached = await this.redisService.get<LoadAllOrderResponse>(CacheKeys.ORDER_LIST);
        if (cached) return cached;

        const qb = this.orderEntity.createQueryBuilder('order')
            .leftJoinAndSelect('order.items', 'items');

        if (query.status) {
            qb.andWhere('order.status = :status', { status: query.status });
        }
        if (query.tableId) {
            qb.andWhere('order.tableId = :tableId', { tableId: query.tableId });
        }

        const page  = query.paginate?.page  ?? 1;
        const limit = query.paginate?.limit ?? 50;
        qb.skip((page - 1) * limit).take(limit);
        qb.orderBy('order.createdAt', 'DESC');

        const entities = await qb.getMany();
        const result   = { items: entities };
        await this.redisService.set(CacheKeys.ORDER_LIST, result, 30); // cache 30 seconds (orders change frequently)
        return result;
    }

    async findById(params: LoadOrderByIdRequest): Promise<LoadOrderByIdResponse | null> {
        const cached = await this.redisService.get<LoadOrderByIdResponse>(CacheKeys.ORDER_BY_ID(params._id));
        if (cached) return cached;

        const entity = await this.orderEntity.findOne({
            where: { _id: params._id },
            relations: ['items'],
        });
        if (!entity) return null;

        const result = entity as LoadOrderByIdResponse;
        await this.redisService.set(CacheKeys.ORDER_BY_ID(params._id), result, 30);
        return result;
    }

    async findByTable(params: LoadOrderByTableRequest): Promise<LoadOrderByTableResponse> {
        const cacheKey = CacheKeys.ORDER_BY_TABLE(params.tableId);
        const cached   = await this.redisService.get<LoadOrderByTableResponse>(cacheKey);
        if (cached) return cached;

        const entities = await this.orderEntity.find({
            where: { tableId: params.tableId },
            relations: ['items'],
            order: { createdAt: 'DESC' },
        });
        const result = { items: entities };
        await this.redisService.set(cacheKey, result, 30);
        return result;
    }
}
