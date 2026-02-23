"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadAllCategoryValidation = void 0;
class LoadAllCategoryValidation {
    constructor(categoryRepository) {
        this.categoryRepository = categoryRepository;
    }
    async execute(query) {
        if (query.paginate?.limit && query.paginate.limit > 500) {
            throw new Error('Pagination limit cannot exceed 500');
        }
    }
}
exports.LoadAllCategoryValidation = LoadAllCategoryValidation;
//# sourceMappingURL=loadAllCategory.validation.js.map