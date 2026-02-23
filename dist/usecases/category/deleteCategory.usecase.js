"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteCategoryUseCase = void 0;
class DeleteCategoryUseCase {
    constructor(categoryRepository) {
        this.categoryRepository = categoryRepository;
    }
    async execute(params) {
        await this.categoryRepository.delete(params);
    }
}
exports.DeleteCategoryUseCase = DeleteCategoryUseCase;
//# sourceMappingURL=deleteCategory.usecase.js.map