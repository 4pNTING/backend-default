"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateMenuOptionUseCase = void 0;
class CreateMenuOptionUseCase {
    constructor(menuOptionRepository) {
        this.menuOptionRepository = menuOptionRepository;
    }
    async execute(params) {
        return await this.menuOptionRepository.create(params);
    }
}
exports.CreateMenuOptionUseCase = CreateMenuOptionUseCase;
//# sourceMappingURL=createMenuOption.usecase.js.map