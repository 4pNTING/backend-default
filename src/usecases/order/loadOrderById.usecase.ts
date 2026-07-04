import { IOrderRepository } from '@domain/repositories/order.repository.interface';
import { LoadOrderByIdRequest, LoadOrderByIdResponse } from '@domain/models/order.model';

export class LoadOrderByIdUseCase {
    constructor(private readonly orderRepository: IOrderRepository) { }
    async execute(params: LoadOrderByIdRequest): Promise<LoadOrderByIdResponse | null> {
        return await this.orderRepository.findById(params);
    }
}
