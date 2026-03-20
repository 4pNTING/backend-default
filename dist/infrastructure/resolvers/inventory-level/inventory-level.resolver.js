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
exports.InventoryLevelResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const common_1 = require("@nestjs/common");
const jwt_auth_guard_1 = require("../../common/jwt-auth.guard");
const inventory_level_model_1 = require("./inventory-level.model");
const inventory_level_usecases_proxy_module_1 = require("../../usecases-proxy/inventory-level-usecases-proxy.module");
const loadInventoryLevel_usecase_1 = require("../../../usecases/inventory-level/loadInventoryLevel.usecase");
const loadInventoryLevelById_usecase_1 = require("../../../usecases/inventory-level/loadInventoryLevelById.usecase");
const loadInventoryLevelByProductAndZone_usecase_1 = require("../../../usecases/inventory-level/loadInventoryLevelByProductAndZone.usecase");
const createInventoryLevel_usecase_1 = require("../../../usecases/inventory-level/createInventoryLevel.usecase");
const updateInventoryLevel_usecase_1 = require("../../../usecases/inventory-level/updateInventoryLevel.usecase");
let InventoryLevelResolver = class InventoryLevelResolver {
    constructor(loadInventoryLevelUseCase, loadInventoryLevelByIdUseCase, loadInventoryLevelByProductAndZoneUseCase, createInventoryLevelUseCase, updateInventoryLevelUseCase) {
        this.loadInventoryLevelUseCase = loadInventoryLevelUseCase;
        this.loadInventoryLevelByIdUseCase = loadInventoryLevelByIdUseCase;
        this.loadInventoryLevelByProductAndZoneUseCase = loadInventoryLevelByProductAndZoneUseCase;
        this.createInventoryLevelUseCase = createInventoryLevelUseCase;
        this.updateInventoryLevelUseCase = updateInventoryLevelUseCase;
    }
    async loadInventoryLevel(input) {
        const query = {};
        if (input) {
            if (input.page || input.limit) {
                query.paginate = {
                    page: input.page || 1,
                    limit: input.limit || 10
                };
            }
            if (input.productId !== undefined) {
                query.productId = input.productId;
            }
            if (input.zoneId !== undefined) {
                query.zoneId = input.zoneId;
            }
        }
        const result = await this.loadInventoryLevelUseCase.execute(query);
        const items = result.items.map(item => ({ ...item, _id: item.id }));
        return {
            count: result.total,
            inventoryLevel: items,
        };
    }
    async loadInventoryLevelById(input) {
        const result = await this.loadInventoryLevelByIdUseCase.execute({ id: input._id });
        if (!result)
            return { inventoryLevel: null };
        return { inventoryLevel: { ...result, _id: result.id } };
    }
    async loadInventoryLevelByProductAndZone(input) {
        const result = await this.loadInventoryLevelByProductAndZoneUseCase.execute({
            productId: input.productId,
            zoneId: input.zoneId,
        });
        if (!result)
            return { inventoryLevel: null };
        return { inventoryLevel: { ...result, _id: result.id } };
    }
    async createInventoryLevel(input) {
        const result = await this.createInventoryLevelUseCase.execute(input);
        return { inventoryLevel: { ...result, _id: result.id } };
    }
    async updateInventoryLevel(input) {
        const { _id, ...data } = input;
        await this.updateInventoryLevelUseCase.execute({ id: _id, ...data });
        const updated = await this.loadInventoryLevelByIdUseCase.execute({ id: _id });
        return {
            inventoryLevel: updated ? { ...updated, _id: updated.id } : null
        };
    }
};
exports.InventoryLevelResolver = InventoryLevelResolver;
__decorate([
    (0, graphql_1.Query)(() => inventory_level_model_1.LoadInventoryLevelResponse, { name: 'loadInventoryLevel' }),
    __param(0, (0, graphql_1.Args)('input', { nullable: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [inventory_level_model_1.LoadInventoryLevelDto]),
    __metadata("design:returntype", Promise)
], InventoryLevelResolver.prototype, "loadInventoryLevel", null);
__decorate([
    (0, graphql_1.Query)(() => inventory_level_model_1.LoadInventoryLevelByIdResponse, { name: 'loadInventoryLevelById', nullable: true }),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [inventory_level_model_1.LoadInventoryLevelByIdDto]),
    __metadata("design:returntype", Promise)
], InventoryLevelResolver.prototype, "loadInventoryLevelById", null);
__decorate([
    (0, graphql_1.Query)(() => inventory_level_model_1.LoadInventoryLevelByIdResponse, { name: 'loadInventoryLevelByProductAndZone', nullable: true }),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [inventory_level_model_1.LoadInventoryLevelByProductAndZoneDto]),
    __metadata("design:returntype", Promise)
], InventoryLevelResolver.prototype, "loadInventoryLevelByProductAndZone", null);
__decorate([
    (0, graphql_1.Mutation)(() => inventory_level_model_1.CreateInventoryLevelResponse),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [inventory_level_model_1.CreateInventoryLevelDto]),
    __metadata("design:returntype", Promise)
], InventoryLevelResolver.prototype, "createInventoryLevel", null);
__decorate([
    (0, graphql_1.Mutation)(() => inventory_level_model_1.UpdateInventoryLevelResponse),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [inventory_level_model_1.UpdateInventoryLevelDto]),
    __metadata("design:returntype", Promise)
], InventoryLevelResolver.prototype, "updateInventoryLevel", null);
exports.InventoryLevelResolver = InventoryLevelResolver = __decorate([
    (0, graphql_1.Resolver)(() => inventory_level_model_1.InventoryLevel),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Inject)(inventory_level_usecases_proxy_module_1.InventoryLevelUsecasesProxyModule.LOAD_INVENTORY_LEVEL_PROXY)),
    __param(1, (0, common_1.Inject)(inventory_level_usecases_proxy_module_1.InventoryLevelUsecasesProxyModule.LOAD_BY_ID_INVENTORY_LEVEL_PROXY)),
    __param(2, (0, common_1.Inject)(inventory_level_usecases_proxy_module_1.InventoryLevelUsecasesProxyModule.LOAD_BY_PRODUCT_ZONE_INVENTORY_LEVEL_PROXY)),
    __param(3, (0, common_1.Inject)(inventory_level_usecases_proxy_module_1.InventoryLevelUsecasesProxyModule.CREATE_INVENTORY_LEVEL_PROXY)),
    __param(4, (0, common_1.Inject)(inventory_level_usecases_proxy_module_1.InventoryLevelUsecasesProxyModule.UPDATE_INVENTORY_LEVEL_PROXY)),
    __metadata("design:paramtypes", [loadInventoryLevel_usecase_1.LoadInventoryLevelUseCase,
        loadInventoryLevelById_usecase_1.LoadInventoryLevelByIdUseCase,
        loadInventoryLevelByProductAndZone_usecase_1.LoadInventoryLevelByProductAndZoneUseCase,
        createInventoryLevel_usecase_1.CreateInventoryLevelUseCase,
        updateInventoryLevel_usecase_1.UpdateInventoryLevelUseCase])
], InventoryLevelResolver);
//# sourceMappingURL=inventory-level.resolver.js.map