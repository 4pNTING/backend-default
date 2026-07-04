import { IMenuOptionRepository } from '@domain/repositories/menu-option.repository.interface';
import { LoadMenuOptionByItemRequest, LoadMenuOptionByItemResponse } from '@domain/models/menu-option.model';

export class LoadMenuOptionByMenuItemUseCase {
    constructor(private readonly menuOptionRepository: IMenuOptionRepository) { }
    async execute(params: LoadMenuOptionByItemRequest): Promise<LoadMenuOptionByItemResponse> {
        return await this.menuOptionRepository.findByMenuItem(params);
    }
}
