import { RecipeItemModel } from '../../domain/models/inventory.model';
import { MenuItemEntity } from './menu-item.entity';
import { InventoryItemEntity } from './inventory-item.entity';
export declare class RecipeItemEntity implements RecipeItemModel {
    _id: string;
    menuItemId: string;
    menuItem: MenuItemEntity;
    inventoryItemId: string;
    inventoryItem: InventoryItemEntity;
    quantityRequired: number;
    createdAt: Date;
    updatedAt: Date;
}
