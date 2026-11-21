import { IInventoryRepository } from '@domain/repositories/inventory.repository.interface';
import { DeleteInventoryItemRequest, DeleteInventoryItemResponse } from '@domain/models/inventory.model';

export class DeleteInventoryItemUseCase {
    constructor(private readonly inventoryRepository: IInventoryRepository) { }

    async execute(params: DeleteInventoryItemRequest): Promise<DeleteInventoryItemResponse> {
        return await this.inventoryRepository.deleteItem(params);
    }
}
