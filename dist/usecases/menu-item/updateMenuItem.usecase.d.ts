import { IMenuItemRepository } from '../../domain/repositories/menu-item.repository.interface.js';
import { UpdateMenuItemRequest } from '../../domain/models/menu-item.model.js';
export declare class UpdateMenuItemUseCase {
    private readonly menuItemRepository;
    constructor(menuItemRepository: IMenuItemRepository);
    execute(params: UpdateMenuItemRequest): Promise<void>;
}
