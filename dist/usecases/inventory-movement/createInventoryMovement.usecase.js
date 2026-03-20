"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateInventoryMovementUseCase = void 0;
const enum_1 = require("@domain/enums/enum");
class CreateInventoryMovementUseCase {
    constructor(inventoryMovementRepository, inventoryLevelRepository) {
        this.inventoryMovementRepository = inventoryMovementRepository;
        this.inventoryLevelRepository = inventoryLevelRepository;
    }
    async execute(params) {
        const currentLevel = await this.inventoryLevelRepository.findByProductAndZone({
            productId: params.productId,
            zoneId: params.zoneId,
        });
        let newQuantity = 0;
        if (currentLevel) {
            newQuantity = currentLevel.quantity;
        }
        switch (params.type) {
            case enum_1.InventoryMovementType.IN:
                newQuantity += params.quantity;
                break;
            case enum_1.InventoryMovementType.OUT:
            case enum_1.InventoryMovementType.TRANSFER:
                newQuantity -= params.quantity;
                break;
            case enum_1.InventoryMovementType.ADJUST:
                newQuantity = params.quantity;
                break;
        }
        if (newQuantity < 0) {
            throw new Error(`Insufficient stock. Cannot reduce below 0. Current: ${currentLevel?.quantity || 0}, Requested reduction: ${params.quantity}`);
        }
        if (currentLevel) {
            await this.inventoryLevelRepository.update({
                id: currentLevel.id,
                quantity: newQuantity,
            });
        }
        else {
            await this.inventoryLevelRepository.create({
                productId: params.productId,
                zoneId: params.zoneId,
                quantity: newQuantity,
            });
        }
        return await this.inventoryMovementRepository.create(params);
    }
}
exports.CreateInventoryMovementUseCase = CreateInventoryMovementUseCase;
//# sourceMappingURL=createInventoryMovement.usecase.js.map