"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadZoneByIdUsecase = void 0;
class LoadZoneByIdUsecase {
    constructor(zoneRepository) {
        this.zoneRepository = zoneRepository;
    }
    async execute(params) {
        return await this.zoneRepository.findById(params);
    }
}
exports.LoadZoneByIdUsecase = LoadZoneByIdUsecase;
//# sourceMappingURL=loadZoneById.usecase.js.map