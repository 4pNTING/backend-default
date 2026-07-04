import { IMenuItemRepository } from '@domain/repositories/menu-item.repository.interface';
import { LoadMenuItemByCategoryRequest, LoadMenuItemByCategoryResponse } from '@domain/models/menu-item.model';

export class LoadMenuItemByCategoryUseCase {
    constructor(private readonly menuItemRepository: IMenuItemRepository) { }
    async execute(params: LoadMenuItemByCategoryRequest): Promise<LoadMenuItemByCategoryResponse> {
        return await this.menuItemRepository.findByCategory(params);
    }
}
