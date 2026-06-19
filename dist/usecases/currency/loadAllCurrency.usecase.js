"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadAllCurrencyUsecase = void 0;
class LoadAllCurrencyUsecase {
    constructor(currencyRepository) {
        this.currencyRepository = currencyRepository;
    }
    async execute(query) {
        return await this.currencyRepository.findAll(query);
    }
}
exports.LoadAllCurrencyUsecase = LoadAllCurrencyUsecase;
//# sourceMappingURL=loadAllCurrency.usecase.js.map