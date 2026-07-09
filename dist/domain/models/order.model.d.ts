import { OrderStatus } from '../enums/enum';
export declare class OrderItemModel {
    _id: string;
    orderId: string;
    menuItemId: string;
    menuItemName: string;
    quantity: number;
    unitPrice: number;
    totalPrice: number;
    note?: string;
}
export declare class OrderModel {
    _id: string;
    orderNumber: string;
    tableId: string;
    staffId: string;
    status: OrderStatus;
    note?: string;
    subTotal: number;
    discount: number;
    total: number;
    items?: OrderItemModel[];
    createdAt?: Date;
    updatedAt?: Date;
}
export declare class CreateOrderRequest {
    tableId: string;
    staffId: string;
    note?: string;
    discount?: number;
}
export declare class CreateOrderResponse extends OrderModel {
}
export declare class AddOrderItemRequest {
    orderId: string;
    menuItemId: string;
    menuItemName: string;
    quantity: number;
    unitPrice: number;
    note?: string;
}
export declare class AddOrderItemResponse {
    orderId: string;
    item: OrderItemModel;
}
export declare class RemoveOrderItemRequest {
    orderItemId: string;
    orderId: string;
}
export declare class UpdateOrderStatusRequest {
    _id: string;
    status: OrderStatus;
}
export declare class CancelOrderRequest {
    _id: string;
    reason?: string;
}
export declare class DeleteOrderRequest {
    _id: string;
}
export declare class LoadAllOrderResponse {
    items: OrderModel[];
}
export declare class LoadOrderByIdRequest {
    _id: string;
}
export declare class LoadOrderByIdResponse extends OrderModel {
}
export declare class LoadOrderByTableRequest {
    tableId: string;
}
export declare class LoadOrderByTableResponse {
    items: OrderModel[];
}
