import { IInventoryLevelRepository } from '@domain/repositories/inventory-level.repository.interface';
import { LoadAllInventoryLevelResponse } from '@domain/models/inventory-level.model';
import { QueryProps } from '../../src/domain/models/query.model';
export declare class LoadInventoryLevelUseCase {
    private readonly inventoryLevelRepository;
    constructor(inventoryLevelRepository: IInventoryLevelRepository);
    execute(query: QueryProps): Promise<LoadAllInventoryLevelResponse>;
}
