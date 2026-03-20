"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestoreProductAction = void 0;
const product_entity_1 = require("@infrastructure/entities/product.entity");
class RestoreProductAction {
    constructor(session) {
        this.session = session;
    }
    async execute(id) {
        try {
            await this.session.manager.restore(product_entity_1.ProductEntity, id);
        }
        catch (error) {
            console.error('ERROR RestoreProductAction.execute', error?.message);
            throw error instanceof Error ? error : new Error(error?.message);
        }
    }
}
exports.RestoreProductAction = RestoreProductAction;
//# sourceMappingURL=restoreProduct.action.js.map