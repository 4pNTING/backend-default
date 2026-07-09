"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateMenuItemUseCase = void 0;
class CreateMenuItemUseCase {
    constructor(menuItemRepository) {
        this.menuItemRepository = menuItemRepository;
    }
    async execute(params) {
        return await this.menuItemRepository.create(params);
    }
}
exports.CreateMenuItemUseCase = CreateMenuItemUseCase;
//# sourceMappingURL=createMenuItem.usecase.js.map