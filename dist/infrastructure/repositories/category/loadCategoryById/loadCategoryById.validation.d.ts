import { Repository } from 'typeorm';
import { CategoryEntity } from '../../../../src/infrastructure/entities/category.entity';
import { LoadCategoryByIdRequest } from '../../../../src/domain/models/category.model';
export declare class LoadCategoryByIdValidation extends LoadCategoryByIdRequest {
    private readonly categoryRepository;
    constructor(categoryRepository: Repository<CategoryEntity>);
    execute(params: LoadCategoryByIdRequest): Promise<void>;
}
