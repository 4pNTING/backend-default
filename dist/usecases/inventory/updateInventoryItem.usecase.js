"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateInventoryItemUseCase = void 0;
class UpdateInventoryItemUseCase {
    constructor(inventoryRepository) {
        this.inventoryRepository = inventoryRepository;
    }
    async execute(params) {
        return await this.inventoryRepository.updateItem(params);
    }
}
exports.UpdateInventoryItemUseCase = UpdateInventoryItemUseCase;
//# sourceMappingURL=updateInventoryItem.usecase.js.map