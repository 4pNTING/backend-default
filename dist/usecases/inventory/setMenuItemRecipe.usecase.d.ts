import { IInventoryRepository } from '../../domain/repositories/inventory.repository.interface.js';
import { SetMenuItemRecipeRequest, SetMenuItemRecipeResponse } from '../../domain/models/inventory.model.js';
export declare class SetMenuItemRecipeUseCase {
    private readonly inventoryRepository;
    constructor(inventoryRepository: IInventoryRepository);
    execute(params: SetMenuItemRecipeRequest): Promise<SetMenuItemRecipeResponse>;
}
