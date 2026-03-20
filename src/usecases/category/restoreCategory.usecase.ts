import { Injectable } from '@nestjs/common';
import { DatabaseCategoryRepository } from '../../infrastructure/repositories/category/category.repository';
import { CategoryModel } from '../../domain/models/category.model';

@Injectable()
export class RestoreCategoryUseCase {
    constructor(private readonly categoryRepository: DatabaseCategoryRepository) { }

    async execute(_id: string): Promise<CategoryModel> {
        // 1. Restore the category (set deletedAt = null)
        await this.categoryRepository.restore(_id);
        
        // 2. Return the restored category
        return await this.categoryRepository.findById({ _id });
    }
}
