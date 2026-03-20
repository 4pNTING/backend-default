"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProductUseCase = void 0;
class CreateProductUseCase {
    constructor(productRepository) {
        this.productRepository = productRepository;
    }
    async execute(params) {
        return await this.productRepository.create(params);
    }
}
exports.CreateProductUseCase = CreateProductUseCase;
//# sourceMappingURL=createProduct.usecase.js.map