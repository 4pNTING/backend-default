"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateInventoryLevelAction = void 0;
const inventory_level_entity_1 = require("@infrastructure/entities/inventory-level.entity");
class UpdateInventoryLevelAction {
    constructor(session) {
        this.session = session;
    }
    async execute(params) {
        try {
            await this.session.manager.update(inventory_level_entity_1.InventoryLevelEntity, { id: params.id }, { quantity: params.quantity, updatedAt: new Date() });
        }
        catch (error) {
            console.error('ERROR UpdateInventoryLevelAction.execute', error?.message);
            throw error instanceof Error ? error : new Error(error?.message);
        }
    }
}
exports.UpdateInventoryLevelAction = UpdateInventoryLevelAction;
//# sourceMappingURL=updateInventoryLevel.action.js.map