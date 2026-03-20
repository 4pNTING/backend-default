import { IInventoryLevelRepository } from '@domain/repositories/inventory-level.repository.interface';
import { UpdateInventoryLevelRequest } from '@domain/models/inventory-level.model';
export declare class UpdateInventoryLevelUseCase {
    private readonly inventoryLevelRepository;
    constructor(inventoryLevelRepository: IInventoryLevelRepository);
    execute(params: UpdateInventoryLevelRequest): Promise<void>;
}
