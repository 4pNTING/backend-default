import { IMenuItemRepository } from '@domain/repositories/menu-item.repository.interface';
import { LoadMenuItemByIdRequest, LoadMenuItemByIdResponse } from '@domain/models/menu-item.model';

export class LoadByIDMenuItemUseCase {
    constructor(private readonly menuItemRepository: IMenuItemRepository) { }
    async execute(params: LoadMenuItemByIdRequest): Promise<LoadMenuItemByIdResponse | null> {
        return await this.menuItemRepository.findById(params);
    }
}
