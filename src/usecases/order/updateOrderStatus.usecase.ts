import { IOrderRepository } from '@domain/repositories/order.repository.interface';
import { UpdateOrderStatusRequest } from '@domain/models/order.model';

export class UpdateOrderStatusUseCase {
    constructor(private readonly orderRepository: IOrderRepository) { }
    async execute(params: UpdateOrderStatusRequest): Promise<void> {
        return await this.orderRepository.updateStatus(params);
    }
}
