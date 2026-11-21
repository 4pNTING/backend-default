"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateInventoryItemUseCase = void 0;
class CreateInventoryItemUseCase {
    constructor(inventoryRepository) {
        this.inventoryRepository = inventoryRepository;
    }
    async execute(params) {
        return await this.inventoryRepository.createItem(params);
    }
}
exports.CreateInventoryItemUseCase = CreateInventoryItemUseCase;
//# sourceMappingURL=createInventoryItem.usecase.js.map