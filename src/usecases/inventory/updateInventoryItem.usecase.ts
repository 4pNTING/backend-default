import { IInventoryRepository } from '@domain/repositories/inventory.repository.interface';
import { UpdateInventoryItemRequest, UpdateInventoryItemResponse } from '@domain/models/inventory.model';

export class UpdateInventoryItemUseCase {
    constructor(private readonly inventoryRepository: IInventoryRepository) { }

    async execute(params: UpdateInventoryItemRequest): Promise<UpdateInventoryItemResponse> {
        return await this.inventoryRepository.updateItem(params);
    }
}
