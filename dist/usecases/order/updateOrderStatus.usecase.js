"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOrderStatusUseCase = void 0;
class UpdateOrderStatusUseCase {
    constructor(orderRepository) {
        this.orderRepository = orderRepository;
    }
    async execute(params) {
        return await this.orderRepository.updateStatus(params);
    }
}
exports.UpdateOrderStatusUseCase = UpdateOrderStatusUseCase;
//# sourceMappingURL=updateOrderStatus.usecase.js.map