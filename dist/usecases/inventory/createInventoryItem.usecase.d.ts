import { IInventoryRepository } from '../../domain/repositories/inventory.repository.interface.js';
import { CreateInventoryItemRequest, CreateInventoryItemResponse } from '../../domain/models/inventory.model.js';
export declare class CreateInventoryItemUseCase {
    private readonly inventoryRepository;
    constructor(inventoryRepository: IInventoryRepository);
    execute(params: CreateInventoryItemRequest): Promise<CreateInventoryItemResponse>;
}
