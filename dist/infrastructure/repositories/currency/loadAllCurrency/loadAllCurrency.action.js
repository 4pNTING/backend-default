"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadAllCurrencyAction = void 0;
const currency_entity_1 = require("../../../entities/currency.entity");
class LoadAllCurrencyAction {
    constructor(session) {
        this.session = session;
    }
    async execute(query) {
        try {
            const qb = this.session.manager.createQueryBuilder(currency_entity_1.CurrencyEntity, 'currency');
            if (query.search?.q) {
                const keyword = `%${query.search.q}%`;
                qb.andWhere(`(currency.code LIKE :keyword OR currency.name LIKE :keyword)`, { keyword });
            }
            if (query.isActive !== undefined) {
                qb.andWhere('currency.isActive = :isActive', { isActive: query.isActive });
            }
            const page = query.paginate?.page;
            const limit = query.paginate?.limit;
            if (page && limit) {
                qb.skip((page - 1) * limit).take(limit);
            }
            if (query.sortField) {
                const direction = query.sortDirection === 'ASC' ? 'ASC' : 'DESC';
                qb.orderBy(`currency.${query.sortField}`, direction);
            }
            else if (query.sort) {
                qb.orderBy('currency._id', query.sort > 0 ? 'ASC' : 'DESC');
            }
            else {
                qb.orderBy('currency._id', 'DESC');
            }
            const entities = await qb.getMany();
            return { items: entities };
        }
        catch (error) {
            throw error instanceof Error ? error : new Error(error?.message);
        }
    }
}
exports.LoadAllCurrencyAction = LoadAllCurrencyAction;
//# sourceMappingURL=loadAllCurrency.action.js.map