import { IMenuItemRepository } from '../../domain/repositories/menu-item.repository.interface.js';
import { LoadAllMenuItemResponse } from '../../domain/models/menu-item.model.js';
import { QueryProps } from '../../domain/models/query.model.js';
export declare class LoadMenuItemUseCase {
    private readonly menuItemRepository;
    constructor(menuItemRepository: IMenuItemRepository);
    execute(query: QueryProps): Promise<LoadAllMenuItemResponse>;
}
