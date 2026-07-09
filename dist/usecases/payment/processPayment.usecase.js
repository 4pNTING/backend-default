"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcessPaymentUseCase = void 0;
class ProcessPaymentUseCase {
    constructor(paymentRepository) {
        this.paymentRepository = paymentRepository;
    }
    async execute(params) {
        return await this.paymentRepository.processPayment(params);
    }
}
exports.ProcessPaymentUseCase = ProcessPaymentUseCase;
//# sourceMappingURL=processPayment.usecase.js.map