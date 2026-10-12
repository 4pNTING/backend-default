import { Repository } from 'typeorm';
import { CategoryEntity } from '../../../entities/category.entity.js';
import { LoadCategoryByIdRequest } from '../../../../domain/models/category.model.js';
export declare class LoadCategoryByIdValidation extends LoadCategoryByIdRequest {
    private readonly categoryRepository;
    constructor(categoryRepository: Repository<CategoryEntity>);
    execute(params: LoadCategoryByIdRequest): Promise<void>;
}
