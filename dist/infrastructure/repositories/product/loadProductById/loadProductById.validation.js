"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadProductByIdValidation = void 0;
class LoadProductByIdValidation {
    constructor(productRepository) {
        this.productRepository = productRepository;
    }
    async execute(params) {
        if (!params.id) {
            throw new Error('Product ID is required');
        }
        const exists = await this.productRepository.findOne({ where: { id: params.id } });
        if (!exists) {
            throw new Error(`Product not found with id: ${params.id}`);
        }
    }
}
exports.LoadProductByIdValidation = LoadProductByIdValidation;
//# sourceMappingURL=loadProductById.validation.js.map