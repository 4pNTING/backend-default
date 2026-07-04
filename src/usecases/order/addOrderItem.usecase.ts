import { IOrderRepository } from '@domain/repositories/order.repository.interface';
import { AddOrderItemRequest, AddOrderItemResponse } from '@domain/models/order.model';

export class AddOrderItemUseCase {
    constructor(private readonly orderRepository: IOrderRepository) { }
    async execute(params: AddOrderItemRequest): Promise<AddOrderItemResponse> {
        return await this.orderRepository.addItem(params);
    }
}
