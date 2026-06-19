"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadCurrencyByIdUsecase = void 0;
class LoadCurrencyByIdUsecase {
    constructor(currencyRepository) {
        this.currencyRepository = currencyRepository;
    }
    async execute(_id) {
        return await this.currencyRepository.findById(_id);
    }
}
exports.LoadCurrencyByIdUsecase = LoadCurrencyByIdUsecase;
//# sourceMappingURL=loadCurrencyById.usecase.js.map