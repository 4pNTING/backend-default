"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadCurrencyByIdAction = void 0;
const currency_entity_1 = require("../../../entities/currency.entity");
class LoadCurrencyByIdAction {
    constructor(session) {
        this.session = session;
    }
    async execute(_id) {
        try {
            const entity = await this.session.manager.findOne(currency_entity_1.CurrencyEntity, {
                where: { _id }
            });
            return entity;
        }
        catch (error) {
            throw error instanceof Error ? error : new Error(error?.message);
        }
    }
}
exports.LoadCurrencyByIdAction = LoadCurrencyByIdAction;
//# sourceMappingURL=loadCurrencyById.action.js.map