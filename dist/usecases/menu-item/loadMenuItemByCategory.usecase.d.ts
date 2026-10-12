import { IMenuItemRepository } from '../../domain/repositories/menu-item.repository.interface.js';
import { LoadMenuItemByCategoryRequest, LoadMenuItemByCategoryResponse } from '../../domain/models/menu-item.model.js';
export declare class LoadMenuItemByCategoryUseCase {
    private readonly menuItemRepository;
    constructor(menuItemRepository: IMenuItemRepository);
    execute(params: LoadMenuItemByCategoryRequest): Promise<LoadMenuItemByCategoryResponse>;
}
