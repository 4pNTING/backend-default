import { IOrderRepository } from '@domain/repositories/order.repository.interface';
import { TransferTableRequest, TransferTableResponse } from '@domain/models/order.model';

export class TransferTableUseCase {
    constructor(private readonly orderRepository: IOrderRepository) { }

    async execute(params: TransferTableRequest): Promise<TransferTableResponse> {
        return await this.orderRepository.transferTable(params);
    }
}
