import { IInventoryRepository } from '../../domain/repositories/inventory.repository.interface.js';
import { AdjustStockRequest, AdjustStockResponse } from '../../domain/models/inventory.model.js';
export declare class AdjustStockUseCase {
    private readonly inventoryRepository;
    constructor(inventoryRepository: IInventoryRepository);
    execute(params: AdjustStockRequest): Promise<AdjustStockResponse>;
}
