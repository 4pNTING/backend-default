import { OrderModel } from '../../domain/models/order.model';
import { OrderStatus } from '../../domain/enums/enum';
import { TableEntity } from './table.entity';
import { UserEntity } from './user.entity';
import { OrderItemEntity } from './order-item.entity';
export declare class OrderEntity implements OrderModel {
    _id: string;
    orderNumber: string;
    tableId: string;
    table: TableEntity;
    staffId: string;
    staff: UserEntity;
    status: OrderStatus;
    note: string;
    subTotal: number;
    discount: number;
    total: number;
    items: OrderItemEntity[];
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
}
