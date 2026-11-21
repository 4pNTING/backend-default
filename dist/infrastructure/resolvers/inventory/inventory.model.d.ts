import { ActiveStatus, StockTransactionType } from '../../../domain/enums/enum';
export declare class InventoryItem {
    _id: string;
    name: string;
    sku?: string;
    category: string;
    unit: string;
    currentStock: number;
    minStockAlert: number;
    costPerUnit: number;
    isActive: ActiveStatus;
    createdAt?: Date;
    updatedAt?: Date;
}
export declare class RecipeItem {
    _id: string;
    menuItemId: string;
    inventoryItemId: string;
    quantityRequired: number;
    inventoryItem?: InventoryItem;
    createdAt?: Date;
    updatedAt?: Date;
}
export declare class StockTransaction {
    _id: string;
    inventoryItemId: string;
    type: StockTransactionType;
    quantity: number;
    balanceAfter: number;
    orderId?: string;
    staffId?: string;
    note?: string;
    inventoryItem?: InventoryItem;
    createdAt?: Date;
}
export declare class LoadInventoryResponse {
    total: number;
    items: InventoryItem[];
}
export declare class LoadLowStockAlertResponse {
    items: InventoryItem[];
}
export declare class LoadRecipeByMenuItemResponse {
    recipes: RecipeItem[];
}
export declare class LoadStockHistoryResponse {
    total: number;
    items: StockTransaction[];
}
export declare class CreateInventoryItemResponse {
    item: InventoryItem;
}
export declare class UpdateInventoryItemResponse {
    item: InventoryItem;
}
export declare class DeleteInventoryItemResponse {
    _id: string;
}
export declare class AdjustStockResponse {
    transaction: StockTransaction;
    item: InventoryItem;
}
export declare class SetMenuItemRecipeResponse {
    menuItemId: string;
    recipes: RecipeItem[];
}
export declare class CreateInventoryItemDto {
    name: string;
    sku?: string;
    category: string;
    unit: string;
    currentStock?: number;
    minStockAlert?: number;
    costPerUnit?: number;
    isActive?: ActiveStatus;
}
export declare class UpdateInventoryItemDto {
    _id: string;
    name?: string;
    sku?: string;
    category?: string;
    unit?: string;
    minStockAlert?: number;
    costPerUnit?: number;
    isActive?: ActiveStatus;
}
export declare class DeleteInventoryItemDto {
    _id: string;
}
export declare class LoadInventoryDto {
    page?: number;
    limit?: number;
    search?: string;
    category?: string;
    isActive?: ActiveStatus;
}
export declare class AdjustStockDto {
    inventoryItemId: string;
    type: StockTransactionType;
    quantity: number;
    staffId?: string;
    note?: string;
}
export declare class RecipeIngredientInput {
    inventoryItemId: string;
    quantityRequired: number;
}
export declare class SetMenuItemRecipeDto {
    menuItemId: string;
    ingredients: RecipeIngredientInput[];
}
export declare class LoadStockHistoryDto {
    inventoryItemId?: string;
    type?: StockTransactionType;
    page?: number;
    limit?: number;
}
