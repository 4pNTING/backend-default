import { IMenuOptionRepository } from '@domain/repositories/menu-option.repository.interface';
import { DeleteMenuOptionRequest } from '@domain/models/menu-option.model';

export class DeleteMenuOptionUseCase {
    constructor(private readonly menuOptionRepository: IMenuOptionRepository) { }
    async execute(params: DeleteMenuOptionRequest): Promise<void> {
        return await this.menuOptionRepository.delete(params);
    }
}
