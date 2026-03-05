import { IInventoryLevelRepository } from '@domain/repositories/inventory-level.repository.interface';
import { LoadAllInventoryLevelResponse } from '@domain/models/inventory-level.model';
import { QueryProps } from '@domain/models/query.model';

export class LoadInventoryLevelUseCase {
    constructor(private readonly inventoryLevelRepository: IInventoryLevelRepository) { }

    async execute(query: QueryProps): Promise<LoadAllInventoryLevelResponse> {
        return await this.inventoryLevelRepository.findAll(query);
    }
}
