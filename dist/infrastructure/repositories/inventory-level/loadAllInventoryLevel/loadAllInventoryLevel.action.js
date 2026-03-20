"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadAllInventoryLevelAction = void 0;
const inventory_level_entity_1 = require("@infrastructure/entities/inventory-level.entity");
class LoadAllInventoryLevelAction {
    constructor(session) {
        this.session = session;
    }
    async execute(query) {
        try {
            const qb = this.session.manager.createQueryBuilder(inventory_level_entity_1.InventoryLevelEntity, 'level');
            if (query.productId !== undefined) {
                qb.andWhere('level.productId = :productId', { productId: query.productId });
            }
            if (query.zoneId !== undefined) {
                qb.andWhere('level.zoneId = :zoneId', { zoneId: query.zoneId });
            }
            if (query.sort) {
                qb.orderBy('level.id', query.sort > 0 ? 'ASC' : 'DESC');
            }
            else {
                qb.orderBy('level.id', 'DESC');
            }
            const page = query.paginate?.page || 1;
            const limit = query.paginate?.limit || 10;
            qb.skip((page - 1) * limit).take(limit);
            const [entities, total] = await qb.getManyAndCount();
            return { items: entities, total };
        }
        catch (error) {
            console.error('ERROR LoadAllInventoryLevelAction', error?.message);
            throw error instanceof Error ? error : new Error(error?.message);
        }
    }
}
exports.LoadAllInventoryLevelAction = LoadAllInventoryLevelAction;
//# sourceMappingURL=loadAllInventoryLevel.action.js.map