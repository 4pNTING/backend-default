import { IInventoryLevelRepository } from '@domain/repositories/inventory-level.repository.interface';
import { LoadInventoryLevelByProductAndZoneRequest, LoadInventoryLevelByProductAndZoneResponse } from '@domain/models/inventory-level.model';
export declare class LoadInventoryLevelByProductAndZoneUseCase {
    private readonly inventoryLevelRepository;
    constructor(inventoryLevelRepository: IInventoryLevelRepository);
    execute(params: LoadInventoryLevelByProductAndZoneRequest): Promise<LoadInventoryLevelByProductAndZoneResponse | null>;
}
