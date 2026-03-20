"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadInventoryLevelByIdUseCase = void 0;
class LoadInventoryLevelByIdUseCase {
    constructor(inventoryLevelRepository) {
        this.inventoryLevelRepository = inventoryLevelRepository;
    }
    async execute(params) {
        return await this.inventoryLevelRepository.findById(params);
    }
}
exports.LoadInventoryLevelByIdUseCase = LoadInventoryLevelByIdUseCase;
//# sourceMappingURL=loadInventoryLevelById.usecase.js.map