"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadProductByIdAction = void 0;
const product_entity_1 = require("@infrastructure/entities/product.entity");
class LoadProductByIdAction {
    constructor(session) {
        this.session = session;
    }
    async execute(params) {
        try {
            const entity = await this.session.manager.findOne(product_entity_1.ProductEntity, {
                where: { id: params.id },
                relations: ['category', 'inventoryLevels']
            });
            if (!entity)
                return null;
            return {
                id: entity.id,
                sku: entity.sku,
                name: entity.name,
                description: entity.description,
                price: entity.price,
                cost: entity.cost,
                categoryId: entity.categoryId,
                lowStockThreshold: entity.lowStockThreshold,
                createdAt: entity.createdAt,
                updatedAt: entity.updatedAt,
                isActive: entity.isActive
            };
        }
        catch (error) {
            console.error('ERROR LoadProductByIdAction.execute', error?.message);
            throw error instanceof Error ? error : new Error(error?.message);
        }
    }
}
exports.LoadProductByIdAction = LoadProductByIdAction;
//# sourceMappingURL=loadProductById.action.js.map