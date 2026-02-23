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
exports.CategoryController = void 0;
const common_1 = require("@nestjs/common");
const category_model_1 = require("@domain/models/category.model");
const category_usecases_proxy_module_1 = require("../../usecases-proxy/category-usecases-proxy.module");
const createCategory_usecase_1 = require("@usecases/category/createCategory.usecase");
const updateCategory_usecase_1 = require("@usecases/category/updateCategory.usecase");
const deleteCategory_usecase_1 = require("@usecases/category/deleteCategory.usecase");
const loadCategory_usecase_1 = require("@usecases/category/loadCategory.usecase");
const loadByIDCategory_usecase_1 = require("@usecases/category/loadByIDCategory.usecase");
let CategoryController = class CategoryController {
    constructor(createCategoryUseCase, updateCategoryUseCase, deleteCategoryUseCase, loadCategoryUseCase, loadCategoryByIdUseCase) {
        this.createCategoryUseCase = createCategoryUseCase;
        this.updateCategoryUseCase = updateCategoryUseCase;
        this.deleteCategoryUseCase = deleteCategoryUseCase;
        this.loadCategoryUseCase = loadCategoryUseCase;
        this.loadCategoryByIdUseCase = loadCategoryByIdUseCase;
    }
    async findAll(query) {
        return await this.loadCategoryUseCase.execute(query);
    }
    async findOne(id) {
        return await this.loadCategoryByIdUseCase.execute({ id });
    }
    async create(body) {
        return await this.createCategoryUseCase.execute(body);
    }
    async update(id, body) {
        const request = { id, ...body };
        return await this.updateCategoryUseCase.execute(request);
    }
    async delete(id) {
        const request = { id };
        return await this.deleteCategoryUseCase.execute(request);
    }
};
exports.CategoryController = CategoryController;
__decorate([
    (0, common_1.Post)('search'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [category_model_1.CreateCategoryRequest]),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "delete", null);
exports.CategoryController = CategoryController = __decorate([
    (0, common_1.Controller)('categories'),
    __param(0, (0, common_1.Inject)(category_usecases_proxy_module_1.CategoryUsecasesProxyModule.CREATE_CATEGORY_PROXY)),
    __param(1, (0, common_1.Inject)(category_usecases_proxy_module_1.CategoryUsecasesProxyModule.UPDATE_CATEGORY_PROXY)),
    __param(2, (0, common_1.Inject)(category_usecases_proxy_module_1.CategoryUsecasesProxyModule.DELETE_CATEGORY_PROXY)),
    __param(3, (0, common_1.Inject)(category_usecases_proxy_module_1.CategoryUsecasesProxyModule.LOAD_CATEGORY_PROXY)),
    __param(4, (0, common_1.Inject)(category_usecases_proxy_module_1.CategoryUsecasesProxyModule.LOAD_BY_ID_CATEGORY_PROXY)),
    __metadata("design:paramtypes", [createCategory_usecase_1.CreateCategoryUseCase,
        updateCategory_usecase_1.UpdateCategoryUseCase,
        deleteCategory_usecase_1.DeleteCategoryUseCase,
        loadCategory_usecase_1.LoadCategoryUseCase,
        loadByIDCategory_usecase_1.LoadByIDCategoryUseCase])
], CategoryController);
//# sourceMappingURL=category.controller.js.map