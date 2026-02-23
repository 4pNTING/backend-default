"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadAllZoneUsecase = void 0;
class LoadAllZoneUsecase {
    constructor(zoneRepository) {
        this.zoneRepository = zoneRepository;
    }
    async execute(query) {
        return await this.zoneRepository.findAll(query);
    }
}
exports.LoadAllZoneUsecase = LoadAllZoneUsecase;
//# sourceMappingURL=loadAllZone.usecase.js.map