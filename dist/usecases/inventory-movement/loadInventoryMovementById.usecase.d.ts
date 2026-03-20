import { IInventoryMovementRepository } from '@domain/repositories/inventory-movement.repository.interface';
import { LoadInventoryMovementByIdRequest, LoadInventoryMovementByIdResponse } from '@domain/models/inventory-movement.model';
export declare class LoadInventoryMovementByIdUseCase {
    private readonly inventoryMovementRepository;
    constructor(inventoryMovementRepository: IInventoryMovementRepository);
    execute(params: LoadInventoryMovementByIdRequest): Promise<LoadInventoryMovementByIdResponse | null>;
}
