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
exports.PaymentResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const common_1 = require("@nestjs/common");
const jwt_auth_guard_1 = require("../../common/jwt-auth.guard");
const payment_model_1 = require("./payment.model");
const payment_usecases_proxy_module_1 = require("../../usecases-proxy/payment-usecases-proxy.module");
const processPayment_usecase_1 = require("../../../usecases/payment/processPayment.usecase");
const loadPaymentByOrder_usecase_1 = require("../../../usecases/payment/loadPaymentByOrder.usecase");
let PaymentResolver = class PaymentResolver {
    constructor(processPaymentUseCase, loadPaymentByOrderUseCase) {
        this.processPaymentUseCase = processPaymentUseCase;
        this.loadPaymentByOrderUseCase = loadPaymentByOrderUseCase;
    }
    async loadPaymentByOrder(input) {
        const result = await this.loadPaymentByOrderUseCase.execute({ orderId: input.orderId });
        return { payment: result.items };
    }
    async processPayment(input) {
        const result = await this.processPaymentUseCase.execute(input);
        return { payment: result };
    }
};
exports.PaymentResolver = PaymentResolver;
__decorate([
    (0, graphql_1.Query)(() => payment_model_1.LoadPaymentResponse, { name: 'loadPaymentByOrder' }),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [payment_model_1.LoadPaymentByOrderDto]),
    __metadata("design:returntype", Promise)
], PaymentResolver.prototype, "loadPaymentByOrder", null);
__decorate([
    (0, graphql_1.Mutation)(() => payment_model_1.PaymentResponse),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [payment_model_1.ProcessPaymentDto]),
    __metadata("design:returntype", Promise)
], PaymentResolver.prototype, "processPayment", null);
exports.PaymentResolver = PaymentResolver = __decorate([
    (0, graphql_1.Resolver)(() => payment_model_1.Payment),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Inject)(payment_usecases_proxy_module_1.PaymentUsecasesProxyModule.PROCESS_PAYMENT_PROXY)),
    __param(1, (0, common_1.Inject)(payment_usecases_proxy_module_1.PaymentUsecasesProxyModule.LOAD_PAYMENT_BY_ORDER_PROXY)),
    __metadata("design:paramtypes", [processPayment_usecase_1.ProcessPaymentUseCase,
        loadPaymentByOrder_usecase_1.LoadPaymentByOrderUseCase])
], PaymentResolver);
//# sourceMappingURL=payment.resolver.js.map