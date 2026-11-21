import { InventoryItemModel } from '../../domain/models/inventory.model';
import { ActiveStatus } from '../../domain/enums/enum';
import { RecipeItemEntity } from './recipe-item.entity';
import { StockTransactionEntity } from './stock-transaction.entity';
export declare class InventoryItemEntity implements InventoryItemModel {
    _id: string;
    name: string;
    sku: string;
    category: string;
    unit: string;
    currentStock: number;
    minStockAlert: number;
    costPerUnit: number;
    isActive: ActiveStatus;
    recipes: RecipeItemEntity[];
    transactions: StockTransactionEntity[];
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
}
