"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTableUseCase = void 0;
class UpdateTableUseCase {
    constructor(tableRepository) {
        this.tableRepository = tableRepository;
    }
    async execute(params) {
        return await this.tableRepository.update(params);
    }
}
exports.UpdateTableUseCase = UpdateTableUseCase;
//# sourceMappingURL=updateTable.usecase.js.map