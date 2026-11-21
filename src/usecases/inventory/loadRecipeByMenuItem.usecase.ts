import { IInventoryRepository } from '@domain/repositories/inventory.repository.interface';
import { LoadRecipeByMenuItemRequest, LoadRecipeByMenuItemResponse } from '@domain/models/inventory.model';

export class LoadRecipeByMenuItemUseCase {
    constructor(private readonly inventoryRepository: IInventoryRepository) { }

    async execute(params: LoadRecipeByMenuItemRequest): Promise<LoadRecipeByMenuItemResponse> {
        return await this.inventoryRepository.getRecipeByMenuItem(params);
    }
}
