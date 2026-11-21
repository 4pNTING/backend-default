import { IInventoryRepository } from '../../domain/repositories/inventory.repository.interface.js';
import { LoadRecipeByMenuItemRequest, LoadRecipeByMenuItemResponse } from '../../domain/models/inventory.model.js';
export declare class LoadRecipeByMenuItemUseCase {
    private readonly inventoryRepository;
    constructor(inventoryRepository: IInventoryRepository);
    execute(params: LoadRecipeByMenuItemRequest): Promise<LoadRecipeByMenuItemResponse>;
}
