import { IInventoryRepository } from '../../domain/repositories/inventory.repository.interface.js';
import { LoadStockHistoryRequest, LoadStockHistoryResponse } from '../../domain/models/inventory.model.js';
export declare class LoadStockHistoryUseCase {
    private readonly inventoryRepository;
    constructor(inventoryRepository: IInventoryRepository);
    execute(params: LoadStockHistoryRequest): Promise<LoadStockHistoryResponse>;
}
