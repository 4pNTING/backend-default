"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadStockHistoryUseCase = void 0;
class LoadStockHistoryUseCase {
    constructor(inventoryRepository) {
        this.inventoryRepository = inventoryRepository;
    }
    async execute(params) {
        return await this.inventoryRepository.getStockHistory(params);
    }
}
exports.LoadStockHistoryUseCase = LoadStockHistoryUseCase;
//# sourceMappingURL=loadStockHistory.usecase.js.map