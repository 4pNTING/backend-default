"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateProductUseCase = void 0;
class UpdateProductUseCase {
    constructor(productRepository) {
        this.productRepository = productRepository;
    }
    async execute(params) {
        await this.productRepository.update(params);
    }
}
exports.UpdateProductUseCase = UpdateProductUseCase;
//# sourceMappingURL=updateProduct.usecase.js.map