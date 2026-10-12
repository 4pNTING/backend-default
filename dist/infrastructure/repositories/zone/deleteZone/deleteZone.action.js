"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteZoneAction = void 0;
const zone_entity_1 = require("../../../entities/zone.entity.js");
const enum_1 = require("../../../../domain/enums/enum.js");
class DeleteZoneAction {
    constructor(session) {
        this.session = session;
    }
    async execute(_id) {
        try {
            await this.session.manager.update(zone_entity_1.ZoneEntity, { _id }, {
                isActive: enum_1.ActiveStatus.inactive,
            });
        }
        catch (error) {
            throw error instanceof Error ? error : new Error(error?.message);
        }
    }
}
exports.DeleteZoneAction = DeleteZoneAction;
//# sourceMappingURL=deleteZone.action.js.map