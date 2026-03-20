import { IInventoryMovementRepository } from '@domain/repositories/inventory-movement.repository.interface';
import { LoadAllInventoryMovementResponse } from '@domain/models/inventory-movement.model';
import { QueryProps } from '@domain/models/query.model';
export declare class LoadInventoryMovementUseCase {
    private readonly inventoryMovementRepository;
    constructor(inventoryMovementRepository: IInventoryMovementRepository);
    execute(query: QueryProps): Promise<LoadAllInventoryMovementResponse>;
}
