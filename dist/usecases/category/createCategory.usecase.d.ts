import { ICategoryRepository } from '../../domain/repositories/category.repository.interface.js';
import { CreateCategoryRequest, CreateCategoryResponse } from '../../domain/models/category.model.js';
export declare class CreateCategoryUseCase {
    private readonly categoryRepository;
    constructor(categoryRepository: ICategoryRepository);
    execute(params: CreateCategoryRequest): Promise<CreateCategoryResponse>;
}
