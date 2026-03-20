"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteZoneAction = void 0;
const zone_entity_1 = require("@infrastructure/entities/zone.entity");
class DeleteZoneAction {
    constructor(session) {
        this.session = session;
    }
    async execute(_id) {
        try {
            await this.session.manager.softDelete(zone_entity_1.ZoneEntity, _id);
        }
        catch (error) {
            console.error('ERROR DeleteZoneAction', error?.message);
            throw error instanceof Error ? error : new Error(error?.message);
        }
    }
}
exports.DeleteZoneAction = DeleteZoneAction;
//# sourceMappingURL=deleteZone.action.js.map