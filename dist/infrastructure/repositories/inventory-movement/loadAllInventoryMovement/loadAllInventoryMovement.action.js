"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadAllInventoryMovementAction = void 0;
const inventory_movement_entity_1 = require("@infrastructure/entities/inventory-movement.entity");
class LoadAllInventoryMovementAction {
    constructor(session) {
        this.session = session;
    }
    async execute(query) {
        try {
            const qb = this.session.manager.createQueryBuilder(inventory_movement_entity_1.InventoryMovementEntity, 'movement');
            const page = query.paginate?.page || 1;
            const limit = query.paginate?.limit || 10;
            qb.skip((page - 1) * limit).take(limit);
            if (query.sort) {
                qb.orderBy('movement.id', query.sort > 0 ? 'ASC' : 'DESC');
            }
            else {
                qb.orderBy('movement.createdAt', 'DESC');
            }
            const [entities, total] = await qb.getManyAndCount();
            return { items: entities, total };
        }
        catch (error) {
            console.error('ERROR LoadAllInventoryMovementAction', error?.message);
            throw error instanceof Error ? error : new Error(error?.message);
        }
    }
}
exports.LoadAllInventoryMovementAction = LoadAllInventoryMovementAction;
//# sourceMappingURL=loadAllInventoryMovement.action.js.map