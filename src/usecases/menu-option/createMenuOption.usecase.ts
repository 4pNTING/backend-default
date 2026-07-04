import { IMenuOptionRepository } from '@domain/repositories/menu-option.repository.interface';
import { CreateMenuOptionRequest, CreateMenuOptionResponse } from '@domain/models/menu-option.model';

export class CreateMenuOptionUseCase {
    constructor(private readonly menuOptionRepository: IMenuOptionRepository) { }
    async execute(params: CreateMenuOptionRequest): Promise<CreateMenuOptionResponse> {
        return await this.menuOptionRepository.create(params);
    }
}
