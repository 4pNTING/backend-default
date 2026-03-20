import { DatabaseCategoryRepository } from '../../infrastructure/repositories/category/category.repository';
import { CategoryModel } from '../../domain/models/category.model';
export declare class RestoreCategoryUseCase {
    private readonly categoryRepository;
    constructor(categoryRepository: DatabaseCategoryRepository);
    execute(id: string): Promise<CategoryModel>;
}
