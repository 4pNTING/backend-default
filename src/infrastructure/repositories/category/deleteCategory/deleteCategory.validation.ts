import { Repository } from 'typeorm';
import { CategoryEntity } from '@infrastructure/entities/category.entity';
import { DeleteCategoryRequest } from '@domain/models/category.model';
import { NotFoundException } from '@nestjs/common';

export class DeleteCategoryValidation extends DeleteCategoryRequest {
  constructor(private readonly categoryRepository: Repository<CategoryEntity>) {
    super();
  }

  public async execute(params: DeleteCategoryRequest): Promise<void> {
    try {
      this._id = params._id;

      const exist = await this.categoryRepository.findOne({ where: { _id: this._id } });
      if (!exist) {
        throw new NotFoundException(`Category ID ${this._id} not found`);
      }
    } catch (error) {
      throw error;
    }
  }
}