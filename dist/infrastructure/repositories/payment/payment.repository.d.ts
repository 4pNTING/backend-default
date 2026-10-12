import { DataSource, Repository } from 'typeorm';
import { PaymentEntity } from '../../entities/payment.entity.js';
import { OrderEntity } from '../../entities/order.entity.js';
import { IPaymentRepository } from '../../../domain/repositories/payment.repository.interface.js';
import { ProcessPaymentRequest, ProcessPaymentResponse, LoadPaymentByOrderRequest, LoadPaymentByOrderResponse, LoadPaymentByIdRequest, LoadPaymentByIdResponse } from '../../../domain/models/payment.model.js';
import { RedisService } from '../../cache/redis.service';
export declare class DatabasePaymentRepository implements IPaymentRepository {
    private readonly paymentEntity;
    private readonly orderEntity;
    private readonly dataSource;
    private readonly redisService;
    constructor(paymentEntity: Repository<PaymentEntity>, orderEntity: Repository<OrderEntity>, dataSource: DataSource, redisService: RedisService);
    processPayment(params: ProcessPaymentRequest): Promise<ProcessPaymentResponse>;
    findByOrder(params: LoadPaymentByOrderRequest): Promise<LoadPaymentByOrderResponse>;
    findById(params: LoadPaymentByIdRequest): Promise<LoadPaymentByIdResponse | null>;
}
