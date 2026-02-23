"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateZoneUsecase = void 0;
class CreateZoneUsecase {
    constructor(zoneRepository) {
        this.zoneRepository = zoneRepository;
    }
    async execute(params) {
        return await this.zoneRepository.create(params);
    }
}
exports.CreateZoneUsecase = CreateZoneUsecase;
//# sourceMappingURL=createZone.usecase.js.map