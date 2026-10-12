import { ICategoryRepository } from '../../domain/repositories/category.repository.interface.js';
import { LoadCategoryByIdRequest, LoadCategoryByIdResponse } from '../../domain/models/category.model.js';
export declare class LoadByIDCategoryUseCase {
    private readonly categoryRepository;
    constructor(categoryRepository: ICategoryRepository);
    execute(params: LoadCategoryByIdRequest): Promise<LoadCategoryByIdResponse | null>;
}
