"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCurrencyAction = void 0;
const currency_entity_1 = require("../../../entities/currency.entity");
class UpdateCurrencyAction {
    constructor(session) {
        this.session = session;
    }
    async execute(_id, params) {
        try {
            const updateData = {
                updatedAt: new Date()
            };
            if (params.code !== undefined)
                updateData.code = params.code;
            if (params.name !== undefined)
                updateData.name = params.name;
            if (params.isActive !== undefined)
                updateData.isActive = params.isActive;
            await this.session.manager.update(currency_entity_1.CurrencyEntity, _id, updateData);
            const updated = await this.session.manager.findOne(currency_entity_1.CurrencyEntity, {
                where: { _id }
            });
            if (!updated) {
                throw new Error(`Currency ID ${_id} not found after update`);
            }
            return updated;
        }
        catch (error) {
            throw error instanceof Error ? error : new Error(error?.message);
        }
    }
}
exports.UpdateCurrencyAction = UpdateCurrencyAction;
//# sourceMappingURL=updateCurrency.action.js.map