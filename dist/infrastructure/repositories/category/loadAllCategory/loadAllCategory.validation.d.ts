import { Repository } from 'typeorm';
import { CategoryEntity } from '../../../entities/category.entity.js';
import { QueryProps } from '../../../../domain/models/query.model.js';
export declare class LoadAllCategoryValidation {
    private readonly categoryRepository;
    constructor(categoryRepository: Repository<CategoryEntity>);
    execute(query: QueryProps): Promise<void>;
}
