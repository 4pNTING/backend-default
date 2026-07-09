"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadTableByZoneUseCase = void 0;
class LoadTableByZoneUseCase {
    constructor(tableRepository) {
        this.tableRepository = tableRepository;
    }
    async execute(params) {
        return await this.tableRepository.findByZone(params);
    }
}
exports.LoadTableByZoneUseCase = LoadTableByZoneUseCase;
//# sourceMappingURL=loadTableByZone.usecase.js.map