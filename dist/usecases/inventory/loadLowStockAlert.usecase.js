"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadLowStockAlertUseCase = void 0;
class LoadLowStockAlertUseCase {
    constructor(inventoryRepository) {
        this.inventoryRepository = inventoryRepository;
    }
    async execute() {
        return await this.inventoryRepository.findLowStock();
    }
}
exports.LoadLowStockAlertUseCase = LoadLowStockAlertUseCase;
//# sourceMappingURL=loadLowStockAlert.usecase.js.map