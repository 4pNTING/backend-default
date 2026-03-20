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
exports.InventoryMovementGrpcController = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const inventory_movement_usecases_proxy_module_1 = require("../../usecases-proxy/inventory-movement-usecases-proxy.module");
const createInventoryMovement_usecase_1 = require("../../../usecases/inventory-movement/createInventoryMovement.usecase");
const loadInventoryMovement_usecase_1 = require("../../../usecases/inventory-movement/loadInventoryMovement.usecase");
const loadInventoryMovementById_usecase_1 = require("../../../usecases/inventory-movement/loadInventoryMovementById.usecase");
const inventory_movement_model_1 = require("../../../domain/models/inventory-movement.model");
let InventoryMovementGrpcController = class InventoryMovementGrpcController {
    constructor(createUseCase, loadAllUseCase, loadByIdUseCase) {
        this.createUseCase = createUseCase;
        this.loadAllUseCase = loadAllUseCase;
        this.loadByIdUseCase = loadByIdUseCase;
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
};
exports.InventoryMovementGrpcController = InventoryMovementGrpcController;
__decorate([
    (0, microservices_1.GrpcMethod)('InventoryMovementService', 'Create'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [inventory_movement_model_1.CreateInventoryMovementRequest]),
    __metadata("design:returntype", Promise)
], InventoryMovementGrpcController.prototype, "create", null);
__decorate([
    (0, microservices_1.GrpcMethod)('InventoryMovementService', 'FindAll'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [inventory_movement_model_1.LoadAllInventoryMovementRequest]),
    __metadata("design:returntype", Promise)
], InventoryMovementGrpcController.prototype, "findAll", null);
__decorate([
    (0, microservices_1.GrpcMethod)('InventoryMovementService', 'FindOne'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [inventory_movement_model_1.LoadInventoryMovementByIdRequest]),
    __metadata("design:returntype", Promise)
], InventoryMovementGrpcController.prototype, "findOne", null);
exports.InventoryMovementGrpcController = InventoryMovementGrpcController = __decorate([
    (0, common_1.Controller)(),
    __param(0, (0, common_1.Inject)(inventory_movement_usecases_proxy_module_1.InventoryMovementUsecasesProxyModule.CREATE_INVENTORY_MOVEMENT_PROXY)),
    __param(1, (0, common_1.Inject)(inventory_movement_usecases_proxy_module_1.InventoryMovementUsecasesProxyModule.LOAD_INVENTORY_MOVEMENT_PROXY)),
    __param(2, (0, common_1.Inject)(inventory_movement_usecases_proxy_module_1.InventoryMovementUsecasesProxyModule.LOAD_BY_ID_INVENTORY_MOVEMENT_PROXY)),
    __metadata("design:paramtypes", [createInventoryMovement_usecase_1.CreateInventoryMovementUseCase,
        loadInventoryMovement_usecase_1.LoadInventoryMovementUseCase,
        loadInventoryMovementById_usecase_1.LoadInventoryMovementByIdUseCase])
], InventoryMovementGrpcController);
//# sourceMappingURL=inventory-movement-grpc.controller.js.map