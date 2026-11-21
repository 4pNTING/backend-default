import { IInventoryRepository } from '@domain/repositories/inventory.repository.interface';
import { CreateInventoryItemRequest, CreateInventoryItemResponse } from '@domain/models/inventory.model';

export class CreateInventoryItemUseCase {
    constructor(private readonly inventoryRepository: IInventoryRepository) { }

    async execute(params: CreateInventoryItemRequest): Promise<CreateInventoryItemResponse> {
        return await this.inventoryRepository.createItem(params);
    }
}
