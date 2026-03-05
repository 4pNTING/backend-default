import { IInventoryLevelRepository } from '@domain/repositories/inventory-level.repository.interface';
import { CreateInventoryLevelRequest, CreateInventoryLevelResponse } from '@domain/models/inventory-level.model';

export class CreateInventoryLevelUseCase {
    constructor(private readonly inventoryLevelRepository: IInventoryLevelRepository) { }

    async execute(params: CreateInventoryLevelRequest): Promise<CreateInventoryLevelResponse> {
        return await this.inventoryLevelRepository.create(params);
    }
}
