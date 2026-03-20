"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ProductUsecasesProxyModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductUsecasesProxyModule = void 0;
const common_1 = require("@nestjs/common");
const product_repository_1 = require("../repositories/product/product.repository");
const repositories_module_1 = require("../repositories/repositories.module");
const createProduct_usecase_1 = require("../../usecases/product/createProduct.usecase");
const updateProduct_usecase_1 = require("../../usecases/product/updateProduct.usecase");
const deleteProduct_usecase_1 = require("../../usecases/product/deleteProduct.usecase");
const loadProduct_usecase_1 = require("../../usecases/product/loadProduct.usecase");
const loadProductById_usecase_1 = require("../../usecases/product/loadProductById.usecase");
const restoreProduct_usecase_1 = require("../../usecases/product/restoreProduct.usecase");
let ProductUsecasesProxyModule = ProductUsecasesProxyModule_1 = class ProductUsecasesProxyModule {
    static register() {
        return {
            module: ProductUsecasesProxyModule_1,
            providers: [
                {
                    inject: [product_repository_1.DatabaseProductRepository],
                    provide: ProductUsecasesProxyModule_1.CREATE_PRODUCT_PROXY,
                    useFactory: (repo) => new createProduct_usecase_1.CreateProductUseCase(repo),
                },
                {
                    inject: [product_repository_1.DatabaseProductRepository],
                    provide: ProductUsecasesProxyModule_1.UPDATE_PRODUCT_PROXY,
                    useFactory: (repo) => new updateProduct_usecase_1.UpdateProductUseCase(repo),
                },
                {
                    inject: [product_repository_1.DatabaseProductRepository],
                    provide: ProductUsecasesProxyModule_1.DELETE_PRODUCT_PROXY,
                    useFactory: (repo) => new deleteProduct_usecase_1.DeleteProductUseCase(repo),
                },
                {
                    inject: [product_repository_1.DatabaseProductRepository],
                    provide: ProductUsecasesProxyModule_1.LOAD_PRODUCT_PROXY,
                    useFactory: (repo) => new loadProduct_usecase_1.LoadProductUseCase(repo),
                },
                {
                    inject: [product_repository_1.DatabaseProductRepository],
                    provide: ProductUsecasesProxyModule_1.LOAD_BY_ID_PRODUCT_PROXY,
                    useFactory: (repo) => new loadProductById_usecase_1.LoadProductByIdUseCase(repo),
                },
                {
                    inject: [product_repository_1.DatabaseProductRepository],
                    provide: ProductUsecasesProxyModule_1.RESTORE_PRODUCT_PROXY,
                    useFactory: (repo) => new restoreProduct_usecase_1.RestoreProductUseCase(repo),
                },
            ],
            exports: [
                ProductUsecasesProxyModule_1.CREATE_PRODUCT_PROXY,
                ProductUsecasesProxyModule_1.UPDATE_PRODUCT_PROXY,
                ProductUsecasesProxyModule_1.DELETE_PRODUCT_PROXY,
                ProductUsecasesProxyModule_1.LOAD_PRODUCT_PROXY,
                ProductUsecasesProxyModule_1.LOAD_BY_ID_PRODUCT_PROXY,
                ProductUsecasesProxyModule_1.RESTORE_PRODUCT_PROXY,
            ],
        };
    }
};
exports.ProductUsecasesProxyModule = ProductUsecasesProxyModule;
ProductUsecasesProxyModule.CREATE_PRODUCT_PROXY = 'CreateProductProxy';
ProductUsecasesProxyModule.UPDATE_PRODUCT_PROXY = 'UpdateProductProxy';
ProductUsecasesProxyModule.DELETE_PRODUCT_PROXY = 'DeleteProductProxy';
ProductUsecasesProxyModule.LOAD_PRODUCT_PROXY = 'LoadProductProxy';
ProductUsecasesProxyModule.LOAD_BY_ID_PRODUCT_PROXY = 'LoadByIdProductProxy';
ProductUsecasesProxyModule.RESTORE_PRODUCT_PROXY = 'RestoreProductProxy';
exports.ProductUsecasesProxyModule = ProductUsecasesProxyModule = ProductUsecasesProxyModule_1 = __decorate([
    (0, common_1.Module)({
        imports: [repositories_module_1.RepositoriesModule],
    })
], ProductUsecasesProxyModule);
//# sourceMappingURL=product-usecases-proxy.module.js.map