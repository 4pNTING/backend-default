import { Repository, Not } from 'typeorm';
import { CategoryEntity } from '@infrastructure/entities/category.entity';
import { UpdateCategoryRequest } from '@domain/models/category.model';
import { BadRequestException, ConflictException, NotFoundException } from '@nestjs/common';

export class UpdateCategoryValidation extends UpdateCategoryRequest {
  constructor(private readonly categoryRepository: Repository<CategoryEntity>) {
    super();
  }

  public async execute(params: UpdateCategoryRequest): Promise<void> {
    try {
      this._id = params._id;
      this.name = params.name;
      this.description = params.description;
      this.photo = params.photo;
      await this.validateParams();
    } catch (error) {
      throw error;
    }
  }

  private async validateParams(): Promise<void> {
    if (!this._id) {
      throw new BadRequestException('Category ID is required');
    }

    const exist = await this.categoryRepository.findOne({ where: { _id: this._id } });
    if (!exist) {
      throw new NotFoundException(`Category ID ${this._id} not found`);
    }

    if (this.name) {
      const duplicate = await this.categoryRepository.findOne({
        where: {
          name: this.name,
          _id: Not(this._id)
        }
      });

      if (duplicate) {
        throw new ConflictException('Category name already exists.');
      }
    }
  }
}