"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCategoryUseCase = void 0;
class CreateCategoryUseCase {
    constructor(categoryRepository) {
        this.categoryRepository = categoryRepository;
    }
    async execute(params) {
        return await this.categoryRepository.create(params);
    }
}
exports.CreateCategoryUseCase = CreateCategoryUseCase;
//# sourceMappingURL=createCategory.usecase.js.map