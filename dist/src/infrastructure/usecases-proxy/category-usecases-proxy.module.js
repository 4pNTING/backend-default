"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var CategoryUsecasesProxyModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryUsecasesProxyModule = void 0;
const common_1 = require("@nestjs/common");
const category_repository_1 = require("../repositories/category/category.repository");
const repositories_module_1 = require("../repositories/repositories.module");
const createCategory_usecase_1 = require("../../usecases/category/createCategory.usecase");
const updateCategory_usecase_1 = require("../../usecases/category/updateCategory.usecase");
const deleteCategory_usecase_1 = require("../../usecases/category/deleteCategory.usecase");
const loadCategory_usecase_1 = require("../../usecases/category/loadCategory.usecase");
const loadByIDCategory_usecase_1 = require("../../usecases/category/loadByIDCategory.usecase");
const restoreCategory_usecase_1 = require("../../usecases/category/restoreCategory.usecase");
let CategoryUsecasesProxyModule = CategoryUsecasesProxyModule_1 = class CategoryUsecasesProxyModule {
    static register() {
        return {
            module: CategoryUsecasesProxyModule_1,
            providers: [
                {
                    inject: [category_repository_1.DatabaseCategoryRepository],
                    provide: CategoryUsecasesProxyModule_1.CREATE_CATEGORY_PROXY,
                    useFactory: (repo) => new createCategory_usecase_1.CreateCategoryUseCase(repo),
                },
                {
                    inject: [category_repository_1.DatabaseCategoryRepository],
                    provide: CategoryUsecasesProxyModule_1.UPDATE_CATEGORY_PROXY,
                    useFactory: (repo) => new updateCategory_usecase_1.UpdateCategoryUseCase(repo),
                },
                {
                    inject: [category_repository_1.DatabaseCategoryRepository],
                    provide: CategoryUsecasesProxyModule_1.DELETE_CATEGORY_PROXY,
                    useFactory: (repo) => new deleteCategory_usecase_1.DeleteCategoryUseCase(repo),
                },
                {
                    inject: [category_repository_1.DatabaseCategoryRepository],
                    provide: CategoryUsecasesProxyModule_1.LOAD_CATEGORY_PROXY,
                    useFactory: (repo) => new loadCategory_usecase_1.LoadCategoryUseCase(repo),
                },
                {
                    inject: [category_repository_1.DatabaseCategoryRepository],
                    provide: CategoryUsecasesProxyModule_1.LOAD_BY_ID_CATEGORY_PROXY,
                    useFactory: (repo) => new loadByIDCategory_usecase_1.LoadByIDCategoryUseCase(repo),
                },
                {
                    inject: [category_repository_1.DatabaseCategoryRepository],
                    provide: CategoryUsecasesProxyModule_1.RESTORE_CATEGORY_PROXY,
                    useFactory: (repo) => new restoreCategory_usecase_1.RestoreCategoryUseCase(repo),
                },
            ],
            exports: [
                CategoryUsecasesProxyModule_1.CREATE_CATEGORY_PROXY,
                CategoryUsecasesProxyModule_1.UPDATE_CATEGORY_PROXY,
                CategoryUsecasesProxyModule_1.DELETE_CATEGORY_PROXY,
                CategoryUsecasesProxyModule_1.LOAD_CATEGORY_PROXY,
                CategoryUsecasesProxyModule_1.LOAD_BY_ID_CATEGORY_PROXY,
                CategoryUsecasesProxyModule_1.RESTORE_CATEGORY_PROXY,
            ],
        };
    }
};
exports.CategoryUsecasesProxyModule = CategoryUsecasesProxyModule;
CategoryUsecasesProxyModule.CREATE_CATEGORY_PROXY = 'CreateCategoryProxy';
CategoryUsecasesProxyModule.UPDATE_CATEGORY_PROXY = 'UpdateCategoryProxy';
CategoryUsecasesProxyModule.DELETE_CATEGORY_PROXY = 'DeleteCategoryProxy';
CategoryUsecasesProxyModule.LOAD_CATEGORY_PROXY = 'LoadCategoryProxy';
CategoryUsecasesProxyModule.LOAD_BY_ID_CATEGORY_PROXY = 'LoadByIDCategoryProxy';
CategoryUsecasesProxyModule.RESTORE_CATEGORY_PROXY = 'RestoreCategoryProxy';
exports.CategoryUsecasesProxyModule = CategoryUsecasesProxyModule = CategoryUsecasesProxyModule_1 = __decorate([
    (0, common_1.Module)({
        imports: [repositories_module_1.RepositoriesModule],
    })
], CategoryUsecasesProxyModule);
//# sourceMappingURL=category-usecases-proxy.module.js.map