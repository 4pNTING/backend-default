"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCurrencyUsecase = void 0;
class CreateCurrencyUsecase {
    constructor(currencyRepository) {
        this.currencyRepository = currencyRepository;
    }
    async execute(params) {
        return await this.currencyRepository.create(params);
    }
}
exports.CreateCurrencyUsecase = CreateCurrencyUsecase;
//# sourceMappingURL=createCurrency.usecase.js.map