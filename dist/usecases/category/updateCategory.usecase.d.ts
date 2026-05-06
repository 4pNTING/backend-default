import { ICategoryRepository } from '../../src/domain/repositories/category.repository.interface';
import { UpdateCategoryRequest } from '../../src/domain/models/category.model';
export declare class UpdateCategoryUseCase {
    private readonly categoryRepository;
    constructor(categoryRepository: ICategoryRepository);
    execute(params: UpdateCategoryRequest): Promise<void>;
}
