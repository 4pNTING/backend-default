"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadTableUseCase = void 0;
class LoadTableUseCase {
    constructor(tableRepository) {
        this.tableRepository = tableRepository;
    }
    async execute(query) {
        return await this.tableRepository.findAll(query);
    }
}
exports.LoadTableUseCase = LoadTableUseCase;
//# sourceMappingURL=loadTable.usecase.js.map