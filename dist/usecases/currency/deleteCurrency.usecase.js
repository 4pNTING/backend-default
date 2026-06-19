"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteCurrencyUsecase = void 0;
class DeleteCurrencyUsecase {
    constructor(currencyRepository) {
        this.currencyRepository = currencyRepository;
    }
    async execute(_id) {
        return await this.currencyRepository.delete(_id);
    }
}
exports.DeleteCurrencyUsecase = DeleteCurrencyUsecase;
//# sourceMappingURL=deleteCurrency.usecase.js.map