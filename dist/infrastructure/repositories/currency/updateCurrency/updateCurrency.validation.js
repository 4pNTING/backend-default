"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCurrencyValidation = void 0;
const typeorm_1 = require("typeorm");
const currency_model_1 = require("../../../../domain/models/currency.model");
class UpdateCurrencyValidation extends currency_model_1.UpdateCurrencyRequest {
    constructor(currencyRepository) {
        super();
        this.currencyRepository = currencyRepository;
    }
    async execute(params) {
        try {
            this._id = params._id;
            this.code = params.code;
            this.name = params.name;
            this.isActive = params.isActive;
            await this.validateParams();
        }
        catch (error) {
            throw error instanceof Error ? error : new Error(String(error));
        }
    }
    async validateParams() {
        try {
            if (!this._id) {
                throw new Error('Currency ID is required');
            }
            const exist = await this.currencyRepository.findOne({ where: { _id: this._id } });
            if (!exist) {
                throw new Error(`Currency ID ${this._id} not found`);
            }
            if (this.code) {
                const duplicate = await this.currencyRepository.findOne({
                    where: {
                        code: this.code,
                        _id: (0, typeorm_1.Not)(this._id)
                    }
                });
                if (duplicate) {
                    throw new Error('Currency code already exists.');
                }
            }
        }
        catch (error) {
            throw error instanceof Error ? error : new Error(error?.message);
        }
    }
}
exports.UpdateCurrencyValidation = UpdateCurrencyValidation;
//# sourceMappingURL=updateCurrency.validation.js.map