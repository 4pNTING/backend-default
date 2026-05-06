"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCategoryValidation = void 0;
const typeorm_1 = require("typeorm");
const category_model_1 = require("../../../../domain/models/category.model");
class UpdateCategoryValidation extends category_model_1.UpdateCategoryRequest {
    constructor(categoryRepository) {
        super();
        this.categoryRepository = categoryRepository;
    }
    async execute(params) {
        try {
            this._id = params._id;
            this.name = params.name;
            this.description = params.description;
            this.photo = params.photo;
            await this.validateParams();
        }
        catch (error) {
            throw error instanceof Error ? error : new Error(String(error));
        }
    }
    async validateParams() {
        if (!this._id) {
            throw new Error('Category ID is required');
        }
        const exist = await this.categoryRepository.findOne({ where: { _id: this._id } });
        if (!exist) {
            throw new Error(`Category ID ${this._id} not found`);
        }
        if (this.name) {
            const duplicate = await this.categoryRepository.findOne({
                where: {
                    name: this.name,
                    _id: (0, typeorm_1.Not)(this._id)
                }
            });
            if (duplicate) {
                throw new Error(`Category name "${this.name}" is already taken.`);
            }
        }
    }
}
exports.UpdateCategoryValidation = UpdateCategoryValidation;
//# sourceMappingURL=updateCategory.validation.js.map