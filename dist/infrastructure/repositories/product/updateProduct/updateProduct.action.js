"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateProductAction = void 0;
const product_entity_1 = require("@infrastructure/entities/product.entity");
class UpdateProductAction {
    constructor(session) {
        this.session = session;
    }
    async execute(params) {
        try {
            const { id, ...updateData } = params;
            const updatePayload = { ...updateData, updatedAt: new Date() };
            await this.session.manager.update(product_entity_1.ProductEntity, { id: params.id }, updatePayload);
        }
        catch (error) {
            console.error('ERROR UpdateProductAction.execute', error?.message);
            throw error instanceof Error ? error : new Error(error?.message);
        }
    }
}
exports.UpdateProductAction = UpdateProductAction;
//# sourceMappingURL=updateProduct.action.js.map