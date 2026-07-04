import { IMenuItemRepository } from '@domain/repositories/menu-item.repository.interface';
import { DeleteMenuItemRequest } from '@domain/models/menu-item.model';

export class DeleteMenuItemUseCase {
    constructor(private readonly menuItemRepository: IMenuItemRepository) { }
    async execute(params: DeleteMenuItemRequest): Promise<void> {
        return await this.menuItemRepository.delete(params);
    }
}
