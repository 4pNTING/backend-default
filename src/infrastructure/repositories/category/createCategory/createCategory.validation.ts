import { Repository } from 'typeorm';
import { CategoryEntity } from '@infrastructure/entities/category.entity';
import { CreateCategoryRequest } from '@domain/models/category.model';
import { BadRequestException, ConflictException } from '@nestjs/common';

export class CreateCategoryValidation extends CreateCategoryRequest {
  constructor(private readonly categoryRepository: Repository<CategoryEntity>) {
    super();
  }

  public async execute(params: CreateCategoryRequest): Promise<void> {
    try {
      await this.buildParams(params);
      await this.validateParams();
    } catch (error) {
      throw error;
    }
  }

  private async buildParams(params: CreateCategoryRequest): Promise<void> {
    try {
      this.name = params.name;
      this.description = params.description;
      this.photo = params.photo;
    } catch (error) {
      throw error;
    }
  }

  private async validateParams(): Promise<void> {
    try {
      if (!this.name || this.name.trim() === '') {
        throw new BadRequestException('Category name is required');
      }

      const exist = await this.categoryRepository.findOne({ 
        where: { name: this.name } 
      });
      
      if (exist) {
        throw new ConflictException('Category name already exists.');
      }
    } catch (error) {
      throw error;
    }
  }
}