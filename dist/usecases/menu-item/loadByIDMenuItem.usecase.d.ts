import { IMenuItemRepository } from '../../domain/repositories/menu-item.repository.interface.js';
import { LoadMenuItemByIdRequest, LoadMenuItemByIdResponse } from '../../domain/models/menu-item.model.js';
export declare class LoadByIDMenuItemUseCase {
    private readonly menuItemRepository;
    constructor(menuItemRepository: IMenuItemRepository);
    execute(params: LoadMenuItemByIdRequest): Promise<LoadMenuItemByIdResponse | null>;
}
