import { IOrderRepository } from '@domain/repositories/order.repository.interface';
import { RemoveOrderItemRequest } from '@domain/models/order.model';

export class RemoveOrderItemUseCase {
    constructor(private readonly orderRepository: IOrderRepository) { }
    async execute(params: RemoveOrderItemRequest): Promise<void> {
        return await this.orderRepository.removeItem(params);
    }
}
