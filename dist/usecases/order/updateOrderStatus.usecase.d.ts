import { IOrderRepository } from '../../domain/repositories/order.repository.interface.js';
import { UpdateOrderStatusRequest } from '../../domain/models/order.model.js';
export declare class UpdateOrderStatusUseCase {
    private readonly orderRepository;
    constructor(orderRepository: IOrderRepository);
    execute(params: UpdateOrderStatusRequest): Promise<void>;
}
