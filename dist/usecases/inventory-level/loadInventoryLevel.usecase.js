"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadInventoryLevelUseCase = void 0;
class LoadInventoryLevelUseCase {
    constructor(inventoryLevelRepository) {
        this.inventoryLevelRepository = inventoryLevelRepository;
    }
    async execute(query) {
        return await this.inventoryLevelRepository.findAll(query);
    }
}
exports.LoadInventoryLevelUseCase = LoadInventoryLevelUseCase;
//# sourceMappingURL=loadInventoryLevel.usecase.js.map