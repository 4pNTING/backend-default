import { IOrderRepository } from '../../domain/repositories/order.repository.interface.js';
import { CreateOrderRequest, CreateOrderResponse } from '../../domain/models/order.model.js';
export declare class CreateOrderUseCase {
    private readonly orderRepository;
    constructor(orderRepository: IOrderRepository);
    execute(params: CreateOrderRequest): Promise<CreateOrderResponse>;
}
