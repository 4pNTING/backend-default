import { OrderItemModel } from '../../domain/models/order.model';
import { OrderEntity } from './order.entity';
export declare class OrderItemEntity implements OrderItemModel {
    _id: string;
    orderId: string;
    order: OrderEntity;
    menuItemId: string;
    menuItemName: string;
    quantity: number;
    unitPrice: number;
    totalPrice: number;
    note: string;
    createdAt: Date;
    updatedAt: Date;
}
