import { ICategoryRepository } from '../../domain/repositories/category.repository.interface.js';
import { DeleteCategoryRequest } from '../../domain/models/category.model.js';
export declare class DeleteCategoryUseCase {
    private readonly categoryRepository;
    constructor(categoryRepository: ICategoryRepository);
    execute(params: DeleteCategoryRequest): Promise<void>;
}
