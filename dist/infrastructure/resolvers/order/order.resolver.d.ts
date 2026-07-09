import { CreateOrderDto, AddOrderItemDto, RemoveOrderItemDto, UpdateOrderStatusDto, CancelOrderDto, LoadOrderDto, LoadOrderByIdDto, LoadOrderByTableDto } from './order.model';
import { CreateOrderUseCase } from '../../../usecases/order/createOrder.usecase';
import { AddOrderItemUseCase } from '../../../usecases/order/addOrderItem.usecase';
import { RemoveOrderItemUseCase } from '../../../usecases/order/removeOrderItem.usecase';
import { UpdateOrderStatusUseCase } from '../../../usecases/order/updateOrderStatus.usecase';
import { CancelOrderUseCase } from '../../../usecases/order/cancelOrder.usecase';
import { LoadOrderUseCase } from '../../../usecases/order/loadOrder.usecase';
import { LoadOrderByIdUseCase } from '../../../usecases/order/loadOrderById.usecase';
import { LoadOrderByTableUseCase } from '../../../usecases/order/loadOrderByTable.usecase';
export declare class OrderResolver {
    private readonly createOrderUseCase;
    private readonly addOrderItemUseCase;
    private readonly removeOrderItemUseCase;
    private readonly updateOrderStatusUseCase;
    private readonly cancelOrderUseCase;
    private readonly loadOrderUseCase;
    private readonly loadOrderByIdUseCase;
    private readonly loadOrderByTableUseCase;
    constructor(createOrderUseCase: CreateOrderUseCase, addOrderItemUseCase: AddOrderItemUseCase, removeOrderItemUseCase: RemoveOrderItemUseCase, updateOrderStatusUseCase: UpdateOrderStatusUseCase, cancelOrderUseCase: CancelOrderUseCase, loadOrderUseCase: LoadOrderUseCase, loadOrderByIdUseCase: LoadOrderByIdUseCase, loadOrderByTableUseCase: LoadOrderByTableUseCase);
    loadOrder(input: LoadOrderDto): Promise<{
        order: import("../../../domain/models/order.model").OrderModel[];
    }>;
    loadOrderById(input: LoadOrderByIdDto): Promise<{
        order: import("../../../domain/models/order.model").LoadOrderByIdResponse;
    }>;
    loadOrderByTable(input: LoadOrderByTableDto): Promise<{
        order: import("../../../domain/models/order.model").OrderModel[];
    }>;
    createOrder(input: CreateOrderDto): Promise<{
        order: import("../../../domain/models/order.model").CreateOrderResponse;
    }>;
    addOrderItem(input: AddOrderItemDto): Promise<import("../../../domain/models/order.model").AddOrderItemResponse>;
    removeOrderItem(input: RemoveOrderItemDto): Promise<{
        order: import("../../../domain/models/order.model").LoadOrderByIdResponse;
    }>;
    updateOrderStatus(input: UpdateOrderStatusDto): Promise<{
        order: import("../../../domain/models/order.model").LoadOrderByIdResponse;
    }>;
    cancelOrder(input: CancelOrderDto): Promise<{
        _id: string;
    }>;
}
