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
exports.CurrencyController = void 0;
const common_1 = require("@nestjs/common");
const currency_model_1 = require("../../../domain/models/currency.model");
const currency_usecases_proxy_module_1 = require("../../usecases-proxy/currency-usecases-proxy.module");
const createCurrency_usecase_1 = require("../../../usecases/currency/createCurrency.usecase");
const updateCurrency_usecase_1 = require("../../../usecases/currency/updateCurrency.usecase");
const deleteCurrency_usecase_1 = require("../../../usecases/currency/deleteCurrency.usecase");
const loadAllCurrency_usecase_1 = require("../../../usecases/currency/loadAllCurrency.usecase");
const loadCurrencyById_usecase_1 = require("../../../usecases/currency/loadCurrencyById.usecase");
let CurrencyController = class CurrencyController {
    constructor(createCurrencyUseCase, updateCurrencyUseCase, deleteCurrencyUseCase, loadAllCurrencyUseCase, loadCurrencyByIdUseCase) {
        this.createCurrencyUseCase = createCurrencyUseCase;
        this.updateCurrencyUseCase = updateCurrencyUseCase;
        this.deleteCurrencyUseCase = deleteCurrencyUseCase;
        this.loadAllCurrencyUseCase = loadAllCurrencyUseCase;
        this.loadCurrencyByIdUseCase = loadCurrencyByIdUseCase;
    }
    async findAll() {
        const result = await this.loadAllCurrencyUseCase.execute({});
        return result.items;
    }
    async findOne(id) {
        return await this.loadCurrencyByIdUseCase.execute(id);
    }
    async create(body) {
        return await this.createCurrencyUseCase.execute(body);
    }
    async update(id, body) {
        return await this.updateCurrencyUseCase.execute(id, { _id: id, ...body });
    }
    async delete(id) {
        return await this.deleteCurrencyUseCase.execute(id);
    }
};
exports.CurrencyController = CurrencyController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CurrencyController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CurrencyController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [currency_model_1.CreateCurrencyRequest]),
    __metadata("design:returntype", Promise)
], CurrencyController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], CurrencyController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CurrencyController.prototype, "delete", null);
exports.CurrencyController = CurrencyController = __decorate([
    (0, common_1.Controller)('currency'),
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
], CurrencyController);
//# sourceMappingURL=currency.controller.js.map