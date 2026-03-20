"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateInventoryLevelUseCase = void 0;
class UpdateInventoryLevelUseCase {
    constructor(inventoryLevelRepository) {
        this.inventoryLevelRepository = inventoryLevelRepository;
    }
    async execute(params) {
        await this.inventoryLevelRepository.update(params);
    }
}
exports.UpdateInventoryLevelUseCase = UpdateInventoryLevelUseCase;
//# sourceMappingURL=updateInventoryLevel.usecase.js.map