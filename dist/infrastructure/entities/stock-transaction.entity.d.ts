import { StockTransactionModel } from '../../domain/models/inventory.model';
import { StockTransactionType } from '../../domain/enums/enum';
import { InventoryItemEntity } from './inventory-item.entity';
import { OrderEntity } from './order.entity';
import { UserEntity } from './user.entity';
export declare class StockTransactionEntity implements StockTransactionModel {
    _id: string;
    inventoryItemId: string;
    inventoryItem: InventoryItemEntity;
    type: StockTransactionType;
    quantity: number;
    balanceAfter: number;
    orderId: string;
    order: OrderEntity;
    staffId: string;
    staff: UserEntity;
    note: string;
    createdAt: Date;
}
