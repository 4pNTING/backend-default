"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCategoryAction = void 0;
const category_entity_1 = require("../../../../src/infrastructure/entities/category.entity");
const category_model_1 = require("../../../../src/domain/models/category.model");
class CreateCategoryAction extends category_model_1.CategoryModel {
    constructor(session) {
        super();
        this.session = session;
    }
    async execute(params) {
        try {
            await this.validateAndBuildParams(params);
            await this.persistCategory();
            return this.buildResponse();
        }
        catch (error) {
            console.error('ERROR CreateCategoryAction.execute', error?.message);
            throw error instanceof Error ? error : new Error(error?.message);
        }
    }
    async validateAndBuildParams(params) {
        try {
            this.name = params.name;
            this.description = params.description;
            this.photo = params.photo;
            this.isActive = params.isActive ?? true;
            this.createdAt = new Date();
            this.updatedAt = new Date();
        }
        catch (error) {
            console.error('ERROR validateAndBuildParams', error?.message);
            throw new Error(`Failed to build parameters: ${error?.message}`);
        }
    }
    async persistCategory() {
        try {
            const entity = this.session.manager.create(category_entity_1.CategoryEntity, this);
            const savedEntity = await this.session.manager.save(category_entity_1.CategoryEntity, entity);
            if (savedEntity) {
                this.id = savedEntity.id;
            }
            else {
                throw new Error('Failed to save category into database');
            }
        }
        catch (error) {
            console.error('ERROR persistCategory', error?.message);
            throw new Error(`Failed to persist category: ${error?.message}`);
        }
    }
    buildResponse() {
        try {
            return {
                id: this.id,
                name: this.name,
                description: this.description,
                photo: this.photo,
                createdAt: this.createdAt,
                updatedAt: this.updatedAt,
                isActive: this.isActive
            };
        }
        catch (error) {
            console.error('ERROR buildResponse', error?.message);
            throw new Error(`Failed to build response: ${error?.message}`);
        }
    }
}
exports.CreateCategoryAction = CreateCategoryAction;
//# sourceMappingURL=createCategory.action.js.map