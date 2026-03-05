import { IInventoryMovementRepository } from '@domain/repositories/inventory-movement.repository.interface';
import { LoadInventoryMovementByIdRequest, LoadInventoryMovementByIdResponse } from '@domain/models/inventory-movement.model';

export class LoadInventoryMovementByIdUseCase {
    constructor(private readonly inventoryMovementRepository: IInventoryMovementRepository) { }

    async execute(params: LoadInventoryMovementByIdRequest): Promise<LoadInventoryMovementByIdResponse | null> {
        return await this.inventoryMovementRepository.findById(params);
    }
}
