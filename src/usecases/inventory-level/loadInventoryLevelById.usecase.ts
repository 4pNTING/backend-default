import { IInventoryLevelRepository } from '@domain/repositories/inventory-level.repository.interface';
import { LoadInventoryLevelByIdRequest, LoadInventoryLevelByIdResponse } from '@domain/models/inventory-level.model';

export class LoadInventoryLevelByIdUseCase {
    constructor(private readonly inventoryLevelRepository: IInventoryLevelRepository) { }

    async execute(params: LoadInventoryLevelByIdRequest): Promise<LoadInventoryLevelByIdResponse | null> {
        return await this.inventoryLevelRepository.findById(params);
    }
}
