import { DataSource, Repository } from 'typeorm';
import { OrderEntity } from '../../entities/order.entity.js';
import { OrderItemEntity } from '../../entities/order-item.entity.js';
import { IOrderRepository } from '../../../domain/repositories/order.repository.interface.js';
import { CreateOrderRequest, CreateOrderResponse, AddOrderItemRequest, AddOrderItemResponse, RemoveOrderItemRequest, UpdateOrderStatusRequest, CancelOrderRequest, DeleteOrderRequest, LoadAllOrderResponse, LoadOrderByIdRequest, LoadOrderByIdResponse, LoadOrderByTableRequest, LoadOrderByTableResponse, TransferTableRequest, TransferTableResponse } from '../../../domain/models/order.model.js';
import { QueryProps } from '../../../domain/models/query.model.js';
import { RedisService } from '../../cache/redis.service';
export declare class DatabaseOrderRepository implements IOrderRepository {
    private readonly orderEntity;
    private readonly orderItemEntity;
    private readonly dataSource;
    private readonly redisService;
    constructor(orderEntity: Repository<OrderEntity>, orderItemEntity: Repository<OrderItemEntity>, dataSource: DataSource, redisService: RedisService);
    private generateOrderNumber;
    create(params: CreateOrderRequest): Promise<CreateOrderResponse>;
    addItem(params: AddOrderItemRequest): Promise<AddOrderItemResponse>;
    removeItem(params: RemoveOrderItemRequest): Promise<void>;
    updateStatus(params: UpdateOrderStatusRequest): Promise<void>;
    cancel(params: CancelOrderRequest): Promise<void>;
    delete(params: DeleteOrderRequest): Promise<void>;
    findAll(query: QueryProps): Promise<LoadAllOrderResponse>;
    findById(params: LoadOrderByIdRequest): Promise<LoadOrderByIdResponse | null>;
    findByTable(params: LoadOrderByTableRequest): Promise<LoadOrderByTableResponse>;
    transferTable(params: TransferTableRequest): Promise<TransferTableResponse>;
}
