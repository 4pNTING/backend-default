"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProductValidation = void 0;
const product_model_1 = require("@domain/models/product.model");
class CreateProductValidation extends product_model_1.CreateProductRequest {
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
            if (!this.sku || this.sku.trim() === '') {
                throw new Error('Product SKU is required');
            }
            if (!this.name || this.name.trim() === '') {
                throw new Error('Product name is required');
            }
            const exist = await this.productRepository.findOne({
                where: { sku: this.sku }
            });
            if (exist) {
                throw new Error(`Product SKU "${this.sku}" already exists.`);
            }
        }
        catch (error) {
            console.log('ERROR validateParams', error?.message);
            throw error instanceof Error ? error : new Error(error?.message);
        }
    }
}
exports.CreateProductValidation = CreateProductValidation;
//# sourceMappingURL=createProduct.validation.js.map