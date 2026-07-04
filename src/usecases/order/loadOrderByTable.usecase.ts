import { IOrderRepository } from '@domain/repositories/order.repository.interface';
import { LoadOrderByTableRequest, LoadOrderByTableResponse } from '@domain/models/order.model';

export class LoadOrderByTableUseCase {
    constructor(private readonly orderRepository: IOrderRepository) { }
    async execute(params: LoadOrderByTableRequest): Promise<LoadOrderByTableResponse> {
        return await this.orderRepository.findByTable(params);
    }
}
