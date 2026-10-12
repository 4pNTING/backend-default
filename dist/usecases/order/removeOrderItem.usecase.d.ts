import { IOrderRepository } from '../../domain/repositories/order.repository.interface.js';
import { RemoveOrderItemRequest } from '../../domain/models/order.model.js';
export declare class RemoveOrderItemUseCase {
    private readonly orderRepository;
    constructor(orderRepository: IOrderRepository);
    execute(params: RemoveOrderItemRequest): Promise<void>;
}
