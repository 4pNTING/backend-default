import { ICategoryRepository } from '../../domain/repositories/category.repository.interface.js';
import { UpdateCategoryRequest } from '../../domain/models/category.model.js';
export declare class UpdateCategoryUseCase {
    private readonly categoryRepository;
    constructor(categoryRepository: ICategoryRepository);
    execute(params: UpdateCategoryRequest): Promise<void>;
}
