import { IInventoryRepository } from '../../domain/repositories/inventory.repository.interface.js';
import { LoadLowStockAlertResponse } from '../../domain/models/inventory.model.js';
export declare class LoadLowStockAlertUseCase {
    private readonly inventoryRepository;
    constructor(inventoryRepository: IInventoryRepository);
    execute(): Promise<LoadLowStockAlertResponse>;
}
