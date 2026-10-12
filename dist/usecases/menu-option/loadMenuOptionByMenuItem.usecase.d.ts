import { IMenuOptionRepository } from '../../domain/repositories/menu-option.repository.interface.js';
import { LoadMenuOptionByItemRequest, LoadMenuOptionByItemResponse } from '../../domain/models/menu-option.model.js';
export declare class LoadMenuOptionByMenuItemUseCase {
    private readonly menuOptionRepository;
    constructor(menuOptionRepository: IMenuOptionRepository);
    execute(params: LoadMenuOptionByItemRequest): Promise<LoadMenuOptionByItemResponse>;
}
