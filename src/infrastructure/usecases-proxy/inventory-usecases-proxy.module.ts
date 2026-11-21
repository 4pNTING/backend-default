import { DynamicModule, Module } from '@nestjs/common';
import { DatabaseInventoryRepository } from '../repositories/inventory/inventory.repository';
import { RepositoriesModule } from '../repositories/repositories.module';

import { CreateInventoryItemUseCase } from '../../usecases/inventory/createInventoryItem.usecase';
import { UpdateInventoryItemUseCase } from '../../usecases/inventory/updateInventoryItem.usecase';
import { DeleteInventoryItemUseCase } from '../../usecases/inventory/deleteInventoryItem.usecase';
import { LoadInventoryUseCase } from '../../usecases/inventory/loadInventory.usecase';
import { LoadLowStockAlertUseCase } from '../../usecases/inventory/loadLowStockAlert.usecase';
import { AdjustStockUseCase } from '../../usecases/inventory/adjustStock.usecase';
import { SetMenuItemRecipeUseCase } from '../../usecases/inventory/setMenuItemRecipe.usecase';
import { LoadRecipeByMenuItemUseCase } from '../../usecases/inventory/loadRecipeByMenuItem.usecase';
import { LoadStockHistoryUseCase } from '../../usecases/inventory/loadStockHistory.usecase';

@Module({
    imports: [RepositoriesModule],
})
export class InventoryUsecasesProxyModule {
    static CREATE_INVENTORY_ITEM_PROXY = 'CreateInventoryItemProxy';
    static UPDATE_INVENTORY_ITEM_PROXY = 'UpdateInventoryItemProxy';
    static DELETE_INVENTORY_ITEM_PROXY = 'DeleteInventoryItemProxy';
    static LOAD_INVENTORY_PROXY = 'LoadInventoryProxy';
    static LOAD_LOW_STOCK_ALERT_PROXY = 'LoadLowStockAlertProxy';
    static ADJUST_STOCK_PROXY = 'AdjustStockProxy';
    static SET_MENU_ITEM_RECIPE_PROXY = 'SetMenuItemRecipeProxy';
    static LOAD_RECIPE_BY_MENU_ITEM_PROXY = 'LoadRecipeByMenuItemProxy';
    static LOAD_STOCK_HISTORY_PROXY = 'LoadStockHistoryProxy';

    static register(): DynamicModule {
        return {
            module: InventoryUsecasesProxyModule,
            providers: [
                {
                    inject: [DatabaseInventoryRepository],
                    provide: InventoryUsecasesProxyModule.CREATE_INVENTORY_ITEM_PROXY,
                    useFactory: (repo: DatabaseInventoryRepository) => new CreateInventoryItemUseCase(repo),
                },
                {
                    inject: [DatabaseInventoryRepository],
                    provide: InventoryUsecasesProxyModule.UPDATE_INVENTORY_ITEM_PROXY,
                    useFactory: (repo: DatabaseInventoryRepository) => new UpdateInventoryItemUseCase(repo),
                },
                {
                    inject: [DatabaseInventoryRepository],
                    provide: InventoryUsecasesProxyModule.DELETE_INVENTORY_ITEM_PROXY,
                    useFactory: (repo: DatabaseInventoryRepository) => new DeleteInventoryItemUseCase(repo),
                },
                {
                    inject: [DatabaseInventoryRepository],
                    provide: InventoryUsecasesProxyModule.LOAD_INVENTORY_PROXY,
                    useFactory: (repo: DatabaseInventoryRepository) => new LoadInventoryUseCase(repo),
                },
                {
                    inject: [DatabaseInventoryRepository],
                    provide: InventoryUsecasesProxyModule.LOAD_LOW_STOCK_ALERT_PROXY,
                    useFactory: (repo: DatabaseInventoryRepository) => new LoadLowStockAlertUseCase(repo),
                },
                {
                    inject: [DatabaseInventoryRepository],
                    provide: InventoryUsecasesProxyModule.ADJUST_STOCK_PROXY,
                    useFactory: (repo: DatabaseInventoryRepository) => new AdjustStockUseCase(repo),
                },
                {
                    inject: [DatabaseInventoryRepository],
                    provide: InventoryUsecasesProxyModule.SET_MENU_ITEM_RECIPE_PROXY,
                    useFactory: (repo: DatabaseInventoryRepository) => new SetMenuItemRecipeUseCase(repo),
                },
                {
                    inject: [DatabaseInventoryRepository],
                    provide: InventoryUsecasesProxyModule.LOAD_RECIPE_BY_MENU_ITEM_PROXY,
                    useFactory: (repo: DatabaseInventoryRepository) => new LoadRecipeByMenuItemUseCase(repo),
                },
                {
                    inject: [DatabaseInventoryRepository],
                    provide: InventoryUsecasesProxyModule.LOAD_STOCK_HISTORY_PROXY,
                    useFactory: (repo: DatabaseInventoryRepository) => new LoadStockHistoryUseCase(repo),
                },
            ],
            exports: [
                InventoryUsecasesProxyModule.CREATE_INVENTORY_ITEM_PROXY,
                InventoryUsecasesProxyModule.UPDATE_INVENTORY_ITEM_PROXY,
                InventoryUsecasesProxyModule.DELETE_INVENTORY_ITEM_PROXY,
                InventoryUsecasesProxyModule.LOAD_INVENTORY_PROXY,
                InventoryUsecasesProxyModule.LOAD_LOW_STOCK_ALERT_PROXY,
                InventoryUsecasesProxyModule.ADJUST_STOCK_PROXY,
                InventoryUsecasesProxyModule.SET_MENU_ITEM_RECIPE_PROXY,
                InventoryUsecasesProxyModule.LOAD_RECIPE_BY_MENU_ITEM_PROXY,
                InventoryUsecasesProxyModule.LOAD_STOCK_HISTORY_PROXY,
            ],
        };
    }
}
