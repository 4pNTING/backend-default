"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadByIDCategoryUseCase = void 0;
class LoadByIDCategoryUseCase {
    constructor(categoryRepository) {
        this.categoryRepository = categoryRepository;
    }
    async execute(params) {
        return await this.categoryRepository.findById(params);
    }
}
exports.LoadByIDCategoryUseCase = LoadByIDCategoryUseCase;
//# sourceMappingURL=loadByIDCategory.usecase.js.map