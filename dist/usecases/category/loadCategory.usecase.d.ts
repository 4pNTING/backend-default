import { ICategoryRepository } from '../../domain/repositories/category.repository.interface.js';
import { LoadAllCategoryResponse } from '../../domain/models/category.model.js';
import { QueryProps } from '../../domain/models/query.model.js';
export declare class LoadCategoryUseCase {
    private readonly categoryRepository;
    constructor(categoryRepository: ICategoryRepository);
    execute(query: QueryProps): Promise<LoadAllCategoryResponse>;
}
