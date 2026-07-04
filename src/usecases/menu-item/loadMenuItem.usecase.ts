import { IMenuItemRepository } from '@domain/repositories/menu-item.repository.interface';
import { LoadAllMenuItemResponse } from '@domain/models/menu-item.model';
import { QueryProps } from '@domain/models/query.model';

export class LoadMenuItemUseCase {
    constructor(private readonly menuItemRepository: IMenuItemRepository) { }
    async execute(query: QueryProps): Promise<LoadAllMenuItemResponse> {
        return await this.menuItemRepository.findAll(query);
    }
}
