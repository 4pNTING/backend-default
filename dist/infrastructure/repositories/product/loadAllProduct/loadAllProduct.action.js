"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadAllProductAction = void 0;
const product_entity_1 = require("@infrastructure/entities/product.entity");
class LoadAllProductAction {
    constructor(session) {
        this.session = session;
    }
    async execute(query) {
        try {
            const qb = this.session.manager.createQueryBuilder(product_entity_1.ProductEntity, 'product')
                .leftJoinAndSelect('product.category', 'category')
                .leftJoinAndSelect('product.inventoryLevels', 'inventoryLevels');
            if (query.search?.q) {
                const keyword = `%${query.search.q}%`;
                qb.andWhere(`(product.sku LIKE :keyword OR product.name LIKE :keyword OR product.description LIKE :keyword)`, { keyword });
            }
            if (query.isActive !== undefined) {
                qb.andWhere('product.isActive = :isActive', { isActive: query.isActive });
            }
            const page = query.paginate?.page || 1;
            const limit = query.paginate?.limit || 10;
            qb.skip((page - 1) * limit).take(limit);
            if (query.sort) {
                qb.orderBy('product.id', query.sort > 0 ? 'ASC' : 'DESC');
            }
            else {
                qb.orderBy('product.id', 'DESC');
            }
            const [entities, total] = await qb.getManyAndCount();
            return { items: entities, total };
        }
        catch (error) {
            console.error('ERROR LoadAllProductAction', error?.message);
            throw error instanceof Error ? error : new Error(error?.message);
        }
    }
}
exports.LoadAllProductAction = LoadAllProductAction;
//# sourceMappingURL=loadAllProduct.action.js.map