"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteZoneUsecase = void 0;
class DeleteZoneUsecase {
    constructor(zoneRepository) {
        this.zoneRepository = zoneRepository;
    }
    async execute(params) {
        return await this.zoneRepository.delete(params);
    }
}
exports.DeleteZoneUsecase = DeleteZoneUsecase;
//# sourceMappingURL=deleteZone.usecase.js.map