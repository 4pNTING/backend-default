"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrencyResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const common_1 = require("@nestjs/common");
const currency_usecases_proxy_module_1 = require("../../usecases-proxy/currency-usecases-proxy.module");
const createCurrency_usecase_1 = require("../../../usecases/currency/createCurrency.usecase");
const updateCurrency_usecase_1 = require("../../../usecases/currency/updateCurrency.usecase");
const deleteCurrency_usecase_1 = require("../../../usecases/currency/deleteCurrency.usecase");
const loadAllCurrency_usecase_1 = require("../../../usecases/currency/loadAllCurrency.usecase");
const loadCurrencyById_usecase_1 = require("../../../usecases/currency/loadCurrencyById.usecase");
const currency_model_1 = require("./currency.model");
let CurrencyResolver = class CurrencyResolver {
    constructor(createCurrencyUsecase, updateCurrencyUsecase, deleteCurrencyUsecase, loadAllCurrencyUsecase, loadCurrencyByIdUsecase) {
        this.createCurrencyUsecase = createCurrencyUsecase;
        this.updateCurrencyUsecase = updateCurrencyUsecase;
        this.deleteCurrencyUsecase = deleteCurrencyUsecase;
        this.loadAllCurrencyUsecase = loadAllCurrencyUsecase;
        this.loadCurrencyByIdUsecase = loadCurrencyByIdUsecase;
    }
    async loadCurrencies(input) {
        const query = {};
        if (input) {
            if (input.page || input.limit) {
                query.paginate = { page: input.page, limit: input.limit };
            }
            if (input.keyword) {
                query.search = { q: input.keyword };
            }
            if (input.isActive) {
                query.isActive = input.isActive;
            }
            if (input.sortField) {
                query.sortField = input.sortField;
            }
            if (input.sortDirection) {
                query.sortDirection = input.sortDirection;
            }
        }
        const result = await this.loadAllCurrencyUsecase.execute(query);
        return {
            currency: result.items,
        };
    }
    async loadCurrencyById(input) {
        const result = await this.loadCurrencyByIdUsecase.execute(input._id);
        if (!result)
            return { currency: null };
        return { currency: result };
    }
    async createCurrency(input) {
        const result = await this.createCurrencyUsecase.execute(input);
        return { currency: result };
    }
    async updateCurrency(input) {
        const result = await this.updateCurrencyUsecase.execute(input._id, input);
        return { currency: result };
    }
    async deleteCurrency(input) {
        await this.deleteCurrencyUsecase.execute(input._id);
        return { _id: input._id };
    }
};
exports.CurrencyResolver = CurrencyResolver;
__decorate([
    (0, graphql_1.Query)(() => currency_model_1.LoadCurrencyResponse, { name: 'loadCurrencies' }),
    __param(0, (0, graphql_1.Args)('input', { nullable: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [currency_model_1.LoadCurrencyDto]),
    __metadata("design:returntype", Promise)
], CurrencyResolver.prototype, "loadCurrencies", null);
__decorate([
    (0, graphql_1.Query)(() => currency_model_1.LoadCurrencyByIdResponse, { name: 'loadCurrencyById' }),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [currency_model_1.LoadCurrencyByIdDto]),
    __metadata("design:returntype", Promise)
], CurrencyResolver.prototype, "loadCurrencyById", null);
__decorate([
    (0, graphql_1.Mutation)(() => currency_model_1.CreateCurrencyResponse),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [currency_model_1.CreateCurrencyDto]),
    __metadata("design:returntype", Promise)
], CurrencyResolver.prototype, "createCurrency", null);
__decorate([
    (0, graphql_1.Mutation)(() => currency_model_1.UpdateCurrencyResponse),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [currency_model_1.UpdateCurrencyDto]),
    __metadata("design:returntype", Promise)
], CurrencyResolver.prototype, "updateCurrency", null);
__decorate([
    (0, graphql_1.Mutation)(() => currency_model_1.DeleteCurrencyResponse),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [currency_model_1.DeleteCurrencyDto]),
    __metadata("design:returntype", Promise)
], CurrencyResolver.prototype, "deleteCurrency", null);
exports.CurrencyResolver = CurrencyResolver = __decorate([
    (0, graphql_1.Resolver)(() => currency_model_1.Currency),
    __param(0, (0, common_1.Inject)(currency_usecases_proxy_module_1.CurrencyUsecasesProxyModule.CREATE_CURRENCY_PROXY)),
    __param(1, (0, common_1.Inject)(currency_usecases_proxy_module_1.CurrencyUsecasesProxyModule.UPDATE_CURRENCY_PROXY)),
    __param(2, (0, common_1.Inject)(currency_usecases_proxy_module_1.CurrencyUsecasesProxyModule.DELETE_CURRENCY_PROXY)),
    __param(3, (0, common_1.Inject)(currency_usecases_proxy_module_1.CurrencyUsecasesProxyModule.LOAD_ALL_CURRENCY_PROXY)),
    __param(4, (0, common_1.Inject)(currency_usecases_proxy_module_1.CurrencyUsecasesProxyModule.LOAD_BY_ID_CURRENCY_PROXY)),
    __metadata("design:paramtypes", [createCurrency_usecase_1.CreateCurrencyUsecase,
        updateCurrency_usecase_1.UpdateCurrencyUsecase,
        deleteCurrency_usecase_1.DeleteCurrencyUsecase,
        loadAllCurrency_usecase_1.LoadAllCurrencyUsecase,
        loadCurrencyById_usecase_1.LoadCurrencyByIdUsecase])
], CurrencyResolver);
//# sourceMappingURL=currency.resolver.js.map