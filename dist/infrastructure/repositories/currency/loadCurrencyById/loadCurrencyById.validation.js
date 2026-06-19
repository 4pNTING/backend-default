"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadCurrencyByIdValidation = void 0;
class LoadCurrencyByIdValidation {
    async execute(_id) {
        try {
            if (!_id) {
                throw new Error('Currency ID is required');
            }
        }
        catch (error) {
            throw error instanceof Error ? error : new Error(String(error));
        }
    }
}
exports.LoadCurrencyByIdValidation = LoadCurrencyByIdValidation;
//# sourceMappingURL=loadCurrencyById.validation.js.map