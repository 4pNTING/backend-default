"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var PaymentUsecasesProxyModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentUsecasesProxyModule = void 0;
const common_1 = require("@nestjs/common");
const payment_repository_1 = require("../repositories/payment/payment.repository");
const repositories_module_1 = require("../repositories/repositories.module");
const processPayment_usecase_1 = require("../../usecases/payment/processPayment.usecase");
const loadPaymentByOrder_usecase_1 = require("../../usecases/payment/loadPaymentByOrder.usecase");
let PaymentUsecasesProxyModule = PaymentUsecasesProxyModule_1 = class PaymentUsecasesProxyModule {
    static register() {
        return {
            module: PaymentUsecasesProxyModule_1,
            providers: [
                {
                    inject: [payment_repository_1.DatabasePaymentRepository],
                    provide: PaymentUsecasesProxyModule_1.PROCESS_PAYMENT_PROXY,
                    useFactory: (repo) => new processPayment_usecase_1.ProcessPaymentUseCase(repo),
                },
                {
                    inject: [payment_repository_1.DatabasePaymentRepository],
                    provide: PaymentUsecasesProxyModule_1.LOAD_PAYMENT_BY_ORDER_PROXY,
                    useFactory: (repo) => new loadPaymentByOrder_usecase_1.LoadPaymentByOrderUseCase(repo),
                },
            ],
            exports: [
                PaymentUsecasesProxyModule_1.PROCESS_PAYMENT_PROXY,
                PaymentUsecasesProxyModule_1.LOAD_PAYMENT_BY_ORDER_PROXY,
            ],
        };
    }
};
exports.PaymentUsecasesProxyModule = PaymentUsecasesProxyModule;
PaymentUsecasesProxyModule.PROCESS_PAYMENT_PROXY = 'ProcessPaymentProxy';
PaymentUsecasesProxyModule.LOAD_PAYMENT_BY_ORDER_PROXY = 'LoadPaymentByOrderProxy';
exports.PaymentUsecasesProxyModule = PaymentUsecasesProxyModule = PaymentUsecasesProxyModule_1 = __decorate([
    (0, common_1.Module)({
        imports: [repositories_module_1.RepositoriesModule],
    })
], PaymentUsecasesProxyModule);
//# sourceMappingURL=payment-usecases-proxy.module.js.map