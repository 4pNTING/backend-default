"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadProductUseCase = void 0;
class LoadProductUseCase {
    constructor(productRepository) {
        this.productRepository = productRepository;
    }
    async execute(query) {
        return await this.productRepository.findAll(query);
    }
}
exports.LoadProductUseCase = LoadProductUseCase;
//# sourceMappingURL=loadProduct.usecase.js.map