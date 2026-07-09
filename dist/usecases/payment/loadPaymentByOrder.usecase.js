"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadPaymentByOrderUseCase = void 0;
class LoadPaymentByOrderUseCase {
    constructor(paymentRepository) {
        this.paymentRepository = paymentRepository;
    }
    async execute(params) {
        return await this.paymentRepository.findByOrder(params);
    }
}
exports.LoadPaymentByOrderUseCase = LoadPaymentByOrderUseCase;
//# sourceMappingURL=loadPaymentByOrder.usecase.js.map