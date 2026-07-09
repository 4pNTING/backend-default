"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteMenuOptionUseCase = void 0;
class DeleteMenuOptionUseCase {
    constructor(menuOptionRepository) {
        this.menuOptionRepository = menuOptionRepository;
    }
    async execute(params) {
        return await this.menuOptionRepository.delete(params);
    }
}
exports.DeleteMenuOptionUseCase = DeleteMenuOptionUseCase;
//# sourceMappingURL=deleteMenuOption.usecase.js.map