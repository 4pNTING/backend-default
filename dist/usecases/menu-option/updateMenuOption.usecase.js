"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateMenuOptionUseCase = void 0;
class UpdateMenuOptionUseCase {
    constructor(menuOptionRepository) {
        this.menuOptionRepository = menuOptionRepository;
    }
    async execute(params) {
        return await this.menuOptionRepository.update(params);
    }
}
exports.UpdateMenuOptionUseCase = UpdateMenuOptionUseCase;
//# sourceMappingURL=updateMenuOption.usecase.js.map