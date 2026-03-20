"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteProductAction = void 0;
const product_entity_1 = require("@infrastructure/entities/product.entity");
class DeleteProductAction {
    constructor(session) {
        this.session = session;
    }
    async execute(params) {
        try {
            await this.session.manager.softDelete(product_entity_1.ProductEntity, params.id);
        }
        catch (error) {
            console.error('ERROR DeleteProductAction.execute', error?.message);
            throw error instanceof Error ? error : new Error(error?.message);
        }
    }
}
exports.DeleteProductAction = DeleteProductAction;
//# sourceMappingURL=deleteProduct.action.js.map