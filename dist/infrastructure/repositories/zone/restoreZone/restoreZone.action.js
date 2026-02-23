"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestoreZoneAction = void 0;
const zone_entity_1 = require("@infrastructure/entities/zone.entity");
class RestoreZoneAction {
    constructor(session) {
        this.session = session;
    }
    async execute(id) {
        try {
            await this.session.manager.restore(zone_entity_1.ZoneEntity, id);
            await this.session.manager.update(zone_entity_1.ZoneEntity, id, { isActive: true });
        }
        catch (error) {
            console.error('ERROR RestoreZoneAction', error?.message);
            throw error instanceof Error ? error : new Error(error?.message);
        }
    }
}
exports.RestoreZoneAction = RestoreZoneAction;
//# sourceMappingURL=restoreZone.action.js.map