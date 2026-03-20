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
exports.ProductResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const common_1 = require("@nestjs/common");
const jwt_auth_guard_1 = require("../../common/jwt-auth.guard");
const product_model_1 = require("./product.model");
const enum_1 = require("@domain/enums/enum");
const product_usecases_proxy_module_1 = require("@infrastructure/usecases-proxy/product-usecases-proxy.module");
const createProduct_usecase_1 = require("@usecases/product/createProduct.usecase");
const updateProduct_usecase_1 = require("@usecases/product/updateProduct.usecase");
const deleteProduct_usecase_1 = require("@usecases/product/deleteProduct.usecase");
const loadProduct_usecase_1 = require("@usecases/product/loadProduct.usecase");
const loadProductById_usecase_1 = require("@usecases/product/loadProductById.usecase");
const restoreProduct_usecase_1 = require("@usecases/product/restoreProduct.usecase");
let ProductResolver = class ProductResolver {
    constructor(createProductUseCase, updateProductUseCase, deleteProductUseCase, loadProductUseCase, loadProductByIdUseCase, restoreProductUseCase) {
        this.createProductUseCase = createProductUseCase;
        this.updateProductUseCase = updateProductUseCase;
        this.deleteProductUseCase = deleteProductUseCase;
        this.loadProductUseCase = loadProductUseCase;
        this.loadProductByIdUseCase = loadProductByIdUseCase;
        this.restoreProductUseCase = restoreProductUseCase;
    }
    async loadProduct(input) {
        const query = {};
        if (input) {
            if (input.page || input.limit) {
                query.paginate = {
                    page: input.page || 1,
                    limit: input.limit || 10
                };
            }
            if (input.keyword) {
                query.search = {
                    q: input.keyword
                };
            }
            if (input.isActive) {
                if (input.isActive === enum_1.ActiveStatus.active)
                    query.isActive = 'active';
                if (input.isActive === enum_1.ActiveStatus.inactive)
                    query.isActive = 'inactive';
            }
        }
        const result = await this.loadProductUseCase.execute(query);
        const items = result.items.map(item => ({
            ...item,
            _id: item.id
        }));
        return {
            count: result.total,
            product: items,
        };
    }
    async loadProductById(input) {
        const result = await this.loadProductByIdUseCase.execute({ id: input._id });
        if (!result)
            return { product: null };
        return {
            product: { ...result, _id: result.id }
        };
    }
    async createProduct(input) {
        const result = await this.createProductUseCase.execute(input);
        return {
            product: { ...result, _id: result.id }
        };
    }
    async updateProduct(input) {
        const { _id, ...data } = input;
        await this.updateProductUseCase.execute({ id: _id, ...data });
        const updatedProduct = await this.loadProductByIdUseCase.execute({ id: _id });
        return {
            product: updatedProduct ? { ...updatedProduct, _id: updatedProduct.id } : null
        };
    }
    async deleteProduct(input) {
        const productData = await this.loadProductByIdUseCase.execute({ id: input._id });
        await this.deleteProductUseCase.execute({ id: input._id });
        return {
            product: productData ? { ...productData, _id: productData.id } : null
        };
    }
    async restoreProduct(input) {
        await this.restoreProductUseCase.execute(input._id);
        const result = await this.loadProductByIdUseCase.execute({ id: input._id });
        return {
            product: result ? { ...result, _id: result.id } : null
        };
    }
};
exports.ProductResolver = ProductResolver;
__decorate([
    (0, graphql_1.Query)(() => product_model_1.LoadProductResponse, { name: 'loadProduct' }),
    __param(0, (0, graphql_1.Args)('input', { nullable: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [product_model_1.LoadProductDto]),
    __metadata("design:returntype", Promise)
], ProductResolver.prototype, "loadProduct", null);
__decorate([
    (0, graphql_1.Query)(() => product_model_1.LoadProductByIdResponse, { name: 'loadProductById', nullable: true }),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [product_model_1.LoadProductByIdDto]),
    __metadata("design:returntype", Promise)
], ProductResolver.prototype, "loadProductById", null);
__decorate([
    (0, graphql_1.Mutation)(() => product_model_1.CreateProductResponse),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [product_model_1.CreateProductDto]),
    __metadata("design:returntype", Promise)
], ProductResolver.prototype, "createProduct", null);
__decorate([
    (0, graphql_1.Mutation)(() => product_model_1.UpdateProductResponse),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [product_model_1.UpdateProductDto]),
    __metadata("design:returntype", Promise)
], ProductResolver.prototype, "updateProduct", null);
__decorate([
    (0, graphql_1.Mutation)(() => product_model_1.DeleteProductResponse),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [product_model_1.DeleteProductDto]),
    __metadata("design:returntype", Promise)
], ProductResolver.prototype, "deleteProduct", null);
__decorate([
    (0, graphql_1.Mutation)(() => product_model_1.RestoreProductResponse),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [product_model_1.RestoreProductDto]),
    __metadata("design:returntype", Promise)
], ProductResolver.prototype, "restoreProduct", null);
exports.ProductResolver = ProductResolver = __decorate([
    (0, graphql_1.Resolver)(() => product_model_1.Product),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
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
], ProductResolver);
//# sourceMappingURL=product.resolver.js.map