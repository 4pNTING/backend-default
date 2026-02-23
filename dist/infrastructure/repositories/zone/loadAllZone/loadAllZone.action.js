"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadAllZoneAction = void 0;
const zone_entity_1 = require("@infrastructure/entities/zone.entity");
class LoadAllZoneAction {
    constructor(session) {
        this.session = session;
    }
    async execute(query) {
        try {
            const qb = this.session.manager.createQueryBuilder(zone_entity_1.ZoneEntity, 'zone');
            if (query.search?.q) {
                const keyword = `%${query.search.q}%`;
                qb.andWhere(`(zone.name LIKE :keyword OR zone.description LIKE :keyword)`, { keyword });
            }
            if (query.condition && query.condition.length > 0) {
                for (const cond of query.condition) {
                    if (cond.field === 'isActive' && cond.value) {
                        const isActive = cond.value === 'true';
                        qb.andWhere('zone.isActive = :isActive', { isActive });
                    }
                }
            }
            const page = query.paginate?.page || 1;
            const limit = query.paginate?.limit || 10;
            qb.skip((page - 1) * limit).take(limit);
            if (query.sort) {
                qb.orderBy('zone.id', query.sort > 0 ? 'ASC' : 'DESC');
            }
            else {
                qb.orderBy('zone.id', 'DESC');
            }
            const [entities, total] = await qb.getManyAndCount();
            return { items: entities, total };
        }
        catch (error) {
            console.error('ERROR LoadAllZoneAction', error?.message);
            throw error instanceof Error ? error : new Error(error?.message);
        }
    }
}
exports.LoadAllZoneAction = LoadAllZoneAction;
//# sourceMappingURL=loadAllZone.action.js.map