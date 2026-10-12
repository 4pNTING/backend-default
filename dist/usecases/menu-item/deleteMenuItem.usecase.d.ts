import { IMenuItemRepository } from '../../domain/repositories/menu-item.repository.interface.js';
import { DeleteMenuItemRequest } from '../../domain/models/menu-item.model.js';
export declare class DeleteMenuItemUseCase {
    private readonly menuItemRepository;
    constructor(menuItemRepository: IMenuItemRepository);
    execute(params: DeleteMenuItemRequest): Promise<void>;
}
