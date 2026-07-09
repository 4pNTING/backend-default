"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadMenuItemUseCase = void 0;
class LoadMenuItemUseCase {
    constructor(menuItemRepository) {
        this.menuItemRepository = menuItemRepository;
    }
    async execute(query) {
        return await this.menuItemRepository.findAll(query);
    }
}
exports.LoadMenuItemUseCase = LoadMenuItemUseCase;
//# sourceMappingURL=loadMenuItem.usecase.js.map