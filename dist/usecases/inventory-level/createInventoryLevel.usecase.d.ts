import { IInventoryLevelRepository } from '@domain/repositories/inventory-level.repository.interface';
import { CreateInventoryLevelRequest, CreateInventoryLevelResponse } from '@domain/models/inventory-level.model';
export declare class CreateInventoryLevelUseCase {
    private readonly inventoryLevelRepository;
    constructor(inventoryLevelRepository: IInventoryLevelRepository);
    execute(params: CreateInventoryLevelRequest): Promise<CreateInventoryLevelResponse>;
}
