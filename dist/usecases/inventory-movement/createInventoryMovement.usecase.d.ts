import { IInventoryMovementRepository } from '@domain/repositories/inventory-movement.repository.interface';
import { IInventoryLevelRepository } from '@domain/repositories/inventory-level.repository.interface';
import { CreateInventoryMovementRequest, CreateInventoryMovementResponse } from '@domain/models/inventory-movement.model';
export declare class CreateInventoryMovementUseCase {
    private readonly inventoryMovementRepository;
    private readonly inventoryLevelRepository;
    constructor(inventoryMovementRepository: IInventoryMovementRepository, inventoryLevelRepository: IInventoryLevelRepository);
    execute(params: CreateInventoryMovementRequest): Promise<CreateInventoryMovementResponse>;
}
