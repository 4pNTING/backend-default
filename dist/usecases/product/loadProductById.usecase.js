"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadProductByIdUseCase = void 0;
class LoadProductByIdUseCase {
    constructor(productRepository) {
        this.productRepository = productRepository;
    }
    async execute(params) {
        return await this.productRepository.findById(params);
    }
}
exports.LoadProductByIdUseCase = LoadProductByIdUseCase;
//# sourceMappingURL=loadProductById.usecase.js.map