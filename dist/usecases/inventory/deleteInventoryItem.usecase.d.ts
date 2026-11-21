import { IInventoryRepository } from '../../domain/repositories/inventory.repository.interface.js';
import { DeleteInventoryItemRequest, DeleteInventoryItemResponse } from '../../domain/models/inventory.model.js';
export declare class DeleteInventoryItemUseCase {
    private readonly inventoryRepository;
    constructor(inventoryRepository: IInventoryRepository);
    execute(params: DeleteInventoryItemRequest): Promise<DeleteInventoryItemResponse>;
}
