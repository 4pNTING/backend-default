"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCurrencyValidation = void 0;
const currency_model_1 = require("../../../../domain/models/currency.model");
class CreateCurrencyValidation extends currency_model_1.CreateCurrencyRequest {
    constructor(currencyRepository) {
        super();
        this.currencyRepository = currencyRepository;
    }
    async execute(params) {
        try {
            await this.buildParams(params);
            await this.validateParams();
        }
        catch (error) {
            throw error instanceof Error ? error : new Error(String(error));
        }
    }
    async buildParams(params) {
        try {
            this.code = params.code;
            this.name = params.name;
            this.isActive = params.isActive;
        }
        catch (error) {
            throw new Error(error?.message || 'Unknown error');
        }
    }
    async validateParams() {
        try {
            if (!this.code || this.code.trim() === '') {
                throw new Error('Currency code is required');
            }
            if (!this.name || this.name.trim() === '') {
                throw new Error('Currency name is required');
            }
            const exist = await this.currencyRepository.findOne({
                where: { code: this.code }
            });
            if (exist) {
                throw new Error('Currency code already exists.');
            }
        }
        catch (error) {
            throw error instanceof Error ? error : new Error(error?.message);
        }
    }
}
exports.CreateCurrencyValidation = CreateCurrencyValidation;
//# sourceMappingURL=createCurrency.validation.js.map