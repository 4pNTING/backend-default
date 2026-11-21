import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { PaymentEntity } from '@infrastructure/entities/payment.entity';
import { OrderEntity }   from '@infrastructure/entities/order.entity';
import { TableEntity }   from '@infrastructure/entities/table.entity';
import { IPaymentRepository } from '@domain/repositories/payment.repository.interface';
import {
    ProcessPaymentRequest, ProcessPaymentResponse,
    LoadPaymentByOrderRequest, LoadPaymentByOrderResponse,
    LoadPaymentByIdRequest, LoadPaymentByIdResponse,
} from '@domain/models/payment.model';
import { OrderStatus, TableStatus } from '@domain/enums/enum';

import { RedisService } from '../../cache/redis.service';
import { CacheKeys }    from '../../cache/cache-keys.constants';
import { DatabaseInventoryRepository } from '../inventory/inventory.repository';

@Injectable()
export class DatabasePaymentRepository implements IPaymentRepository {
    constructor(
        @InjectRepository(PaymentEntity)
        private readonly paymentEntity: Repository<PaymentEntity>,
        @InjectRepository(OrderEntity)
        private readonly orderEntity: Repository<OrderEntity>,
        private readonly inventoryRepository: DatabaseInventoryRepository,
        private readonly dataSource: DataSource,
        private readonly redisService: RedisService,
    ) { }

    async processPayment(params: ProcessPaymentRequest): Promise<ProcessPaymentResponse> {
        const session = this.dataSource.createQueryRunner();
        await session.connect();
        await session.startTransaction();
        try {
            // 1. โหลด Order
            const order = await session.manager.findOne(OrderEntity, {
                where: { _id: params.orderId },
            });
            if (!order) {
                throw new BadRequestException('Order not found');
            }
            if (order.status === OrderStatus.paid) {
                throw new BadRequestException('Order already paid');
            }
            if (order.status === OrderStatus.cancelled) {
                throw new BadRequestException('Cannot pay a cancelled order');
            }

            // 2. ตรวจสอบยอดเงิน
            if (params.amount < Number(order.total)) {
                throw new BadRequestException(
                    `Insufficient payment. Required: ${order.total}, Received: ${params.amount}`
                );
            }

            // 3. คำนวณเงินทอน
            const change = params.amount - Number(order.total);

            // 4. บันทึก Payment
            const payment = session.manager.create(PaymentEntity, {
                orderId:    params.orderId,
                currencyId: params.currencyId,
                method:     params.method,
                amount:     params.amount,
                change,
                paidAt:     new Date(),
            });
            const savedPayment = await session.manager.save(PaymentEntity, payment);

            // 5. อัปเดตสถานะ Order เป็น paid
            await session.manager.update(OrderEntity, { _id: params.orderId }, {
                status: OrderStatus.paid,
            });

            // 6. Auto Stock Deduction (ตัดสต็อกอัตโนมัติตามสูตรใน Transaction เดียวกัน)
            await this.inventoryRepository.deductStockForOrder(params.orderId, session);

            // 7. อัปเดตโต๊ะกลับเป็น available
            if (order.tableId) {
                await session.manager.update(TableEntity, { _id: order.tableId }, {
                    status: TableStatus.available,
                });
            }

            await session.commitTransaction();

            // Invalidate caches
            await this.redisService.del(CacheKeys.ORDER_BY_ID(params.orderId));
            await this.redisService.del(CacheKeys.ORDER_LIST);
            await this.redisService.del(CacheKeys.PAYMENT_BY_ORDER(params.orderId));
            if (order.tableId) {
                await this.redisService.del(CacheKeys.TABLE_BY_ID(order.tableId));
                await this.redisService.delByPattern(CacheKeys.TABLE_LIST_PATTERN);
            }

            return savedPayment as ProcessPaymentResponse;
        } catch (error) {
            await session.rollbackTransaction();
            throw error;
        } finally {
            await session.release();
        }
    }

    async findByOrder(params: LoadPaymentByOrderRequest): Promise<LoadPaymentByOrderResponse> {
        const cacheKey = CacheKeys.PAYMENT_BY_ORDER(params.orderId);
        const cached   = await this.redisService.get<LoadPaymentByOrderResponse>(cacheKey);
        if (cached) return cached;

        const entities = await this.paymentEntity.find({
            where: { orderId: params.orderId },
            order: { createdAt: 'DESC' },
        });
        const result = { items: entities };
        await this.redisService.set(cacheKey, result);
        return result;
    }

    async findById(params: LoadPaymentByIdRequest): Promise<LoadPaymentByIdResponse | null> {
        const cached = await this.redisService.get<LoadPaymentByIdResponse>(
            CacheKeys.PAYMENT_BY_ID(params._id)
        );
        if (cached) return cached;

        const entity = await this.paymentEntity.findOne({ where: { _id: params._id } });
        if (!entity) return null;
        return entity as LoadPaymentByIdResponse;
    }
}
