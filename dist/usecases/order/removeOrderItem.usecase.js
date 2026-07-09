"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemoveOrderItemUseCase = void 0;
class RemoveOrderItemUseCase {
    constructor(orderRepository) {
        this.orderRepository = orderRepository;
    }
    async execute(params) {
        return await this.orderRepository.removeItem(params);
    }
}
exports.RemoveOrderItemUseCase = RemoveOrderItemUseCase;
//# sourceMappingURL=removeOrderItem.usecase.js.map