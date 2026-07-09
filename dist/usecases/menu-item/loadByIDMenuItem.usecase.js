"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadByIDMenuItemUseCase = void 0;
class LoadByIDMenuItemUseCase {
    constructor(menuItemRepository) {
        this.menuItemRepository = menuItemRepository;
    }
    async execute(params) {
        return await this.menuItemRepository.findById(params);
    }
}
exports.LoadByIDMenuItemUseCase = LoadByIDMenuItemUseCase;
//# sourceMappingURL=loadByIDMenuItem.usecase.js.map