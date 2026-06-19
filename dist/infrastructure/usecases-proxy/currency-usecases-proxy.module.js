"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var CurrencyUsecasesProxyModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrencyUsecasesProxyModule = void 0;
const common_1 = require("@nestjs/common");
const currency_repository_1 = require("../repositories/currency/currency.repository");
const repositories_module_1 = require("../repositories/repositories.module");
const createCurrency_usecase_1 = require("../../usecases/currency/createCurrency.usecase");
const updateCurrency_usecase_1 = require("../../usecases/currency/updateCurrency.usecase");
const deleteCurrency_usecase_1 = require("../../usecases/currency/deleteCurrency.usecase");
const loadAllCurrency_usecase_1 = require("../../usecases/currency/loadAllCurrency.usecase");
const loadCurrencyById_usecase_1 = require("../../usecases/currency/loadCurrencyById.usecase");
let CurrencyUsecasesProxyModule = CurrencyUsecasesProxyModule_1 = class CurrencyUsecasesProxyModule {
    static register() {
        return {
            module: CurrencyUsecasesProxyModule_1,
            providers: [
                {
                    inject: [currency_repository_1.DatabaseCurrencyRepository],
                    provide: CurrencyUsecasesProxyModule_1.CREATE_CURRENCY_PROXY,
                    useFactory: (repo) => new createCurrency_usecase_1.CreateCurrencyUsecase(repo),
                },
                {
                    inject: [currency_repository_1.DatabaseCurrencyRepository],
                    provide: CurrencyUsecasesProxyModule_1.UPDATE_CURRENCY_PROXY,
                    useFactory: (repo) => new updateCurrency_usecase_1.UpdateCurrencyUsecase(repo),
                },
                {
                    inject: [currency_repository_1.DatabaseCurrencyRepository],
                    provide: CurrencyUsecasesProxyModule_1.DELETE_CURRENCY_PROXY,
                    useFactory: (repo) => new deleteCurrency_usecase_1.DeleteCurrencyUsecase(repo),
                },
                {
                    inject: [currency_repository_1.DatabaseCurrencyRepository],
                    provide: CurrencyUsecasesProxyModule_1.LOAD_ALL_CURRENCY_PROXY,
                    useFactory: (repo) => new loadAllCurrency_usecase_1.LoadAllCurrencyUsecase(repo),
                },
                {
                    inject: [currency_repository_1.DatabaseCurrencyRepository],
                    provide: CurrencyUsecasesProxyModule_1.LOAD_BY_ID_CURRENCY_PROXY,
                    useFactory: (repo) => new loadCurrencyById_usecase_1.LoadCurrencyByIdUsecase(repo),
                },
            ],
            exports: [
                CurrencyUsecasesProxyModule_1.CREATE_CURRENCY_PROXY,
                CurrencyUsecasesProxyModule_1.UPDATE_CURRENCY_PROXY,
                CurrencyUsecasesProxyModule_1.DELETE_CURRENCY_PROXY,
                CurrencyUsecasesProxyModule_1.LOAD_ALL_CURRENCY_PROXY,
                CurrencyUsecasesProxyModule_1.LOAD_BY_ID_CURRENCY_PROXY,
            ],
        };
    }
};
exports.CurrencyUsecasesProxyModule = CurrencyUsecasesProxyModule;
CurrencyUsecasesProxyModule.CREATE_CURRENCY_PROXY = 'CreateCurrencyProxy';
CurrencyUsecasesProxyModule.UPDATE_CURRENCY_PROXY = 'UpdateCurrencyProxy';
CurrencyUsecasesProxyModule.DELETE_CURRENCY_PROXY = 'DeleteCurrencyProxy';
CurrencyUsecasesProxyModule.LOAD_ALL_CURRENCY_PROXY = 'LoadAllCurrencyProxy';
CurrencyUsecasesProxyModule.LOAD_BY_ID_CURRENCY_PROXY = 'LoadByIdCurrencyProxy';
exports.CurrencyUsecasesProxyModule = CurrencyUsecasesProxyModule = CurrencyUsecasesProxyModule_1 = __decorate([
    (0, common_1.Module)({
        imports: [repositories_module_1.RepositoriesModule],
    })
], CurrencyUsecasesProxyModule);
//# sourceMappingURL=currency-usecases-proxy.module.js.map