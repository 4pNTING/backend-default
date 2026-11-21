import { IInventoryRepository } from '../../domain/repositories/inventory.repository.interface.js';
import { UpdateInventoryItemRequest, UpdateInventoryItemResponse } from '../../domain/models/inventory.model.js';
export declare class UpdateInventoryItemUseCase {
    private readonly inventoryRepository;
    constructor(inventoryRepository: IInventoryRepository);
    execute(params: UpdateInventoryItemRequest): Promise<UpdateInventoryItemResponse>;
}
