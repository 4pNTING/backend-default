"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var InventoryUsecasesProxyModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventoryUsecasesProxyModule = void 0;
const common_1 = require("@nestjs/common");
const inventory_repository_1 = require("../repositories/inventory/inventory.repository");
const repositories_module_1 = require("../repositories/repositories.module");
const createInventoryItem_usecase_1 = require("../../usecases/inventory/createInventoryItem.usecase");
const updateInventoryItem_usecase_1 = require("../../usecases/inventory/updateInventoryItem.usecase");
const deleteInventoryItem_usecase_1 = require("../../usecases/inventory/deleteInventoryItem.usecase");
const loadInventory_usecase_1 = require("../../usecases/inventory/loadInventory.usecase");
const loadLowStockAlert_usecase_1 = require("../../usecases/inventory/loadLowStockAlert.usecase");
const adjustStock_usecase_1 = require("../../usecases/inventory/adjustStock.usecase");
const setMenuItemRecipe_usecase_1 = require("../../usecases/inventory/setMenuItemRecipe.usecase");
const loadRecipeByMenuItem_usecase_1 = require("../../usecases/inventory/loadRecipeByMenuItem.usecase");
const loadStockHistory_usecase_1 = require("../../usecases/inventory/loadStockHistory.usecase");
let InventoryUsecasesProxyModule = InventoryUsecasesProxyModule_1 = class InventoryUsecasesProxyModule {
    static register() {
        return {
            module: InventoryUsecasesProxyModule_1,
            providers: [
                {
                    inject: [inventory_repository_1.DatabaseInventoryRepository],
                    provide: InventoryUsecasesProxyModule_1.CREATE_INVENTORY_ITEM_PROXY,
                    useFactory: (repo) => new createInventoryItem_usecase_1.CreateInventoryItemUseCase(repo),
                },
                {
                    inject: [inventory_repository_1.DatabaseInventoryRepository],
                    provide: InventoryUsecasesProxyModule_1.UPDATE_INVENTORY_ITEM_PROXY,
                    useFactory: (repo) => new updateInventoryItem_usecase_1.UpdateInventoryItemUseCase(repo),
                },
                {
                    inject: [inventory_repository_1.DatabaseInventoryRepository],
                    provide: InventoryUsecasesProxyModule_1.DELETE_INVENTORY_ITEM_PROXY,
                    useFactory: (repo) => new deleteInventoryItem_usecase_1.DeleteInventoryItemUseCase(repo),
                },
                {
                    inject: [inventory_repository_1.DatabaseInventoryRepository],
                    provide: InventoryUsecasesProxyModule_1.LOAD_INVENTORY_PROXY,
                    useFactory: (repo) => new loadInventory_usecase_1.LoadInventoryUseCase(repo),
                },
                {
                    inject: [inventory_repository_1.DatabaseInventoryRepository],
                    provide: InventoryUsecasesProxyModule_1.LOAD_LOW_STOCK_ALERT_PROXY,
                    useFactory: (repo) => new loadLowStockAlert_usecase_1.LoadLowStockAlertUseCase(repo),
                },
                {
                    inject: [inventory_repository_1.DatabaseInventoryRepository],
                    provide: InventoryUsecasesProxyModule_1.ADJUST_STOCK_PROXY,
                    useFactory: (repo) => new adjustStock_usecase_1.AdjustStockUseCase(repo),
                },
                {
                    inject: [inventory_repository_1.DatabaseInventoryRepository],
                    provide: InventoryUsecasesProxyModule_1.SET_MENU_ITEM_RECIPE_PROXY,
                    useFactory: (repo) => new setMenuItemRecipe_usecase_1.SetMenuItemRecipeUseCase(repo),
                },
                {
                    inject: [inventory_repository_1.DatabaseInventoryRepository],
                    provide: InventoryUsecasesProxyModule_1.LOAD_RECIPE_BY_MENU_ITEM_PROXY,
                    useFactory: (repo) => new loadRecipeByMenuItem_usecase_1.LoadRecipeByMenuItemUseCase(repo),
                },
                {
                    inject: [inventory_repository_1.DatabaseInventoryRepository],
                    provide: InventoryUsecasesProxyModule_1.LOAD_STOCK_HISTORY_PROXY,
                    useFactory: (repo) => new loadStockHistory_usecase_1.LoadStockHistoryUseCase(repo),
                },
            ],
            exports: [
                InventoryUsecasesProxyModule_1.CREATE_INVENTORY_ITEM_PROXY,
                InventoryUsecasesProxyModule_1.UPDATE_INVENTORY_ITEM_PROXY,
                InventoryUsecasesProxyModule_1.DELETE_INVENTORY_ITEM_PROXY,
                InventoryUsecasesProxyModule_1.LOAD_INVENTORY_PROXY,
                InventoryUsecasesProxyModule_1.LOAD_LOW_STOCK_ALERT_PROXY,
                InventoryUsecasesProxyModule_1.ADJUST_STOCK_PROXY,
                InventoryUsecasesProxyModule_1.SET_MENU_ITEM_RECIPE_PROXY,
                InventoryUsecasesProxyModule_1.LOAD_RECIPE_BY_MENU_ITEM_PROXY,
                InventoryUsecasesProxyModule_1.LOAD_STOCK_HISTORY_PROXY,
            ],
        };
    }
};
exports.InventoryUsecasesProxyModule = InventoryUsecasesProxyModule;
InventoryUsecasesProxyModule.CREATE_INVENTORY_ITEM_PROXY = 'CreateInventoryItemProxy';
InventoryUsecasesProxyModule.UPDATE_INVENTORY_ITEM_PROXY = 'UpdateInventoryItemProxy';
InventoryUsecasesProxyModule.DELETE_INVENTORY_ITEM_PROXY = 'DeleteInventoryItemProxy';
InventoryUsecasesProxyModule.LOAD_INVENTORY_PROXY = 'LoadInventoryProxy';
InventoryUsecasesProxyModule.LOAD_LOW_STOCK_ALERT_PROXY = 'LoadLowStockAlertProxy';
InventoryUsecasesProxyModule.ADJUST_STOCK_PROXY = 'AdjustStockProxy';
InventoryUsecasesProxyModule.SET_MENU_ITEM_RECIPE_PROXY = 'SetMenuItemRecipeProxy';
InventoryUsecasesProxyModule.LOAD_RECIPE_BY_MENU_ITEM_PROXY = 'LoadRecipeByMenuItemProxy';
InventoryUsecasesProxyModule.LOAD_STOCK_HISTORY_PROXY = 'LoadStockHistoryProxy';
exports.InventoryUsecasesProxyModule = InventoryUsecasesProxyModule = InventoryUsecasesProxyModule_1 = __decorate([
    (0, common_1.Module)({
        imports: [repositories_module_1.RepositoriesModule],
    })
], InventoryUsecasesProxyModule);
//# sourceMappingURL=inventory-usecases-proxy.module.js.map