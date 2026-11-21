import { ActiveStatus, StockTransactionType } from '../enums/enum';

// ─── Base Models ──────────────────────────────────────────
export class InventoryItemModel {
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

export class RecipeItemModel {
    _id: string;
    menuItemId: string;
    inventoryItemId: string;
    quantityRequired: number;
    inventoryItem?: InventoryItemModel;
    createdAt?: Date;
    updatedAt?: Date;
}

export class StockTransactionModel {
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

// ─── Create ───────────────────────────────────────────────
export class CreateInventoryItemRequest {
    name: string;
    sku?: string;
    category: string;
    unit: string;
    currentStock?: number;
    minStockAlert?: number;
    costPerUnit?: number;
    isActive?: ActiveStatus;
}

export class CreateInventoryItemResponse extends InventoryItemModel { }

// ─── Update ───────────────────────────────────────────────
export class UpdateInventoryItemRequest {
    _id: string;
    name?: string;
    sku?: string;
    category?: string;
    unit?: string;
    minStockAlert?: number;
    costPerUnit?: number;
    isActive?: ActiveStatus;
}

export class UpdateInventoryItemResponse extends InventoryItemModel { }

// ─── Delete ───────────────────────────────────────────────
export class DeleteInventoryItemRequest {
    _id: string;
}

export class DeleteInventoryItemResponse {
    _id: string;
}

// ─── Load / Query ─────────────────────────────────────────
export class LoadInventoryRequest {
    page?: number;
    limit?: number;
    search?: string;
    category?: string;
    isActive?: ActiveStatus;
}

export class LoadInventoryResponse {
    items: InventoryItemModel[];
    total: number;
}

export class LoadLowStockAlertResponse {
    items: InventoryItemModel[];
}

// ─── Adjust Stock ─────────────────────────────────────────
export class AdjustStockRequest {
    inventoryItemId: string;
    type: StockTransactionType;
    quantity: number;
    staffId?: string;
    note?: string;
}

export class AdjustStockResponse {
    transaction: StockTransactionModel;
    item: InventoryItemModel;
}

// ─── Recipe ───────────────────────────────────────────────
export class RecipeIngredientItem {
    inventoryItemId: string;
    quantityRequired: number;
}

export class SetMenuItemRecipeRequest {
    menuItemId: string;
    ingredients: RecipeIngredientItem[];
}

export class SetMenuItemRecipeResponse {
    menuItemId: string;
    recipes: RecipeItemModel[];
}

export class LoadRecipeByMenuItemRequest {
    menuItemId: string;
}

export class LoadRecipeByMenuItemResponse {
    recipes: RecipeItemModel[];
}

// ─── Stock History ────────────────────────────────────────
export class LoadStockHistoryRequest {
    inventoryItemId?: string;
    type?: StockTransactionType;
    page?: number;
    limit?: number;
}

export class LoadStockHistoryResponse {
    items: StockTransactionModel[];
    total: number;
}
