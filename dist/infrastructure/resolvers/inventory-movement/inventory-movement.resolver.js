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
exports.InventoryMovementResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const common_1 = require("@nestjs/common");
const jwt_auth_guard_1 = require("../../common/jwt-auth.guard");
const inventory_movement_model_1 = require("./inventory-movement.model");
const inventory_movement_usecases_proxy_module_1 = require("../../usecases-proxy/inventory-movement-usecases-proxy.module");
const createInventoryMovement_usecase_1 = require("../../../usecases/inventory-movement/createInventoryMovement.usecase");
const loadInventoryMovement_usecase_1 = require("../../../usecases/inventory-movement/loadInventoryMovement.usecase");
const loadInventoryMovementById_usecase_1 = require("../../../usecases/inventory-movement/loadInventoryMovementById.usecase");
let InventoryMovementResolver = class InventoryMovementResolver {
    constructor(createInventoryMovementUseCase, loadInventoryMovementUseCase, loadInventoryMovementByIdUseCase) {
        this.createInventoryMovementUseCase = createInventoryMovementUseCase;
        this.loadInventoryMovementUseCase = loadInventoryMovementUseCase;
        this.loadInventoryMovementByIdUseCase = loadInventoryMovementByIdUseCase;
    }
    async loadInventoryMovement(input) {
        const query = {};
        if (input) {
            if (input.page || input.limit) {
                query.paginate = {
                    page: input.page || 1,
                    limit: input.limit || 10
                };
            }
        }
        const result = await this.loadInventoryMovementUseCase.execute(query);
        const items = result.items.map(item => ({ ...item, _id: item.id }));
        return {
            count: result.total,
            inventoryMovement: items,
        };
    }
    async loadInventoryMovementById(input) {
        const result = await this.loadInventoryMovementByIdUseCase.execute({ id: input._id });
        if (!result)
            return { inventoryMovement: null };
        return { inventoryMovement: { ...result, _id: result.id } };
    }
    async createInventoryMovement(input) {
        const result = await this.createInventoryMovementUseCase.execute(input);
        return { inventoryMovement: { ...result, _id: result.id } };
    }
};
exports.InventoryMovementResolver = InventoryMovementResolver;
__decorate([
    (0, graphql_1.Query)(() => inventory_movement_model_1.LoadInventoryMovementResponse, { name: 'loadInventoryMovement' }),
    __param(0, (0, graphql_1.Args)('input', { nullable: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [inventory_movement_model_1.LoadInventoryMovementDto]),
    __metadata("design:returntype", Promise)
], InventoryMovementResolver.prototype, "loadInventoryMovement", null);
__decorate([
    (0, graphql_1.Query)(() => inventory_movement_model_1.LoadInventoryMovementByIdResponse, { name: 'loadInventoryMovementById', nullable: true }),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [inventory_movement_model_1.LoadInventoryMovementByIdDto]),
    __metadata("design:returntype", Promise)
], InventoryMovementResolver.prototype, "loadInventoryMovementById", null);
__decorate([
    (0, graphql_1.Mutation)(() => inventory_movement_model_1.CreateInventoryMovementResponse),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [inventory_movement_model_1.CreateInventoryMovementDto]),
    __metadata("design:returntype", Promise)
], InventoryMovementResolver.prototype, "createInventoryMovement", null);
exports.InventoryMovementResolver = InventoryMovementResolver = __decorate([
    (0, graphql_1.Resolver)(() => inventory_movement_model_1.InventoryMovement),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Inject)(inventory_movement_usecases_proxy_module_1.InventoryMovementUsecasesProxyModule.CREATE_INVENTORY_MOVEMENT_PROXY)),
    __param(1, (0, common_1.Inject)(inventory_movement_usecases_proxy_module_1.InventoryMovementUsecasesProxyModule.LOAD_INVENTORY_MOVEMENT_PROXY)),
    __param(2, (0, common_1.Inject)(inventory_movement_usecases_proxy_module_1.InventoryMovementUsecasesProxyModule.LOAD_BY_ID_INVENTORY_MOVEMENT_PROXY)),
    __metadata("design:paramtypes", [createInventoryMovement_usecase_1.CreateInventoryMovementUseCase,
        loadInventoryMovement_usecase_1.LoadInventoryMovementUseCase,
        loadInventoryMovementById_usecase_1.LoadInventoryMovementByIdUseCase])
], InventoryMovementResolver);
//# sourceMappingURL=inventory-movement.resolver.js.map