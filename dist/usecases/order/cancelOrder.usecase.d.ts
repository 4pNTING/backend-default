import { IOrderRepository } from '../../domain/repositories/order.repository.interface.js';
import { CancelOrderRequest } from '../../domain/models/order.model.js';
export declare class CancelOrderUseCase {
    private readonly orderRepository;
    constructor(orderRepository: IOrderRepository);
    execute(params: CancelOrderRequest): Promise<void>;
}
