import { IInventoryLevelRepository } from '@domain/repositories/inventory-level.repository.interface';
import { LoadInventoryLevelByProductAndZoneRequest, LoadInventoryLevelByProductAndZoneResponse } from '@domain/models/inventory-level.model';

export class LoadInventoryLevelByProductAndZoneUseCase {
    constructor(private readonly inventoryLevelRepository: IInventoryLevelRepository) { }

    async execute(params: LoadInventoryLevelByProductAndZoneRequest): Promise<LoadInventoryLevelByProductAndZoneResponse | null> {
        return await this.inventoryLevelRepository.findByProductAndZone(params);
    }
}
