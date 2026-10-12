import { Repository } from 'typeorm';
import { CategoryEntity } from '../../../entities/category.entity.js';
import { DeleteCategoryRequest } from '../../../../domain/models/category.model.js';
export declare class DeleteCategoryValidation extends DeleteCategoryRequest {
    private readonly categoryRepository;
    constructor(categoryRepository: Repository<CategoryEntity>);
    execute(params: DeleteCategoryRequest): Promise<void>;
}
