import { Repository } from 'typeorm';
import { CategoryEntity } from '../../../../src/infrastructure/entities/category.entity';
import { CreateCategoryRequest } from '../../../../src/domain/models/category.model';
export declare class CreateCategoryValidation extends CreateCategoryRequest {
    private readonly categoryRepository;
    constructor(categoryRepository: Repository<CategoryEntity>);
    execute(params: CreateCategoryRequest): Promise<void>;
    private buildParams;
    private validateParams;
}
