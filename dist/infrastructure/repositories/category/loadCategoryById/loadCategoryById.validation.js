"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadCategoryByIdValidation = void 0;
const category_model_1 = require("@domain/models/category.model");
class LoadCategoryByIdValidation extends category_model_1.LoadCategoryByIdRequest {
    constructor(categoryRepository) {
        super();
        this.categoryRepository = categoryRepository;
    }
    async execute(params) {
        if (!params.id) {
            throw new Error('Category ID is required');
        }
    }
}
exports.LoadCategoryByIdValidation = LoadCategoryByIdValidation;
//# sourceMappingURL=loadCategoryById.validation.js.map