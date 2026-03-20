"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestoreZoneUsecase = void 0;
class RestoreZoneUsecase {
    constructor(zoneRepository) {
        this.zoneRepository = zoneRepository;
    }
    async execute(_id) {
        return await this.zoneRepository.restore(_id);
    }
}
exports.RestoreZoneUsecase = RestoreZoneUsecase;
//# sourceMappingURL=restoreZone.usecase.js.map