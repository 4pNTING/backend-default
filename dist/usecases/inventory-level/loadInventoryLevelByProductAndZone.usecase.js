"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadInventoryLevelByProductAndZoneUseCase = void 0;
class LoadInventoryLevelByProductAndZoneUseCase {
    constructor(inventoryLevelRepository) {
        this.inventoryLevelRepository = inventoryLevelRepository;
    }
    async execute(params) {
        return await this.inventoryLevelRepository.findByProductAndZone(params);
    }
}
exports.LoadInventoryLevelByProductAndZoneUseCase = LoadInventoryLevelByProductAndZoneUseCase;
//# sourceMappingURL=loadInventoryLevelByProductAndZone.usecase.js.map