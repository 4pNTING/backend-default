"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestoreCategoryAction = void 0;
const category_entity_1 = require("@infrastructure/entities/category.entity");
class RestoreCategoryAction {
    constructor(session) {
        this.session = session;
    }
    async execute(id) {
        try {
            await this.session.manager.restore(category_entity_1.CategoryEntity, id);
            await this.session.manager.update(category_entity_1.CategoryEntity, id, { isActive: true });
        }
        catch (error) {
            console.error('ERROR RestoreCategoryAction', error?.message);
            throw error instanceof Error ? error : new Error(error?.message);
        }
    }
}
exports.RestoreCategoryAction = RestoreCategoryAction;
//# sourceMappingURL=restoreCategory.action.js.map