import { IInventoryLevelRepository } from '@domain/repositories/inventory-level.repository.interface';
import { LoadInventoryLevelByIdRequest, LoadInventoryLevelByIdResponse } from '@domain/models/inventory-level.model';
export declare class LoadInventoryLevelByIdUseCase {
    private readonly inventoryLevelRepository;
    constructor(inventoryLevelRepository: IInventoryLevelRepository);
    execute(params: LoadInventoryLevelByIdRequest): Promise<LoadInventoryLevelByIdResponse | null>;
}
