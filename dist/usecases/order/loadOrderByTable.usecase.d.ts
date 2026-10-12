import { IOrderRepository } from '../../domain/repositories/order.repository.interface.js';
import { LoadOrderByTableRequest, LoadOrderByTableResponse } from '../../domain/models/order.model.js';
export declare class LoadOrderByTableUseCase {
    private readonly orderRepository;
    constructor(orderRepository: IOrderRepository);
    execute(params: LoadOrderByTableRequest): Promise<LoadOrderByTableResponse>;
}
