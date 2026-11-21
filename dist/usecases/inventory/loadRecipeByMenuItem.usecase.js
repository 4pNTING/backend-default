"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadRecipeByMenuItemUseCase = void 0;
class LoadRecipeByMenuItemUseCase {
    constructor(inventoryRepository) {
        this.inventoryRepository = inventoryRepository;
    }
    async execute(params) {
        return await this.inventoryRepository.getRecipeByMenuItem(params);
    }
}
exports.LoadRecipeByMenuItemUseCase = LoadRecipeByMenuItemUseCase;
//# sourceMappingURL=loadRecipeByMenuItem.usecase.js.map