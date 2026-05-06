"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteCategoryValidation = void 0;
const category_model_1 = require("../../../../domain/models/category.model");
class DeleteCategoryValidation extends category_model_1.DeleteCategoryRequest {
    constructor(categoryRepository) {
        super();
        this.categoryRepository = categoryRepository;
    }
    async execute(params) {
        try {
            this._id = params._id;
            const exist = await this.categoryRepository.findOne({ where: { _id: this._id } });
            if (!exist) {
                throw new Error(`Category ID ${this._id} not found`);
            }
        }
        catch (error) {
            throw error instanceof Error ? error : new Error(String(error));
        }
    }
}
exports.DeleteCategoryValidation = DeleteCategoryValidation;
//# sourceMappingURL=deleteCategory.validation.js.map