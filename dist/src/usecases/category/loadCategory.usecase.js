"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadCategoryUseCase = void 0;
class LoadCategoryUseCase {
    constructor(categoryRepository) {
        this.categoryRepository = categoryRepository;
    }
    async execute(query) {
        return await this.categoryRepository.findAll(query);
    }
}
exports.LoadCategoryUseCase = LoadCategoryUseCase;
//# sourceMappingURL=loadCategory.usecase.js.map