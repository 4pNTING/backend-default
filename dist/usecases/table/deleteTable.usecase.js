"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteTableUseCase = void 0;
class DeleteTableUseCase {
    constructor(tableRepository) {
        this.tableRepository = tableRepository;
    }
    async execute(params) {
        return await this.tableRepository.delete(params);
    }
}
exports.DeleteTableUseCase = DeleteTableUseCase;
//# sourceMappingURL=deleteTable.usecase.js.map