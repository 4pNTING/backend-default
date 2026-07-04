import { IMenuItemRepository } from '@domain/repositories/menu-item.repository.interface';
import { CreateMenuItemRequest, CreateMenuItemResponse } from '@domain/models/menu-item.model';

export class CreateMenuItemUseCase {
    constructor(private readonly menuItemRepository: IMenuItemRepository) { }
    async execute(params: CreateMenuItemRequest): Promise<CreateMenuItemResponse> {
        return await this.menuItemRepository.create(params);
    }
}
