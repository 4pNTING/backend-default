import { IMenuOptionRepository } from '@domain/repositories/menu-option.repository.interface';
import { UpdateMenuOptionRequest } from '@domain/models/menu-option.model';

export class UpdateMenuOptionUseCase {
    constructor(private readonly menuOptionRepository: IMenuOptionRepository) { }
    async execute(params: UpdateMenuOptionRequest): Promise<void> {
        return await this.menuOptionRepository.update(params);
    }
}
