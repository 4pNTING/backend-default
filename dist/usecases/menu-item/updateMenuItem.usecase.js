"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateMenuItemUseCase = void 0;
class UpdateMenuItemUseCase {
    constructor(menuItemRepository) {
        this.menuItemRepository = menuItemRepository;
    }
    async execute(params) {
        return await this.menuItemRepository.update(params);
    }
}
exports.UpdateMenuItemUseCase = UpdateMenuItemUseCase;
//# sourceMappingURL=updateMenuItem.usecase.js.map