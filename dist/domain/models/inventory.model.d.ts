import { ActiveStatus, StockTransactionType } from '../enums/enum';
export declare class InventoryItemModel {
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
export declare class RecipeItemModel {
    _id: string;
    menuItemId: string;
    inventoryItemId: string;
    quantityRequired: number;
    inventoryItem?: InventoryItemModel;
    createdAt?: Date;
    updatedAt?: Date;
}
export declare class StockTransactionModel {
    _id: string;
    inventoryItemId: string;
    type: StockTransactionType;
    quantity: number;
    balanceAfter: number;
    orderId?: string;
    staffId?: string;
    note?: string;
    inventoryItem?: InventoryItemModel;
    createdAt?: Date;
}
export declare class CreateInventoryItemRequest {
    name: string;
    sku?: string;
    category: string;
    unit: string;
    currentStock?: number;
    minStockAlert?: number;
    costPerUnit?: number;
    isActive?: ActiveStatus;
}
export declare class CreateInventoryItemResponse extends InventoryItemModel {
}
export declare class UpdateInventoryItemRequest {
    _id: string;
    name?: string;
    sku?: string;
    category?: string;
    unit?: string;
    minStockAlert?: number;
    costPerUnit?: number;
    isActive?: ActiveStatus;
}
export declare class UpdateInventoryItemResponse extends InventoryItemModel {
}
export declare class DeleteInventoryItemRequest {
    _id: string;
}
export declare class DeleteInventoryItemResponse {
    _id: string;
}
export declare class LoadInventoryRequest {
    page?: number;
    limit?: number;
    search?: string;
    category?: string;
    isActive?: ActiveStatus;
}
export declare class LoadInventoryResponse {
    items: InventoryItemModel[];
    total: number;
}
export declare class LoadLowStockAlertResponse {
    items: InventoryItemModel[];
}
export declare class AdjustStockRequest {
    inventoryItemId: string;
    type: StockTransactionType;
    quantity: number;
    staffId?: string;
    note?: string;
}
export declare class AdjustStockResponse {
    transaction: StockTransactionModel;
    item: InventoryItemModel;
}
export declare class RecipeIngredientItem {
    inventoryItemId: string;
    quantityRequired: number;
}
export declare class SetMenuItemRecipeRequest {
    menuItemId: string;
    ingredients: RecipeIngredientItem[];
}
export declare class SetMenuItemRecipeResponse {
    menuItemId: string;
    recipes: RecipeItemModel[];
}
export declare class LoadRecipeByMenuItemRequest {
    menuItemId: string;
}
export declare class LoadRecipeByMenuItemResponse {
    recipes: RecipeItemModel[];
}
export declare class LoadStockHistoryRequest {
    inventoryItemId?: string;
    type?: StockTransactionType;
    page?: number;
    limit?: number;
}
export declare class LoadStockHistoryResponse {
    items: StockTransactionModel[];
    total: number;
}
