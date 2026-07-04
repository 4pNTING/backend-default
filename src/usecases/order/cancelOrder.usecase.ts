import { IOrderRepository } from '@domain/repositories/order.repository.interface';
import { CancelOrderRequest } from '@domain/models/order.model';

export class CancelOrderUseCase {
    constructor(private readonly orderRepository: IOrderRepository) { }
    async execute(params: CancelOrderRequest): Promise<void> {
        return await this.orderRepository.cancel(params);
    }
}
