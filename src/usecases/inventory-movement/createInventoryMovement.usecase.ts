import { IInventoryMovementRepository } from '@domain/repositories/inventory-movement.repository.interface';
import { IInventoryLevelRepository } from '@domain/repositories/inventory-level.repository.interface';
import { CreateInventoryMovementRequest, CreateInventoryMovementResponse } from '@domain/models/inventory-movement.model';
import { InventoryMovementType } from '@domain/enums/enum';

export class CreateInventoryMovementUseCase {
    constructor(
        private readonly inventoryMovementRepository: IInventoryMovementRepository,
        private readonly inventoryLevelRepository: IInventoryLevelRepository
    ) { }

    async execute(params: CreateInventoryMovementRequest): Promise<CreateInventoryMovementResponse> {
        // 1. Check current inventory level
        const currentLevel = await this.inventoryLevelRepository.findByProductAndZone({
            productId: params.productId,
            zoneId: params.zoneId,
        });

        let newQuantity = 0;
        if (currentLevel) {
            newQuantity = currentLevel.quantity;
        }

        // 2. Calculate new quantity based on movement type
        switch (params.type) {
            case InventoryMovementType.IN:
                newQuantity += params.quantity;
                break;
            case InventoryMovementType.OUT:
            case InventoryMovementType.TRANSFER:
                newQuantity -= params.quantity;
                break;
            case InventoryMovementType.ADJUST:
                // Assume ADJUST quantity is the delta (can be positive or negative)
                // Or if ADJUST quantity is the absolute new value, we'd do `newQuantity = params.quantity;`
                // Let's assume it's absolute for ADJUST (setting exact stock)
                newQuantity = params.quantity;
                break;
        }

        // Ensure stock doesn't go below 0 (optional business rule, but good practice)
        if (newQuantity < 0) {
            throw new Error(`Insufficient stock. Cannot reduce below 0. Current: ${currentLevel?.quantity || 0}, Requested reduction: ${params.quantity}`);
        }

        // 3. Update or Create Inventory Level
        if (currentLevel) {
            await this.inventoryLevelRepository.update({
                id: currentLevel.id,
                quantity: newQuantity,
            });
        } else {
            await this.inventoryLevelRepository.create({
                productId: params.productId,
                zoneId: params.zoneId,
                quantity: newQuantity,
            });
        }

        // 4. Save the movement record
        // For ADJUST, if we want to save the delta we should probably save `newQuantity - currentLevel.quantity`. 
        // But since the model expects the input quantity, we just save what was passed.
        return await this.inventoryMovementRepository.create(params);
    }
}
