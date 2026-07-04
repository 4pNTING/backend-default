import { IMenuItemRepository } from '@domain/repositories/menu-item.repository.interface';
import { UpdateMenuItemRequest } from '@domain/models/menu-item.model';

export class UpdateMenuItemUseCase {
    constructor(private readonly menuItemRepository: IMenuItemRepository) { }
    async execute(params: UpdateMenuItemRequest): Promise<void> {
        return await this.menuItemRepository.update(params);
    }
}
