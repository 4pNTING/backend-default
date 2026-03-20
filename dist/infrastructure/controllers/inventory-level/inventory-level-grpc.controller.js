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
exports.InventoryLevelGrpcController = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const inventory_level_usecases_proxy_module_1 = require("../../usecases-proxy/inventory-level-usecases-proxy.module");
const loadInventoryLevel_usecase_1 = require("../../../usecases/inventory-level/loadInventoryLevel.usecase");
const loadInventoryLevelById_usecase_1 = require("../../../usecases/inventory-level/loadInventoryLevelById.usecase");
const loadInventoryLevelByProductAndZone_usecase_1 = require("../../../usecases/inventory-level/loadInventoryLevelByProductAndZone.usecase");
const createInventoryLevel_usecase_1 = require("../../../usecases/inventory-level/createInventoryLevel.usecase");
const updateInventoryLevel_usecase_1 = require("../../../usecases/inventory-level/updateInventoryLevel.usecase");
const inventory_level_model_1 = require("../../../domain/models/inventory-level.model");
let InventoryLevelGrpcController = class InventoryLevelGrpcController {
    constructor(createUseCase, loadAllUseCase, loadByIdUseCase, loadByProductZoneUseCase, updateUseCase) {
        this.createUseCase = createUseCase;
        this.loadAllUseCase = loadAllUseCase;
        this.loadByIdUseCase = loadByIdUseCase;
        this.loadByProductZoneUseCase = loadByProductZoneUseCase;
        this.updateUseCase = updateUseCase;
    }
    async create(data) {
        return this.createUseCase.execute(data);
    }
    async findAll(data) {
        return this.loadAllUseCase.execute(data);
    }
    async findOne(data) {
        return this.loadByIdUseCase.execute(data);
    }
    async findByProductAndZone(data) {
        return this.loadByProductZoneUseCase.execute(data);
    }
    async update(data) {
        return this.updateUseCase.execute(data);
    }
};
exports.InventoryLevelGrpcController = InventoryLevelGrpcController;
__decorate([
    (0, microservices_1.GrpcMethod)('InventoryLevelService', 'Create'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [inventory_level_model_1.CreateInventoryLevelRequest]),
    __metadata("design:returntype", Promise)
], InventoryLevelGrpcController.prototype, "create", null);
__decorate([
    (0, microservices_1.GrpcMethod)('InventoryLevelService', 'FindAll'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [inventory_level_model_1.LoadAllInventoryLevelRequest]),
    __metadata("design:returntype", Promise)
], InventoryLevelGrpcController.prototype, "findAll", null);
__decorate([
    (0, microservices_1.GrpcMethod)('InventoryLevelService', 'FindOne'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [inventory_level_model_1.LoadInventoryLevelByIdRequest]),
    __metadata("design:returntype", Promise)
], InventoryLevelGrpcController.prototype, "findOne", null);
__decorate([
    (0, microservices_1.GrpcMethod)('InventoryLevelService', 'FindByProductAndZone'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [inventory_level_model_1.LoadInventoryLevelByProductAndZoneRequest]),
    __metadata("design:returntype", Promise)
], InventoryLevelGrpcController.prototype, "findByProductAndZone", null);
__decorate([
    (0, microservices_1.GrpcMethod)('InventoryLevelService', 'Update'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [inventory_level_model_1.UpdateInventoryLevelRequest]),
    __metadata("design:returntype", Promise)
], InventoryLevelGrpcController.prototype, "update", null);
exports.InventoryLevelGrpcController = InventoryLevelGrpcController = __decorate([
    (0, common_1.Controller)(),
    __param(0, (0, common_1.Inject)(inventory_level_usecases_proxy_module_1.InventoryLevelUsecasesProxyModule.CREATE_INVENTORY_LEVEL_PROXY)),
    __param(1, (0, common_1.Inject)(inventory_level_usecases_proxy_module_1.InventoryLevelUsecasesProxyModule.LOAD_INVENTORY_LEVEL_PROXY)),
    __param(2, (0, common_1.Inject)(inventory_level_usecases_proxy_module_1.InventoryLevelUsecasesProxyModule.LOAD_BY_ID_INVENTORY_LEVEL_PROXY)),
    __param(3, (0, common_1.Inject)(inventory_level_usecases_proxy_module_1.InventoryLevelUsecasesProxyModule.LOAD_BY_PRODUCT_ZONE_INVENTORY_LEVEL_PROXY)),
    __param(4, (0, common_1.Inject)(inventory_level_usecases_proxy_module_1.InventoryLevelUsecasesProxyModule.UPDATE_INVENTORY_LEVEL_PROXY)),
    __metadata("design:paramtypes", [createInventoryLevel_usecase_1.CreateInventoryLevelUseCase,
        loadInventoryLevel_usecase_1.LoadInventoryLevelUseCase,
        loadInventoryLevelById_usecase_1.LoadInventoryLevelByIdUseCase,
        loadInventoryLevelByProductAndZone_usecase_1.LoadInventoryLevelByProductAndZoneUseCase,
        updateInventoryLevel_usecase_1.UpdateInventoryLevelUseCase])
], InventoryLevelGrpcController);
//# sourceMappingURL=inventory-level-grpc.controller.js.map