"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteCurrencyAction = void 0;
const currency_entity_1 = require("../../../entities/currency.entity");
class DeleteCurrencyAction {
    constructor(session) {
        this.session = session;
    }
    async execute(_id) {
        try {
            await this.session.manager.delete(currency_entity_1.CurrencyEntity, _id);
        }
        catch (error) {
            throw error instanceof Error ? error : new Error(error?.message);
        }
    }
}
exports.DeleteCurrencyAction = DeleteCurrencyAction;
//# sourceMappingURL=deleteCurrency.action.js.map