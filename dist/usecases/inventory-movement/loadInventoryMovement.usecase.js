"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadInventoryMovementUseCase = void 0;
class LoadInventoryMovementUseCase {
    constructor(inventoryMovementRepository) {
        this.inventoryMovementRepository = inventoryMovementRepository;
    }
    async execute(query) {
        return await this.inventoryMovementRepository.findAll(query);
    }
}
exports.LoadInventoryMovementUseCase = LoadInventoryMovementUseCase;
//# sourceMappingURL=loadInventoryMovement.usecase.js.map