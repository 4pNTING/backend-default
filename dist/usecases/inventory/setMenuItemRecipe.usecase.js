"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetMenuItemRecipeUseCase = void 0;
class SetMenuItemRecipeUseCase {
    constructor(inventoryRepository) {
        this.inventoryRepository = inventoryRepository;
    }
    async execute(params) {
        return await this.inventoryRepository.setRecipe(params);
    }
}
exports.SetMenuItemRecipeUseCase = SetMenuItemRecipeUseCase;
//# sourceMappingURL=setMenuItemRecipe.usecase.js.map