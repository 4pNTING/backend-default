import { Repository } from 'typeorm';
import { CategoryEntity } from '../../../../src/infrastructure/entities/category.entity';
import { QueryProps } from '../../../../src/domain/models/query.model';
export declare class LoadAllCategoryValidation {
    private readonly categoryRepository;
    constructor(categoryRepository: Repository<CategoryEntity>);
    execute(query: QueryProps): Promise<void>;
}
