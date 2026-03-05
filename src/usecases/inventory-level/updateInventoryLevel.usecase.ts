import { IInventoryLevelRepository } from '@domain/repositories/inventory-level.repository.interface';
import { UpdateInventoryLevelRequest } from '@domain/models/inventory-level.model';

export class UpdateInventoryLevelUseCase {
    constructor(private readonly inventoryLevelRepository: IInventoryLevelRepository) { }

    async execute(params: UpdateInventoryLevelRequest): Promise<void> {
        await this.inventoryLevelRepository.update(params);
    }
}
