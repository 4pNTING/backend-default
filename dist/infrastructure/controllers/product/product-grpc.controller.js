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
exports.ProductGrpcController = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const product_model_1 = require("@domain/models/product.model");
const product_usecases_proxy_module_1 = require("../../usecases-proxy/product-usecases-proxy.module");
const createProduct_usecase_1 = require("@usecases/product/createProduct.usecase");
const updateProduct_usecase_1 = require("@usecases/product/updateProduct.usecase");
const deleteProduct_usecase_1 = require("@usecases/product/deleteProduct.usecase");
const loadProduct_usecase_1 = require("@usecases/product/loadProduct.usecase");
const loadProductById_usecase_1 = require("@usecases/product/loadProductById.usecase");
const restoreProduct_usecase_1 = require("@usecases/product/restoreProduct.usecase");
let ProductGrpcController = class ProductGrpcController {
    constructor(createProductUseCase, updateProductUseCase, deleteProductUseCase, loadProductUseCase, loadProductByIdUseCase, restoreProductUseCase) {
        this.createProductUseCase = createProductUseCase;
        this.updateProductUseCase = updateProductUseCase;
        this.deleteProductUseCase = deleteProductUseCase;
        this.loadProductUseCase = loadProductUseCase;
        this.loadProductByIdUseCase = loadProductByIdUseCase;
        this.restoreProductUseCase = restoreProductUseCase;
    }
    async create(data) {
        return await this.createProductUseCase.execute(data);
    }
    async findOne(data) {
        return await this.loadProductByIdUseCase.execute(data);
    }
    async findAll() {
        return await this.loadProductUseCase.execute({});
    }
    async update(data) {
        return await this.updateProductUseCase.execute(data);
    }
    async delete(data) {
        return await this.deleteProductUseCase.execute(data);
    }
    async restore(data) {
        return await this.restoreProductUseCase.execute(data.id);
    }
};
exports.ProductGrpcController = ProductGrpcController;
__decorate([
    (0, microservices_1.GrpcMethod)('ProductService', 'Create'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [product_model_1.CreateProductRequest]),
    __metadata("design:returntype", Promise)
], ProductGrpcController.prototype, "create", null);
__decorate([
    (0, microservices_1.GrpcMethod)('ProductService', 'FindOne'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [product_model_1.LoadProductByIdRequest]),
    __metadata("design:returntype", Promise)
], ProductGrpcController.prototype, "findOne", null);
__decorate([
    (0, microservices_1.GrpcMethod)('ProductService', 'FindAll'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProductGrpcController.prototype, "findAll", null);
__decorate([
    (0, microservices_1.GrpcMethod)('ProductService', 'Update'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [product_model_1.UpdateProductRequest]),
    __metadata("design:returntype", Promise)
], ProductGrpcController.prototype, "update", null);
__decorate([
    (0, microservices_1.GrpcMethod)('ProductService', 'Delete'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProductGrpcController.prototype, "delete", null);
__decorate([
    (0, microservices_1.GrpcMethod)('ProductService', 'Restore'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProductGrpcController.prototype, "restore", null);
exports.ProductGrpcController = ProductGrpcController = __decorate([
    (0, common_1.Controller)(),
    __param(0, (0, common_1.Inject)(product_usecases_proxy_module_1.ProductUsecasesProxyModule.CREATE_PRODUCT_PROXY)),
    __param(1, (0, common_1.Inject)(product_usecases_proxy_module_1.ProductUsecasesProxyModule.UPDATE_PRODUCT_PROXY)),
    __param(2, (0, common_1.Inject)(product_usecases_proxy_module_1.ProductUsecasesProxyModule.DELETE_PRODUCT_PROXY)),
    __param(3, (0, common_1.Inject)(product_usecases_proxy_module_1.ProductUsecasesProxyModule.LOAD_PRODUCT_PROXY)),
    __param(4, (0, common_1.Inject)(product_usecases_proxy_module_1.ProductUsecasesProxyModule.LOAD_BY_ID_PRODUCT_PROXY)),
    __param(5, (0, common_1.Inject)(product_usecases_proxy_module_1.ProductUsecasesProxyModule.RESTORE_PRODUCT_PROXY)),
    __metadata("design:paramtypes", [createProduct_usecase_1.CreateProductUseCase,
        updateProduct_usecase_1.UpdateProductUseCase,
        deleteProduct_usecase_1.DeleteProductUseCase,
        loadProduct_usecase_1.LoadProductUseCase,
        loadProductById_usecase_1.LoadProductByIdUseCase,
        restoreProduct_usecase_1.RestoreProductUseCase])
], ProductGrpcController);
//# sourceMappingURL=product-grpc.controller.js.map