"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteInventoryItemUseCase = void 0;
class DeleteInventoryItemUseCase {
    constructor(inventoryRepository) {
        this.inventoryRepository = inventoryRepository;
    }
    async execute(params) {
        return await this.inventoryRepository.deleteItem(params);
    }
}
exports.DeleteInventoryItemUseCase = DeleteInventoryItemUseCase;
//# sourceMappingURL=deleteInventoryItem.usecase.js.map