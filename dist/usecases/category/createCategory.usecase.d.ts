import { ICategoryRepository } from '../../src/domain/repositories/category.repository.interface';
import { CreateCategoryRequest, CreateCategoryResponse } from '../../src/domain/models/category.model';
export declare class CreateCategoryUseCase {
    private readonly categoryRepository;
    constructor(categoryRepository: ICategoryRepository);
    execute(params: CreateCategoryRequest): Promise<CreateCategoryResponse>;
}
