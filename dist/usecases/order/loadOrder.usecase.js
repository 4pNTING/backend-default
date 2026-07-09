"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadOrderUseCase = void 0;
class LoadOrderUseCase {
    constructor(orderRepository) {
        this.orderRepository = orderRepository;
    }
    async execute(query) {
        return await this.orderRepository.findAll(query);
    }
}
exports.LoadOrderUseCase = LoadOrderUseCase;
//# sourceMappingURL=loadOrder.usecase.js.map