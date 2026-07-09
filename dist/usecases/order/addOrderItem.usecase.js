"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddOrderItemUseCase = void 0;
class AddOrderItemUseCase {
    constructor(orderRepository) {
        this.orderRepository = orderRepository;
    }
    async execute(params) {
        return await this.orderRepository.addItem(params);
    }
}
exports.AddOrderItemUseCase = AddOrderItemUseCase;
//# sourceMappingURL=addOrderItem.usecase.js.map