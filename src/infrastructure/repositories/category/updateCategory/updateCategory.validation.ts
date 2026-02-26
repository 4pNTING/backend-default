import { Repository, Not } from 'typeorm';
import { CategoryEntity } from '@infrastructure/entities/category.entity';
import { UpdateCategoryRequest } from '@domain/models/category.model';

export class UpdateCategoryValidation extends UpdateCategoryRequest {
  constructor(private readonly categoryRepository: Repository<CategoryEntity>) {
    super();
  }

  public async execute(params: UpdateCategoryRequest): Promise<void> {
    try {
      this.id = params.id;
      this.name = params.name;
      this.description = params.description;
      this.photo = params.photo;
      await this.validateParams();
    } catch (error) {
      throw error instanceof Error ? error : new Error(String(error));
    }
  }

  private async validateParams(): Promise<void> {
    if (!this.id) {
      throw new Error('Category ID is required');
    }

    const exist = await this.categoryRepository.findOne({ where: { id: this.id } });
    if (!exist) {
      throw new Error(`Category ID ${this.id} not found`);
    }

    if (this.name) {
      const duplicate = await this.categoryRepository.findOne({
        where: {
          name: this.name,
          id: Not(this.id)
        }
      });

      if (duplicate) {
        throw new Error(`Category name "${this.name}" is already taken.`);
      }
    }
  }
}