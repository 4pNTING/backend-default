"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateInventoryLevelUseCase = void 0;
class CreateInventoryLevelUseCase {
    constructor(inventoryLevelRepository) {
        this.inventoryLevelRepository = inventoryLevelRepository;
    }
    async execute(params) {
        return await this.inventoryLevelRepository.create(params);
    }
}
exports.CreateInventoryLevelUseCase = CreateInventoryLevelUseCase;
//# sourceMappingURL=createInventoryLevel.usecase.js.map