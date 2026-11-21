"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventoryResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const common_1 = require("@nestjs/common");
const jwt_auth_guard_1 = require("../../common/jwt-auth.guard");
const inventory_model_1 = require("./inventory.model");
const inventory_usecases_proxy_module_1 = require("../../usecases-proxy/inventory-usecases-proxy.module");
const createInventoryItem_usecase_1 = require("../../../usecases/inventory/createInventoryItem.usecase");
const updateInventoryItem_usecase_1 = require("../../../usecases/inventory/updateInventoryItem.usecase");
const deleteInventoryItem_usecase_1 = require("../../../usecases/inventory/deleteInventoryItem.usecase");
const loadInventory_usecase_1 = require("../../../usecases/inventory/loadInventory.usecase");
const loadLowStockAlert_usecase_1 = require("../../../usecases/inventory/loadLowStockAlert.usecase");
const adjustStock_usecase_1 = require("../../../usecases/inventory/adjustStock.usecase");
const setMenuItemRecipe_usecase_1 = require("../../../usecases/inventory/setMenuItemRecipe.usecase");
const loadRecipeByMenuItem_usecase_1 = require("../../../usecases/inventory/loadRecipeByMenuItem.usecase");
const loadStockHistory_usecase_1 = require("../../../usecases/inventory/loadStockHistory.usecase");
let InventoryResolver = class InventoryResolver {
    constructor(createInventoryItemUseCase, updateInventoryItemUseCase, deleteInventoryItemUseCase, loadInventoryUseCase, loadLowStockAlertUseCase, adjustStockUseCase, setMenuItemRecipeUseCase, loadRecipeByMenuItemUseCase, loadStockHistoryUseCase) {
        this.createInventoryItemUseCase = createInventoryItemUseCase;
        this.updateInventoryItemUseCase = updateInventoryItemUseCase;
        this.deleteInventoryItemUseCase = deleteInventoryItemUseCase;
        this.loadInventoryUseCase = loadInventoryUseCase;
        this.loadLowStockAlertUseCase = loadLowStockAlertUseCase;
        this.adjustStockUseCase = adjustStockUseCase;
        this.setMenuItemRecipeUseCase = setMenuItemRecipeUseCase;
        this.loadRecipeByMenuItemUseCase = loadRecipeByMenuItemUseCase;
        this.loadStockHistoryUseCase = loadStockHistoryUseCase;
    }
    async loadInventory(input) {
        return await this.loadInventoryUseCase.execute(input ?? {});
    }
    async loadLowStockAlert() {
        return await this.loadLowStockAlertUseCase.execute();
    }
    async loadRecipeByMenuItem(menuItemId) {
        return await this.loadRecipeByMenuItemUseCase.execute({ menuItemId });
    }
    async loadStockHistory(input) {
        return await this.loadStockHistoryUseCase.execute(input ?? {});
    }
    async createInventoryItem(input) {
        const item = await this.createInventoryItemUseCase.execute(input);
        return { item };
    }
    async updateInventoryItem(input) {
        const item = await this.updateInventoryItemUseCase.execute(input);
        return { item };
    }
    async deleteInventoryItem(input) {
        return await this.deleteInventoryItemUseCase.execute(input);
    }
    async adjustStock(input) {
        return await this.adjustStockUseCase.execute(input);
    }
    async setMenuItemRecipe(input) {
        return await this.setMenuItemRecipeUseCase.execute(input);
    }
};
exports.InventoryResolver = InventoryResolver;
__decorate([
    (0, graphql_1.Query)(() => inventory_model_1.LoadInventoryResponse, { name: 'loadInventory' }),
    __param(0, (0, graphql_1.Args)('input', { nullable: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [inventory_model_1.LoadInventoryDto]),
    __metadata("design:returntype", Promise)
], InventoryResolver.prototype, "loadInventory", null);
__decorate([
    (0, graphql_1.Query)(() => inventory_model_1.LoadLowStockAlertResponse, { name: 'loadLowStockAlert' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], InventoryResolver.prototype, "loadLowStockAlert", null);
__decorate([
    (0, graphql_1.Query)(() => inventory_model_1.LoadRecipeByMenuItemResponse, { name: 'loadRecipeByMenuItem' }),
    __param(0, (0, graphql_1.Args)('menuItemId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], InventoryResolver.prototype, "loadRecipeByMenuItem", null);
__decorate([
    (0, graphql_1.Query)(() => inventory_model_1.LoadStockHistoryResponse, { name: 'loadStockHistory' }),
    __param(0, (0, graphql_1.Args)('input', { nullable: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [inventory_model_1.LoadStockHistoryDto]),
    __metadata("design:returntype", Promise)
], InventoryResolver.prototype, "loadStockHistory", null);
__decorate([
    (0, graphql_1.Mutation)(() => inventory_model_1.CreateInventoryItemResponse, { name: 'createInventoryItem' }),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [inventory_model_1.CreateInventoryItemDto]),
    __metadata("design:returntype", Promise)
], InventoryResolver.prototype, "createInventoryItem", null);
__decorate([
    (0, graphql_1.Mutation)(() => inventory_model_1.UpdateInventoryItemResponse, { name: 'updateInventoryItem' }),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [inventory_model_1.UpdateInventoryItemDto]),
    __metadata("design:returntype", Promise)
], InventoryResolver.prototype, "updateInventoryItem", null);
__decorate([
    (0, graphql_1.Mutation)(() => inventory_model_1.DeleteInventoryItemResponse, { name: 'deleteInventoryItem' }),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [inventory_model_1.DeleteInventoryItemDto]),
    __metadata("design:returntype", Promise)
], InventoryResolver.prototype, "deleteInventoryItem", null);
__decorate([
    (0, graphql_1.Mutation)(() => inventory_model_1.AdjustStockResponse, { name: 'adjustStock' }),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [inventory_model_1.AdjustStockDto]),
    __metadata("design:returntype", Promise)
], InventoryResolver.prototype, "adjustStock", null);
__decorate([
    (0, graphql_1.Mutation)(() => inventory_model_1.SetMenuItemRecipeResponse, { name: 'setMenuItemRecipe' }),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [inventory_model_1.SetMenuItemRecipeDto]),
    __metadata("design:returntype", Promise)
], InventoryResolver.prototype, "setMenuItemRecipe", null);
exports.InventoryResolver = InventoryResolver = __decorate([
    (0, graphql_1.Resolver)(() => inventory_model_1.InventoryItem),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Inject)(inventory_usecases_proxy_module_1.InventoryUsecasesProxyModule.CREATE_INVENTORY_ITEM_PROXY)),
    __param(1, (0, common_1.Inject)(inventory_usecases_proxy_module_1.InventoryUsecasesProxyModule.UPDATE_INVENTORY_ITEM_PROXY)),
    __param(2, (0, common_1.Inject)(inventory_usecases_proxy_module_1.InventoryUsecasesProxyModule.DELETE_INVENTORY_ITEM_PROXY)),
    __param(3, (0, common_1.Inject)(inventory_usecases_proxy_module_1.InventoryUsecasesProxyModule.LOAD_INVENTORY_PROXY)),
    __param(4, (0, common_1.Inject)(inventory_usecases_proxy_module_1.InventoryUsecasesProxyModule.LOAD_LOW_STOCK_ALERT_PROXY)),
    __param(5, (0, common_1.Inject)(inventory_usecases_proxy_module_1.InventoryUsecasesProxyModule.ADJUST_STOCK_PROXY)),
    __param(6, (0, common_1.Inject)(inventory_usecases_proxy_module_1.InventoryUsecasesProxyModule.SET_MENU_ITEM_RECIPE_PROXY)),
    __param(7, (0, common_1.Inject)(inventory_usecases_proxy_module_1.InventoryUsecasesProxyModule.LOAD_RECIPE_BY_MENU_ITEM_PROXY)),
    __param(8, (0, common_1.Inject)(inventory_usecases_proxy_module_1.InventoryUsecasesProxyModule.LOAD_STOCK_HISTORY_PROXY)),
    __metadata("design:paramtypes", [createInventoryItem_usecase_1.CreateInventoryItemUseCase,
        updateInventoryItem_usecase_1.UpdateInventoryItemUseCase,
        deleteInventoryItem_usecase_1.DeleteInventoryItemUseCase,
        loadInventory_usecase_1.LoadInventoryUseCase,
        loadLowStockAlert_usecase_1.LoadLowStockAlertUseCase,
        adjustStock_usecase_1.AdjustStockUseCase,
        setMenuItemRecipe_usecase_1.SetMenuItemRecipeUseCase,
        loadRecipeByMenuItem_usecase_1.LoadRecipeByMenuItemUseCase,
        loadStockHistory_usecase_1.LoadStockHistoryUseCase])
], InventoryResolver);
//# sourceMappingURL=inventory.resolver.js.map