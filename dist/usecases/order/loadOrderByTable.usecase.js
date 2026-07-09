"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadOrderByTableUseCase = void 0;
class LoadOrderByTableUseCase {
    constructor(orderRepository) {
        this.orderRepository = orderRepository;
    }
    async execute(params) {
        return await this.orderRepository.findByTable(params);
    }
}
exports.LoadOrderByTableUseCase = LoadOrderByTableUseCase;
//# sourceMappingURL=loadOrderByTable.usecase.js.map