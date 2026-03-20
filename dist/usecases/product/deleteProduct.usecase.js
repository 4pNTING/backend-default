"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteProductUseCase = void 0;
class DeleteProductUseCase {
    constructor(productRepository) {
        this.productRepository = productRepository;
    }
    async execute(params) {
        await this.productRepository.delete(params);
    }
}
exports.DeleteProductUseCase = DeleteProductUseCase;
//# sourceMappingURL=deleteProduct.usecase.js.map