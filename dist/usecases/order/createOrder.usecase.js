"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOrderUseCase = void 0;
class CreateOrderUseCase {
    constructor(orderRepository) {
        this.orderRepository = orderRepository;
    }
    async execute(params) {
        return await this.orderRepository.create(params);
    }
}
exports.CreateOrderUseCase = CreateOrderUseCase;
//# sourceMappingURL=createOrder.usecase.js.map