"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadOrderByIdUseCase = void 0;
class LoadOrderByIdUseCase {
    constructor(orderRepository) {
        this.orderRepository = orderRepository;
    }
    async execute(params) {
        return await this.orderRepository.findById(params);
    }
}
exports.LoadOrderByIdUseCase = LoadOrderByIdUseCase;
//# sourceMappingURL=loadOrderById.usecase.js.map