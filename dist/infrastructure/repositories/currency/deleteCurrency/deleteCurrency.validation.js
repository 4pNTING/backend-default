"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteCurrencyValidation = void 0;
class DeleteCurrencyValidation {
    constructor(currencyRepository) {
        this.currencyRepository = currencyRepository;
    }
    async execute(_id) {
        try {
            if (!_id) {
                throw new Error('Currency ID is required');
            }
            const exist = await this.currencyRepository.findOne({ where: { _id } });
            if (!exist) {
                throw new Error(`Currency ID ${_id} not found`);
            }
        }
        catch (error) {
            throw error instanceof Error ? error : new Error(String(error));
        }
    }
}
exports.DeleteCurrencyValidation = DeleteCurrencyValidation;
//# sourceMappingURL=deleteCurrency.validation.js.map