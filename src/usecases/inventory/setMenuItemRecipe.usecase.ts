import { IInventoryRepository } from '@domain/repositories/inventory.repository.interface';
import { SetMenuItemRecipeRequest, SetMenuItemRecipeResponse } from '@domain/models/inventory.model';

export class SetMenuItemRecipeUseCase {
    constructor(private readonly inventoryRepository: IInventoryRepository) { }

    async execute(params: SetMenuItemRecipeRequest): Promise<SetMenuItemRecipeResponse> {
        return await this.inventoryRepository.setRecipe(params);
    }
}
