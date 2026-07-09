import { QueryProps } from '../models/query.model';
import { CreateOrderRequest, CreateOrderResponse, AddOrderItemRequest, AddOrderItemResponse, RemoveOrderItemRequest, UpdateOrderStatusRequest, CancelOrderRequest, DeleteOrderRequest, LoadAllOrderResponse, LoadOrderByIdRequest, LoadOrderByIdResponse, LoadOrderByTableRequest, LoadOrderByTableResponse } from '../models/order.model';
export interface IOrderRepository {
    create(params: CreateOrderRequest): Promise<CreateOrderResponse>;
    addItem(params: AddOrderItemRequest): Promise<AddOrderItemResponse>;
    removeItem(params: RemoveOrderItemRequest): Promise<void>;
    updateStatus(params: UpdateOrderStatusRequest): Promise<void>;
    cancel(params: CancelOrderRequest): Promise<void>;
    delete(params: DeleteOrderRequest): Promise<void>;
    findAll(query: QueryProps): Promise<LoadAllOrderResponse>;
    findById(params: LoadOrderByIdRequest): Promise<LoadOrderByIdResponse | null>;
    findByTable(params: LoadOrderByTableRequest): Promise<LoadOrderByTableResponse>;
}
