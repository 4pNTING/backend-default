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
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestoreCategoryUseCase = void 0;
const common_1 = require("@nestjs/common");
const category_repository_1 = require("../../infrastructure/repositories/category/category.repository");
let RestoreCategoryUseCase = class RestoreCategoryUseCase {
    constructor(categoryRepository) {
        this.categoryRepository = categoryRepository;
    }
    async execute(_id) {
        await this.categoryRepository.restore(_id);
        return await this.categoryRepository.findById({ _id });
    }
};
exports.RestoreCategoryUseCase = RestoreCategoryUseCase;
exports.RestoreCategoryUseCase = RestoreCategoryUseCase = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [category_repository_1.DatabaseCategoryRepository])
], RestoreCategoryUseCase);
//# sourceMappingURL=restoreCategory.usecase.js.map