"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransferTableUseCase = void 0;
class TransferTableUseCase {
    constructor(orderRepository) {
        this.orderRepository = orderRepository;
    }
    async execute(params) {
        return await this.orderRepository.transferTable(params);
    }
}
exports.TransferTableUseCase = TransferTableUseCase;
//# sourceMappingURL=transferTable.usecase.js.map