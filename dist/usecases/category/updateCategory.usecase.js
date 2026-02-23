"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCategoryUseCase = void 0;
class UpdateCategoryUseCase {
    constructor(categoryRepository) {
        this.categoryRepository = categoryRepository;
    }
    async execute(params) {
        await this.categoryRepository.update(params);
    }
}
exports.UpdateCategoryUseCase = UpdateCategoryUseCase;
//# sourceMappingURL=updateCategory.usecase.js.map