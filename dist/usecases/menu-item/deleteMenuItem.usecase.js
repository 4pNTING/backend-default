"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteMenuItemUseCase = void 0;
class DeleteMenuItemUseCase {
    constructor(menuItemRepository) {
        this.menuItemRepository = menuItemRepository;
    }
    async execute(params) {
        return await this.menuItemRepository.delete(params);
    }
}
exports.DeleteMenuItemUseCase = DeleteMenuItemUseCase;
//# sourceMappingURL=deleteMenuItem.usecase.js.map