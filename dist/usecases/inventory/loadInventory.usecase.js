"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadInventoryUseCase = void 0;
class LoadInventoryUseCase {
    constructor(inventoryRepository) {
        this.inventoryRepository = inventoryRepository;
    }
    async execute(params) {
        return await this.inventoryRepository.findAll(params);
    }
}
exports.LoadInventoryUseCase = LoadInventoryUseCase;
//# sourceMappingURL=loadInventory.usecase.js.map