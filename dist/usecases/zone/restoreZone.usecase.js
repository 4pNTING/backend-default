"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestoreZoneUsecase = void 0;
class RestoreZoneUsecase {
    constructor(zoneRepository) {
        this.zoneRepository = zoneRepository;
    }
    async execute(id) {
        return await this.zoneRepository.restore(id);
    }
}
exports.RestoreZoneUsecase = RestoreZoneUsecase;
//# sourceMappingURL=restoreZone.usecase.js.map