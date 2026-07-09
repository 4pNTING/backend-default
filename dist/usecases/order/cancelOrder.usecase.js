"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CancelOrderUseCase = void 0;
class CancelOrderUseCase {
    constructor(orderRepository) {
        this.orderRepository = orderRepository;
    }
    async execute(params) {
        return await this.orderRepository.cancel(params);
    }
}
exports.CancelOrderUseCase = CancelOrderUseCase;
//# sourceMappingURL=cancelOrder.usecase.js.map