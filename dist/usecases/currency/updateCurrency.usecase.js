"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCurrencyUsecase = void 0;
class UpdateCurrencyUsecase {
    constructor(currencyRepository) {
        this.currencyRepository = currencyRepository;
    }
    async execute(_id, params) {
        return await this.currencyRepository.update(_id, params);
    }
}
exports.UpdateCurrencyUsecase = UpdateCurrencyUsecase;
//# sourceMappingURL=updateCurrency.usecase.js.map