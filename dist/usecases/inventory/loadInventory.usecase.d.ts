import { IInventoryRepository } from '../../domain/repositories/inventory.repository.interface.js';
import { LoadInventoryRequest, LoadInventoryResponse } from '../../domain/models/inventory.model.js';
export declare class LoadInventoryUseCase {
    private readonly inventoryRepository;
    constructor(inventoryRepository: IInventoryRepository);
    execute(params: LoadInventoryRequest): Promise<LoadInventoryResponse>;
}
