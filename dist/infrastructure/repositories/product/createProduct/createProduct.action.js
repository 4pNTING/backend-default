"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProductAction = void 0;
const product_entity_1 = require("@infrastructure/entities/product.entity");
const product_model_1 = require("@domain/models/product.model");
class CreateProductAction extends product_model_1.ProductModel {
    constructor(session) {
        super();
        this.session = session;
    }
    async execute(params) {
        try {
            await this.validateAndBuildParams(params);
            await this.persistProduct();
            return this.buildResponse();
        }
        catch (error) {
            console.error('ERROR CreateProductAction.execute', error?.message);
            throw error instanceof Error ? error : new Error(error?.message);
        }
    }
    async validateAndBuildParams(params) {
        try {
            this.sku = params.sku;
            this.name = params.name;
            this.description = params.description;
            this.price = params.price;
            this.cost = params.cost;
            this.categoryId = params.categoryId;
            this.lowStockThreshold = params.lowStockThreshold ?? 5;
            this.isActive = params.isActive ?? true;
            this.createdAt = new Date();
            this.updatedAt = new Date();
        }
        catch (error) {
            console.error('ERROR validateAndBuildParams', error?.message);
            throw new Error(`Failed to build parameters: ${error?.message}`);
        }
    }
    async persistProduct() {
        try {
            const entity = this.session.manager.create(product_entity_1.ProductEntity, this);
            const savedEntity = await this.session.manager.save(product_entity_1.ProductEntity, entity);
            if (savedEntity) {
                this.id = savedEntity.id;
            }
            else {
                throw new Error('Failed to save product into database');
            }
        }
        catch (error) {
            console.error('ERROR persistProduct', error?.message);
            throw new Error(`Failed to persist product: ${error?.message}`);
        }
    }
    buildResponse() {
        try {
            return {
                id: this.id,
                sku: this.sku,
                name: this.name,
                description: this.description,
                price: this.price,
                cost: this.cost,
                categoryId: this.categoryId,
                lowStockThreshold: this.lowStockThreshold,
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
exports.CreateProductAction = CreateProductAction;
//# sourceMappingURL=createProduct.action.js.map