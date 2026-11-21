import { CreateInventoryItemRequest, CreateInventoryItemResponse, UpdateInventoryItemRequest, UpdateInventoryItemResponse, DeleteInventoryItemRequest, DeleteInventoryItemResponse, LoadInventoryRequest, LoadInventoryResponse, LoadLowStockAlertResponse, AdjustStockRequest, AdjustStockResponse, SetMenuItemRecipeRequest, SetMenuItemRecipeResponse, LoadRecipeByMenuItemRequest, LoadRecipeByMenuItemResponse, LoadStockHistoryRequest, LoadStockHistoryResponse } from '../models/inventory.model';
import { QueryRunner } from 'typeorm';
export interface IInventoryRepository {
    createItem(params: CreateInventoryItemRequest): Promise<CreateInventoryItemResponse>;
    updateItem(params: UpdateInventoryItemRequest): Promise<UpdateInventoryItemResponse>;
    deleteItem(params: DeleteInventoryItemRequest): Promise<DeleteInventoryItemResponse>;
    findAll(params: LoadInventoryRequest): Promise<LoadInventoryResponse>;
    findLowStock(): Promise<LoadLowStockAlertResponse>;
    adjustStock(params: AdjustStockRequest): Promise<AdjustStockResponse>;
    setRecipe(params: SetMenuItemRecipeRequest): Promise<SetMenuItemRecipeResponse>;
    getRecipeByMenuItem(params: LoadRecipeByMenuItemRequest): Promise<LoadRecipeByMenuItemResponse>;
    getStockHistory(params: LoadStockHistoryRequest): Promise<LoadStockHistoryResponse>;
    deductStockForOrder(orderId: string, session?: QueryRunner): Promise<void>;
}
