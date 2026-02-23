"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCategoryValidation = void 0;
const category_model_1 = require("@domain/models/category.model");
class CreateCategoryValidation extends category_model_1.CreateCategoryRequest {
    constructor(categoryRepository) {
        super();
        this.categoryRepository = categoryRepository;
    }
    async execute(params) {
        try {
            await this.buildParams(params);
            await this.validateParams();
        }
        catch (error) {
            throw error instanceof Error ? error : new Error(String(error));
        }
    }
    async buildParams(params) {
        try {
            this.name = params.name;
            this.description = params.description;
            this.photo = params.photo;
        }
        catch (error) {
            console.log('ERROR buildParams', error?.message);
            throw new Error(error?.message || 'Unknown error');
        }
    }
    async validateParams() {
        try {
            if (!this.name || this.name.trim() === '') {
                throw new Error('Category name is required');
            }
            const exist = await this.categoryRepository.findOne({
                where: { name: this.name }
            });
            if (exist) {
                throw new Error(`Category name "${this.name}" already exists.`);
            }
        }
        catch (error) {
            console.log('ERROR validateParams', error?.message);
            throw error instanceof Error ? error : new Error(error?.message);
        }
    }
}
exports.CreateCategoryValidation = CreateCategoryValidation;
//# sourceMappingURL=createCategory.validation.js.map