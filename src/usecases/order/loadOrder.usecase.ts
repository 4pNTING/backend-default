import { IOrderRepository } from '@domain/repositories/order.repository.interface';
import { LoadAllOrderResponse } from '@domain/models/order.model';
import { QueryProps } from '@domain/models/query.model';

export class LoadOrderUseCase {
    constructor(private readonly orderRepository: IOrderRepository) { }
    async execute(query: QueryProps): Promise<LoadAllOrderResponse> {
        return await this.orderRepository.findAll(query);
    }
}
