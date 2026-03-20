"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateZoneUsecase = void 0;
class UpdateZoneUsecase {
    constructor(zoneRepository) {
        this.zoneRepository = zoneRepository;
    }
    async execute(params) {
        return await this.zoneRepository.update(params);
    }
}
exports.UpdateZoneUsecase = UpdateZoneUsecase;
//# sourceMappingURL=updateZone.usecase.js.map