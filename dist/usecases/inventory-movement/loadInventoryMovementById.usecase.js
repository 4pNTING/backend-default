"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadInventoryMovementByIdUseCase = void 0;
class LoadInventoryMovementByIdUseCase {
    constructor(inventoryMovementRepository) {
        this.inventoryMovementRepository = inventoryMovementRepository;
    }
    async execute(params) {
        return await this.inventoryMovementRepository.findById(params);
    }
}
exports.LoadInventoryMovementByIdUseCase = LoadInventoryMovementByIdUseCase;
//# sourceMappingURL=loadInventoryMovementById.usecase.js.map