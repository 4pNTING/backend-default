import { IMenuOptionRepository } from '../../domain/repositories/menu-option.repository.interface.js';
import { DeleteMenuOptionRequest } from '../../domain/models/menu-option.model.js';
export declare class DeleteMenuOptionUseCase {
    private readonly menuOptionRepository;
    constructor(menuOptionRepository: IMenuOptionRepository);
    execute(params: DeleteMenuOptionRequest): Promise<void>;
}
