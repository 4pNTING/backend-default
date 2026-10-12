import { IMenuOptionRepository } from '../../domain/repositories/menu-option.repository.interface.js';
import { CreateMenuOptionRequest, CreateMenuOptionResponse } from '../../domain/models/menu-option.model.js';
export declare class CreateMenuOptionUseCase {
    private readonly menuOptionRepository;
    constructor(menuOptionRepository: IMenuOptionRepository);
    execute(params: CreateMenuOptionRequest): Promise<CreateMenuOptionResponse>;
}
