"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var InventoryMovementUsecasesProxyModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventoryMovementUsecasesProxyModule = void 0;
const common_1 = require("@nestjs/common");
const inventory_movement_repository_1 = require("../repositories/inventory-movement/inventory-movement.repository");
const inventory_level_repository_1 = require("../repositories/inventory-level/inventory-level.repository");
const repositories_module_1 = require("../repositories/repositories.module");
const createInventoryMovement_usecase_1 = require("../../usecases/inventory-movement/createInventoryMovement.usecase");
const loadInventoryMovement_usecase_1 = require("../../usecases/inventory-movement/loadInventoryMovement.usecase");
const loadInventoryMovementById_usecase_1 = require("../../usecases/inventory-movement/loadInventoryMovementById.usecase");
let InventoryMovementUsecasesProxyModule = InventoryMovementUsecasesProxyModule_1 = class InventoryMovementUsecasesProxyModule {
    static register() {
        return {
            module: InventoryMovementUsecasesProxyModule_1,
            providers: [
                {
                    inject: [inventory_movement_repository_1.DatabaseInventoryMovementRepository, inventory_level_repository_1.DatabaseInventoryLevelRepository],
                    provide: InventoryMovementUsecasesProxyModule_1.CREATE_INVENTORY_MOVEMENT_PROXY,
                    useFactory: (movementRepo, levelRepo) => new createInventoryMovement_usecase_1.CreateInventoryMovementUseCase(movementRepo, levelRepo),
                },
                {
                    inject: [inventory_movement_repository_1.DatabaseInventoryMovementRepository],
                    provide: InventoryMovementUsecasesProxyModule_1.LOAD_INVENTORY_MOVEMENT_PROXY,
                    useFactory: (repo) => new loadInventoryMovement_usecase_1.LoadInventoryMovementUseCase(repo),
                },
                {
                    inject: [inventory_movement_repository_1.DatabaseInventoryMovementRepository],
                    provide: InventoryMovementUsecasesProxyModule_1.LOAD_BY_ID_INVENTORY_MOVEMENT_PROXY,
                    useFactory: (repo) => new loadInventoryMovementById_usecase_1.LoadInventoryMovementByIdUseCase(repo),
                },
            ],
            exports: [
                InventoryMovementUsecasesProxyModule_1.CREATE_INVENTORY_MOVEMENT_PROXY,
                InventoryMovementUsecasesProxyModule_1.LOAD_INVENTORY_MOVEMENT_PROXY,
                InventoryMovementUsecasesProxyModule_1.LOAD_BY_ID_INVENTORY_MOVEMENT_PROXY,
            ],
        };
    }
};
exports.InventoryMovementUsecasesProxyModule = InventoryMovementUsecasesProxyModule;
InventoryMovementUsecasesProxyModule.CREATE_INVENTORY_MOVEMENT_PROXY = 'CreateInventoryMovementProxy';
InventoryMovementUsecasesProxyModule.LOAD_INVENTORY_MOVEMENT_PROXY = 'LoadInventoryMovementProxy';
InventoryMovementUsecasesProxyModule.LOAD_BY_ID_INVENTORY_MOVEMENT_PROXY = 'LoadByIdInventoryMovementProxy';
exports.InventoryMovementUsecasesProxyModule = InventoryMovementUsecasesProxyModule = InventoryMovementUsecasesProxyModule_1 = __decorate([
    (0, common_1.Module)({
        imports: [repositories_module_1.RepositoriesModule],
    })
], InventoryMovementUsecasesProxyModule);
//# sourceMappingURL=inventory-movement-usecases-proxy.module.js.map