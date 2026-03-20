"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateProductValidation = void 0;
const typeorm_1 = require("typeorm");
const product_model_1 = require("@domain/models/product.model");
class UpdateProductValidation extends product_model_1.UpdateProductRequest {
    constructor(productRepository) {
        super();
        this.productRepository = productRepository;
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
            this.id = params.id;
            this.sku = params.sku;
            this.name = params.name;
        }
        catch (error) {
            console.log('ERROR buildParams', error?.message);
            throw new Error(error?.message || 'Unknown error');
        }
    }
    async validateParams() {
        try {
            if (!this.id) {
                throw new Error('Product ID is required for update');
            }
            const existingProduct = await this.productRepository.findOne({ where: { id: this.id } });
            if (!existingProduct) {
                throw new Error(`Product with ID ${this.id} not found`);
            }
            if (this.sku && this.sku !== existingProduct.sku) {
                const existSku = await this.productRepository.findOne({
                    where: { sku: this.sku, id: (0, typeorm_1.Not)(this.id) }
                });
                if (existSku) {
                    throw new Error(`Product SKU "${this.sku}" is already in use by another product.`);
                }
            }
        }
        catch (error) {
            console.log('ERROR validateParams', error?.message);
            throw error instanceof Error ? error : new Error(error?.message);
        }
    }
}
exports.UpdateProductValidation = UpdateProductValidation;
//# sourceMappingURL=updateProduct.validation.js.map