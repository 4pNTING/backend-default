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
exports.CategoryResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const common_1 = require("@nestjs/common");
const jwt_auth_guard_1 = require("../../common/jwt-auth.guard");
const category_model_1 = require("./category.model");
const category_usecases_proxy_module_1 = require("../../usecases-proxy/category-usecases-proxy.module");
const createCategory_usecase_1 = require("../../../usecases/category/createCategory.usecase");
const updateCategory_usecase_1 = require("../../../usecases/category/updateCategory.usecase");
const deleteCategory_usecase_1 = require("../../../usecases/category/deleteCategory.usecase");
const loadCategory_usecase_1 = require("../../../usecases/category/loadCategory.usecase");
const loadByIDCategory_usecase_1 = require("../../../usecases/category/loadByIDCategory.usecase");
const restoreCategory_usecase_1 = require("../../../usecases/category/restoreCategory.usecase");
let CategoryResolver = class CategoryResolver {
    constructor(createCategoryUseCase, updateCategoryUseCase, deleteCategoryUseCase, loadCategoryUseCase, loadCategoryByIdUseCase, restoreCategoryUseCase) {
        this.createCategoryUseCase = createCategoryUseCase;
        this.updateCategoryUseCase = updateCategoryUseCase;
        this.deleteCategoryUseCase = deleteCategoryUseCase;
        this.loadCategoryUseCase = loadCategoryUseCase;
        this.loadCategoryByIdUseCase = loadCategoryByIdUseCase;
        this.restoreCategoryUseCase = restoreCategoryUseCase;
    }
    async loadCategory(input) {
        const query = {};
        if (input) {
            if (input.page || input.limit) {
                query.paginate = {
                    page: input.page,
                    limit: input.limit
                };
            }
            if (input.keyword) {
                query.search = {
                    q: input.keyword
                };
            }
            if (input.isActive) {
                query.isActive = input.isActive;
            }
        }
        const result = await this.loadCategoryUseCase.execute(query);
        const items = result.items.map(item => ({
            ...item,
            _id: item.id
        }));
        return {
            count: result.total,
            category: items,
        };
    }
    async loadCategoryById(input) {
        const result = await this.loadCategoryByIdUseCase.execute({ id: input._id });
        if (!result)
            return { category: null };
        return {
            category: { ...result, _id: result.id }
        };
    }
    async createCategory(input) {
        const result = await this.createCategoryUseCase.execute(input);
        return {
            category: { ...result, _id: result.id }
        };
    }
    async updateCategory(input) {
        const { _id, ...data } = input;
        await this.updateCategoryUseCase.execute({ id: _id, ...data });
        const updatedCategory = await this.loadCategoryByIdUseCase.execute({ id: _id });
        return {
            category: updatedCategory ? { ...updatedCategory, _id: updatedCategory.id } : null
        };
    }
    async deleteCategory(input) {
        await this.deleteCategoryUseCase.execute({ id: input._id });
        return {
            category: { _id: input._id }
        };
    }
    async restoreCategory(input) {
        const result = await this.restoreCategoryUseCase.execute(input._id);
        return {
            category: result ? { ...result, _id: result.id } : null
        };
    }
};
exports.CategoryResolver = CategoryResolver;
__decorate([
    (0, graphql_1.Query)(() => category_model_1.LoadCategoryResponse, { name: 'loadCategory' }),
    __param(0, (0, graphql_1.Args)('input', { nullable: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [category_model_1.LoadCategoryDto]),
    __metadata("design:returntype", Promise)
], CategoryResolver.prototype, "loadCategory", null);
__decorate([
    (0, graphql_1.Query)(() => category_model_1.LoadCategoryByIdResponse, { name: 'loadCategoryById', nullable: true }),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [category_model_1.LoadCategoryByIdDto]),
    __metadata("design:returntype", Promise)
], CategoryResolver.prototype, "loadCategoryById", null);
__decorate([
    (0, graphql_1.Mutation)(() => category_model_1.CreateCategoryResponse),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [category_model_1.CreateCategoryDto]),
    __metadata("design:returntype", Promise)
], CategoryResolver.prototype, "createCategory", null);
__decorate([
    (0, graphql_1.Mutation)(() => category_model_1.UpdateCategoryResponse),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [category_model_1.UpdateCategoryDto]),
    __metadata("design:returntype", Promise)
], CategoryResolver.prototype, "updateCategory", null);
__decorate([
    (0, graphql_1.Mutation)(() => category_model_1.DeleteCategoryResponse),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [category_model_1.DeleteCategoryDto]),
    __metadata("design:returntype", Promise)
], CategoryResolver.prototype, "deleteCategory", null);
__decorate([
    (0, graphql_1.Mutation)(() => category_model_1.RestoreCategoryResponse),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [category_model_1.RestoreCategoryDto]),
    __metadata("design:returntype", Promise)
], CategoryResolver.prototype, "restoreCategory", null);
exports.CategoryResolver = CategoryResolver = __decorate([
    (0, graphql_1.Resolver)(() => category_model_1.Category),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Inject)(category_usecases_proxy_module_1.CategoryUsecasesProxyModule.CREATE_CATEGORY_PROXY)),
    __param(1, (0, common_1.Inject)(category_usecases_proxy_module_1.CategoryUsecasesProxyModule.UPDATE_CATEGORY_PROXY)),
    __param(2, (0, common_1.Inject)(category_usecases_proxy_module_1.CategoryUsecasesProxyModule.DELETE_CATEGORY_PROXY)),
    __param(3, (0, common_1.Inject)(category_usecases_proxy_module_1.CategoryUsecasesProxyModule.LOAD_CATEGORY_PROXY)),
    __param(4, (0, common_1.Inject)(category_usecases_proxy_module_1.CategoryUsecasesProxyModule.LOAD_BY_ID_CATEGORY_PROXY)),
    __param(5, (0, common_1.Inject)(category_usecases_proxy_module_1.CategoryUsecasesProxyModule.RESTORE_CATEGORY_PROXY)),
    __metadata("design:paramtypes", [createCategory_usecase_1.CreateCategoryUseCase,
        updateCategory_usecase_1.UpdateCategoryUseCase,
        deleteCategory_usecase_1.DeleteCategoryUseCase,
        loadCategory_usecase_1.LoadCategoryUseCase,
        loadByIDCategory_usecase_1.LoadByIDCategoryUseCase,
        restoreCategory_usecase_1.RestoreCategoryUseCase])
], CategoryResolver);
//# sourceMappingURL=category.resolver.js.map