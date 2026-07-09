"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTableUseCase = void 0;
class CreateTableUseCase {
    constructor(tableRepository) {
        this.tableRepository = tableRepository;
    }
    async execute(params) {
        return await this.tableRepository.create(params);
    }
}
exports.CreateTableUseCase = CreateTableUseCase;
//# sourceMappingURL=createTable.usecase.js.map