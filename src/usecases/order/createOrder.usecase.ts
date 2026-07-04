import { IOrderRepository } from '@domain/repositories/order.repository.interface';
import { CreateOrderRequest, CreateOrderResponse } from '@domain/models/order.model';

export class CreateOrderUseCase {
    constructor(private readonly orderRepository: IOrderRepository) { }
    async execute(params: CreateOrderRequest): Promise<CreateOrderResponse> {
        return await this.orderRepository.create(params);
    }
}
