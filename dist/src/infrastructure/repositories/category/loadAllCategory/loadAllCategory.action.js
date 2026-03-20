"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadAllCategoryAction = void 0;
const category_entity_1 = require("@infrastructure/entities/category.entity");
class LoadAllCategoryAction {
    constructor(session) {
        this.session = session;
    }
    async execute(query) {
        try {
            const qb = this.session.manager.createQueryBuilder(category_entity_1.CategoryEntity, 'category');
            if (query.search?.q) {
                const keyword = `%${query.search.q}%`;
                qb.andWhere(`(category.name LIKE :keyword OR category.description LIKE :keyword)`, { keyword });
            }
            if (query.isActive !== undefined) {
                qb.andWhere('category.isActive = :isActive', { isActive: query.isActive });
            }
            const page = query.paginate?.page;
            const limit = query.paginate?.limit;
            qb.skip((page - 1) * limit).take(limit);
            if (query.sort) {
                qb.orderBy('category._id', query.sort > 0 ? 'ASC' : 'DESC');
            }
            else {
                qb.orderBy('category._id', 'DESC');
            }
            const [entities, total] = await qb.getManyAndCount();
            return { items: entities, total };
        }
        catch (error) {
            console.error('ERROR LoadAllCategoryAction', error?.message);
            throw error instanceof Error ? error : new Error(error?.message);
        }
    }
}
exports.LoadAllCategoryAction = LoadAllCategoryAction;
//# sourceMappingURL=loadAllCategory.action.js.map