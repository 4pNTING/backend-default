"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadByIDTableUseCase = void 0;
class LoadByIDTableUseCase {
    constructor(tableRepository) {
        this.tableRepository = tableRepository;
    }
    async execute(params) {
        return await this.tableRepository.findById(params);
    }
}
exports.LoadByIDTableUseCase = LoadByIDTableUseCase;
//# sourceMappingURL=loadByIDTable.usecase.js.map