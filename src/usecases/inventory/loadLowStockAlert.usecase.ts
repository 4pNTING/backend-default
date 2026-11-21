import { IInventoryRepository } from '@domain/repositories/inventory.repository.interface';
import { LoadLowStockAlertResponse } from '@domain/models/inventory.model';

export class LoadLowStockAlertUseCase {
    constructor(private readonly inventoryRepository: IInventoryRepository) { }

    async execute(): Promise<LoadLowStockAlertResponse> {
        return await this.inventoryRepository.findLowStock();
    }
}
