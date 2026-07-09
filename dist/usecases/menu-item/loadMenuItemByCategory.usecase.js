"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadMenuItemByCategoryUseCase = void 0;
class LoadMenuItemByCategoryUseCase {
    constructor(menuItemRepository) {
        this.menuItemRepository = menuItemRepository;
    }
    async execute(params) {
        return await this.menuItemRepository.findByCategory(params);
    }
}
exports.LoadMenuItemByCategoryUseCase = LoadMenuItemByCategoryUseCase;
//# sourceMappingURL=loadMenuItemByCategory.usecase.js.map