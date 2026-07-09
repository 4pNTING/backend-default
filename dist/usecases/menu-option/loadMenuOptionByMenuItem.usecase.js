"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadMenuOptionByMenuItemUseCase = void 0;
class LoadMenuOptionByMenuItemUseCase {
    constructor(menuOptionRepository) {
        this.menuOptionRepository = menuOptionRepository;
    }
    async execute(params) {
        return await this.menuOptionRepository.findByMenuItem(params);
    }
}
exports.LoadMenuOptionByMenuItemUseCase = LoadMenuOptionByMenuItemUseCase;
//# sourceMappingURL=loadMenuOptionByMenuItem.usecase.js.map