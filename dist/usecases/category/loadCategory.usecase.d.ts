import { ICategoryRepository } from '../../src/domain/repositories/category.repository.interface';
import { LoadAllCategoryResponse } from '../../src/domain/models/category.model';
import { QueryProps } from '../../src/domain/models/query.model';
export declare class LoadCategoryUseCase {
    private readonly categoryRepository;
    constructor(categoryRepository: ICategoryRepository);
    execute(query: QueryProps): Promise<LoadAllCategoryResponse>;
}
