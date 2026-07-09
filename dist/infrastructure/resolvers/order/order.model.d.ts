import { OrderStatus } from '../../../domain/enums/enum';
export declare class OrderItem {
    _id: string;
    orderId: string;
    menuItemId: string;
    menuItemName: string;
    quantity: number;
    unitPrice: number;
    totalPrice: number;
    note?: string;
}
export declare class Order {
    _id: string;
    orderNumber: string;
    tableId: string;
    staffId: string;
    status: OrderStatus;
    note?: string;
    subTotal: number;
    discount: number;
    total: number;
    items?: OrderItem[];
    createdAt?: Date;
    updatedAt?: Date;
}
export declare class LoadOrderResponse {
    order: Order[];
}
export declare class LoadOrderByIdResponse {
    order: Order;
}
export declare class CreateOrderResponse {
    order: Order;
}
export declare class UpdateOrderResponse {
    order: Order;
}
export declare class AddOrderItemResponse {
    orderId: string;
    item: OrderItem;
}
export declare class CancelOrderResponse {
    _id: string;
}
export declare class CreateOrderDto {
    tableId: string;
    staffId: string;
    note?: string;
    discount?: number;
}
export declare class AddOrderItemDto {
    orderId: string;
    menuItemId: string;
    menuItemName: string;
    quantity: number;
    unitPrice: number;
    note?: string;
}
export declare class RemoveOrderItemDto {
    orderItemId: string;
    orderId: string;
}
export declare class UpdateOrderStatusDto {
    _id: string;
    status: OrderStatus;
}
export declare class CancelOrderDto {
    _id: string;
    reason?: string;
}
export declare class LoadOrderDto {
    page?: number;
    limit?: number;
    tableId?: string;
    status?: OrderStatus;
}
export declare class LoadOrderByIdDto {
    _id: string;
}
export declare class LoadOrderByTableDto {
    tableId: string;
}
