import { Repository } from 'typeorm';
import { CategoryEntity } from '../../../entities/category.entity.js';
import { UpdateCategoryRequest } from '../../../../domain/models/category.model.js';
export declare class UpdateCategoryValidation extends UpdateCategoryRequest {
    private readonly categoryRepository;
    constructor(categoryRepository: Repository<CategoryEntity>);
    execute(params: UpdateCategoryRequest): Promise<void>;
    private validateParams;
}
