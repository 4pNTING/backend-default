"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestoreTableUseCase = void 0;
class RestoreTableUseCase {
    constructor(tableRepository) {
        this.tableRepository = tableRepository;
    }
    async execute(_id) {
        return await this.tableRepository.restore(_id);
    }
}
exports.RestoreTableUseCase = RestoreTableUseCase;
//# sourceMappingURL=restoreTable.usecase.js.map