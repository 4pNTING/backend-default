import { IInventoryRepository } from '@domain/repositories/inventory.repository.interface';
import { LoadInventoryRequest, LoadInventoryResponse } from '@domain/models/inventory.model';

export class LoadInventoryUseCase {
    constructor(private readonly inventoryRepository: IInventoryRepository) { }

    async execute(params: LoadInventoryRequest): Promise<LoadInventoryResponse> {
        return await this.inventoryRepository.findAll(params);
    }
}
