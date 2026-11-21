import { DataSource, Repository, QueryRunner } from 'typeorm';
import { InventoryItemEntity } from '../../entities/inventory-item.entity';
import { RecipeItemEntity } from '../../entities/recipe-item.entity';
import { StockTransactionEntity } from '../../entities/stock-transaction.entity';
import { MenuItemEntity } from '../../entities/menu-item.entity';
import { IInventoryRepository } from '../../../domain/repositories/inventory.repository.interface.js';
import { CreateInventoryItemRequest, CreateInventoryItemResponse, UpdateInventoryItemRequest, UpdateInventoryItemResponse, DeleteInventoryItemRequest, DeleteInventoryItemResponse, LoadInventoryRequest, LoadInventoryResponse, LoadLowStockAlertResponse, AdjustStockRequest, AdjustStockResponse, SetMenuItemRecipeRequest, SetMenuItemRecipeResponse, LoadRecipeByMenuItemRequest, LoadRecipeByMenuItemResponse, LoadStockHistoryRequest, LoadStockHistoryResponse } from '../../../domain/models/inventory.model.js';
import { RedisService } from '../../cache/redis.service';
export declare class DatabaseInventoryRepository implements IInventoryRepository {
    private readonly inventoryItemEntity;
    private readonly recipeItemEntity;
    private readonly stockTransactionEntity;
    private readonly menuItemEntity;
    private readonly dataSource;
    private readonly redisService;
    constructor(inventoryItemEntity: Repository<InventoryItemEntity>, recipeItemEntity: Repository<RecipeItemEntity>, stockTransactionEntity: Repository<StockTransactionEntity>, menuItemEntity: Repository<MenuItemEntity>, dataSource: DataSource, redisService: RedisService);
    createItem(params: CreateInventoryItemRequest): Promise<CreateInventoryItemResponse>;
    updateItem(params: UpdateInventoryItemRequest): Promise<UpdateInventoryItemResponse>;
    deleteItem(params: DeleteInventoryItemRequest): Promise<DeleteInventoryItemResponse>;
    findAll(params: LoadInventoryRequest): Promise<LoadInventoryResponse>;
    findLowStock(): Promise<LoadLowStockAlertResponse>;
    adjustStock(params: AdjustStockRequest): Promise<AdjustStockResponse>;
    setRecipe(params: SetMenuItemRecipeRequest): Promise<SetMenuItemRecipeResponse>;
    getRecipeByMenuItem(params: LoadRecipeByMenuItemRequest): Promise<LoadRecipeByMenuItemResponse>;
    getStockHistory(params: LoadStockHistoryRequest): Promise<LoadStockHistoryResponse>;
    deductStockForOrder(orderId: string, externalSession?: QueryRunner): Promise<void>;
    private updateMenuAvailabilityForIngredient;
}
