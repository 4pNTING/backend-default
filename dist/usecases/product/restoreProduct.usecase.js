"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestoreProductUseCase = void 0;
class RestoreProductUseCase {
    constructor(productRepository) {
        this.productRepository = productRepository;
    }
    async execute(id) {
        await this.productRepository.restore(id);
    }
}
exports.RestoreProductUseCase = RestoreProductUseCase;
//# sourceMappingURL=restoreProduct.usecase.js.map