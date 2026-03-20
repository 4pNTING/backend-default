"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var InventoryLevelUsecasesProxyModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventoryLevelUsecasesProxyModule = void 0;
const common_1 = require("@nestjs/common");
const inventory_level_repository_1 = require("../repositories/inventory-level/inventory-level.repository");
const repositories_module_1 = require("../repositories/repositories.module");
const loadInventoryLevel_usecase_1 = require("../../usecases/inventory-level/loadInventoryLevel.usecase");
const loadInventoryLevelById_usecase_1 = require("../../usecases/inventory-level/loadInventoryLevelById.usecase");
const loadInventoryLevelByProductAndZone_usecase_1 = require("../../usecases/inventory-level/loadInventoryLevelByProductAndZone.usecase");
const createInventoryLevel_usecase_1 = require("../../usecases/inventory-level/createInventoryLevel.usecase");
const updateInventoryLevel_usecase_1 = require("../../usecases/inventory-level/updateInventoryLevel.usecase");
let InventoryLevelUsecasesProxyModule = InventoryLevelUsecasesProxyModule_1 = class InventoryLevelUsecasesProxyModule {
    static register() {
        return {
            module: InventoryLevelUsecasesProxyModule_1,
            providers: [
                {
                    inject: [inventory_level_repository_1.DatabaseInventoryLevelRepository],
                    provide: InventoryLevelUsecasesProxyModule_1.LOAD_INVENTORY_LEVEL_PROXY,
                    useFactory: (repo) => new loadInventoryLevel_usecase_1.LoadInventoryLevelUseCase(repo),
                },
                {
                    inject: [inventory_level_repository_1.DatabaseInventoryLevelRepository],
                    provide: InventoryLevelUsecasesProxyModule_1.LOAD_BY_ID_INVENTORY_LEVEL_PROXY,
                    useFactory: (repo) => new loadInventoryLevelById_usecase_1.LoadInventoryLevelByIdUseCase(repo),
                },
                {
                    inject: [inventory_level_repository_1.DatabaseInventoryLevelRepository],
                    provide: InventoryLevelUsecasesProxyModule_1.LOAD_BY_PRODUCT_ZONE_INVENTORY_LEVEL_PROXY,
                    useFactory: (repo) => new loadInventoryLevelByProductAndZone_usecase_1.LoadInventoryLevelByProductAndZoneUseCase(repo),
                },
                {
                    inject: [inventory_level_repository_1.DatabaseInventoryLevelRepository],
                    provide: InventoryLevelUsecasesProxyModule_1.CREATE_INVENTORY_LEVEL_PROXY,
                    useFactory: (repo) => new createInventoryLevel_usecase_1.CreateInventoryLevelUseCase(repo),
                },
                {
                    inject: [inventory_level_repository_1.DatabaseInventoryLevelRepository],
                    provide: InventoryLevelUsecasesProxyModule_1.UPDATE_INVENTORY_LEVEL_PROXY,
                    useFactory: (repo) => new updateInventoryLevel_usecase_1.UpdateInventoryLevelUseCase(repo),
                },
            ],
            exports: [
                InventoryLevelUsecasesProxyModule_1.LOAD_INVENTORY_LEVEL_PROXY,
                InventoryLevelUsecasesProxyModule_1.LOAD_BY_ID_INVENTORY_LEVEL_PROXY,
                InventoryLevelUsecasesProxyModule_1.LOAD_BY_PRODUCT_ZONE_INVENTORY_LEVEL_PROXY,
                InventoryLevelUsecasesProxyModule_1.CREATE_INVENTORY_LEVEL_PROXY,
                InventoryLevelUsecasesProxyModule_1.UPDATE_INVENTORY_LEVEL_PROXY,
            ],
        };
    }
};
exports.InventoryLevelUsecasesProxyModule = InventoryLevelUsecasesProxyModule;
InventoryLevelUsecasesProxyModule.LOAD_INVENTORY_LEVEL_PROXY = 'LoadInventoryLevelProxy';
InventoryLevelUsecasesProxyModule.LOAD_BY_ID_INVENTORY_LEVEL_PROXY = 'LoadByIdInventoryLevelProxy';
InventoryLevelUsecasesProxyModule.LOAD_BY_PRODUCT_ZONE_INVENTORY_LEVEL_PROXY = 'LoadByProductZoneInventoryLevelProxy';
InventoryLevelUsecasesProxyModule.CREATE_INVENTORY_LEVEL_PROXY = 'CreateInventoryLevelProxy';
InventoryLevelUsecasesProxyModule.UPDATE_INVENTORY_LEVEL_PROXY = 'UpdateInventoryLevelProxy';
exports.InventoryLevelUsecasesProxyModule = InventoryLevelUsecasesProxyModule = InventoryLevelUsecasesProxyModule_1 = __decorate([
    (0, common_1.Module)({
        imports: [repositories_module_1.RepositoriesModule],
    })
], InventoryLevelUsecasesProxyModule);
//# sourceMappingURL=inventory-level-usecases-proxy.module.js.map