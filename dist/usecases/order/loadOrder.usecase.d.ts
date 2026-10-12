import { IOrderRepository } from '../../domain/repositories/order.repository.interface.js';
import { LoadAllOrderResponse } from '../../domain/models/order.model.js';
import { QueryProps } from '../../domain/models/query.model.js';
export declare class LoadOrderUseCase {
    private readonly orderRepository;
    constructor(orderRepository: IOrderRepository);
    execute(query: QueryProps): Promise<LoadAllOrderResponse>;
}
