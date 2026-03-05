import { IInventoryMovementRepository } from '@domain/repositories/inventory-movement.repository.interface';
import { LoadAllInventoryMovementResponse } from '@domain/models/inventory-movement.model';
import { QueryProps } from '@domain/models/query.model';

export class LoadInventoryMovementUseCase {
    constructor(private readonly inventoryMovementRepository: IInventoryMovementRepository) { }

    async execute(query: QueryProps): Promise<LoadAllInventoryMovementResponse> {
        return await this.inventoryMovementRepository.findAll(query);
    }
}
