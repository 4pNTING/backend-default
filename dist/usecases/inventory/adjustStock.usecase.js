"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdjustStockUseCase = void 0;
class AdjustStockUseCase {
    constructor(inventoryRepository) {
        this.inventoryRepository = inventoryRepository;
    }
    async execute(params) {
        return await this.inventoryRepository.adjustStock(params);
    }
}
exports.AdjustStockUseCase = AdjustStockUseCase;
//# sourceMappingURL=adjustStock.usecase.js.map