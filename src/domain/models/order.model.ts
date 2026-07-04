import { OrderStatus } from '../enums/enum';

// ─── Order Item Model ─────────────────────────────────────
export class OrderItemModel {
    _id: string;
    orderId: string;
    menuItemId: string;
    menuItemName: string;    // snapshot ชื่อตอนสั่ง
    quantity: number;
    unitPrice: number;       // snapshot ราคาตอนสั่ง
    totalPrice: number;
    note?: string;
}

// ─── Order Model ──────────────────────────────────────────
export class OrderModel {
    _id: string;
    orderNumber: string;     // เช่น ORD-20260626-001
    tableId: string;         // FK → Table
    staffId: string;         // FK → User
    status: OrderStatus;
    note?: string;
    subTotal: number;
    discount: number;
    total: number;
    items?: OrderItemModel[];
    createdAt?: Date;
    updatedAt?: Date;
}

// ─── Create ───────────────────────────────────────────────
export class CreateOrderRequest {
    tableId: string;
    staffId: string;
    note?: string;
    discount?: number;
}

export class CreateOrderResponse extends OrderModel { }

// ─── Add Item ─────────────────────────────────────────────
export class AddOrderItemRequest {
    orderId: string;
    menuItemId: string;
    menuItemName: string;
    quantity: number;
    unitPrice: number;
    note?: string;
}

export class AddOrderItemResponse {
    orderId: string;
    item: OrderItemModel;
}

// ─── Remove Item ──────────────────────────────────────────
export class RemoveOrderItemRequest {
    orderItemId: string;
    orderId: string;
}

// ─── Update Status ────────────────────────────────────────
export class UpdateOrderStatusRequest {
    _id: string;
    status: OrderStatus;
}

// ─── Cancel ───────────────────────────────────────────────
export class CancelOrderRequest {
    _id: string;
    reason?: string;
}

// ─── Delete ───────────────────────────────────────────────
export class DeleteOrderRequest {
    _id: string;
}

// ─── Load ─────────────────────────────────────────────────
export class LoadAllOrderResponse {
    items: OrderModel[];
}

export class LoadOrderByIdRequest {
    _id: string;
}

export class LoadOrderByIdResponse extends OrderModel { }

export class LoadOrderByTableRequest {
    tableId: string;
}

export class LoadOrderByTableResponse {
    items: OrderModel[];
}
