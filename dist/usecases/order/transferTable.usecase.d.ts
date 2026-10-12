import { IOrderRepository } from '../../domain/repositories/order.repository.interface.js';
import { TransferTableRequest, TransferTableResponse } from '../../domain/models/order.model.js';
export declare class TransferTableUseCase {
    private readonly orderRepository;
    constructor(orderRepository: IOrderRepository);
    execute(params: TransferTableRequest): Promise<TransferTableResponse>;
}
