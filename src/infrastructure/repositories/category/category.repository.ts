import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { CategoryEntity } from '@infrastructure/entities/category.entity';
import { ICategoryRepository } from '@domain/repositories/category.repository.interface';
import {
  CategoryModel,
  CreateCategoryRequest,
  CreateCategoryResponse,
  UpdateCategoryRequest,
  DeleteCategoryRequest,
  LoadAllCategoryResponse,
  LoadCategoryByIdRequest,
  LoadCategoryByIdResponse
} from '@domain/models/category.model';
import { QueryProps } from '@domain/models/query.model';

// Import Actions & Validations
import { CreateCategoryAction } from './createCategory/createCategory.action';
import { CreateCategoryValidation } from './createCategory/createCategory.validation';

import { UpdateCategoryAction } from './updateCategory/updateCategory.action';
import { UpdateCategoryValidation } from './updateCategory/updateCategory.validation';

import { DeleteCategoryAction } from './deleteCategory/deleteCategory.action';
import { DeleteCategoryValidation } from './deleteCategory/deleteCategory.validation';

import { RestoreCategoryAction } from './restoreCategory/restoreCategory.action';

import { LoadAllCategoryAction } from './loadAllCategory/loadAllCategory.action';
// import { LoadAllCategoryValidation } from './loadAllCategory/loadAllCategory.validation';

import { LoadCategoryByIdAction } from './loadCategoryById/loadCategoryById.action';
import { LoadCategoryByIdValidation } from './loadCategoryById/loadCategoryById.validation';

@Injectable()
export class DatabaseCategoryRepository implements ICategoryRepository {
  constructor(
    @InjectRepository(CategoryEntity)
    private readonly categoryEntity: Repository<CategoryEntity>,
    private readonly dataSource: DataSource,
  ) { }


  async create(params: CreateCategoryRequest): Promise<CreateCategoryResponse> {
    const session = this.dataSource.createQueryRunner();
    await session.connect();
    await session.startTransaction();
    try {
      await new CreateCategoryValidation(this.categoryEntity).execute(params);
      const result = await new CreateCategoryAction(session).execute(params);
      await session.commitTransaction();
      return result;
    } catch (error) {
      await session.rollbackTransaction();
      throw error;
    } finally {
      await session.release();
    }
  }

  async update(params: UpdateCategoryRequest): Promise<void> {
    const session = this.dataSource.createQueryRunner();
    await session.connect();
    await session.startTransaction();
    try {
      await new UpdateCategoryValidation(this.categoryEntity).execute(params);
      await new UpdateCategoryAction(session).execute(params);
      await session.commitTransaction();
    } catch (error) {
      await session.rollbackTransaction();
      throw error;
    } finally {
      await session.release();
    }
  }

  async delete(params: DeleteCategoryRequest): Promise<void> {
    const session = this.dataSource.createQueryRunner();
    await session.connect();
    await session.startTransaction();
    try {
      await session.manager.softDelete(CategoryEntity, params.id);
      await session.commitTransaction();
    } catch (error) {
      await session.rollbackTransaction();
      throw error;
    } finally {
      await session.release();
    }
  }

  async restore(id: string): Promise<void> {
    const session = this.dataSource.createQueryRunner();
    await session.connect();
    await session.startTransaction();
    try {
      await new RestoreCategoryAction(session).execute(id);
      await session.commitTransaction();
    } catch (error) {
      await session.rollbackTransaction();
      throw error;
    } finally {
      await session.release();
    }
  }

  async findAll(query: QueryProps): Promise<LoadAllCategoryResponse> {
    const session = this.dataSource.createQueryRunner();
    await session.connect();
    await session.startTransaction();
    try {
      const result = await new LoadAllCategoryAction(session).execute(query);
      await session.commitTransaction();
      return result;
    } catch (error) {
      await session.rollbackTransaction();
      throw error;
    } finally {
      await session.release();
    }
  }

  async findById(params: LoadCategoryByIdRequest): Promise<LoadCategoryByIdResponse | null> {
    const session = this.dataSource.createQueryRunner();
    await session.connect();
    await session.startTransaction();
    try {
      await new LoadCategoryByIdValidation(this.categoryEntity).execute(params);
      const result = await new LoadCategoryByIdAction(session).execute(params);
      await session.commitTransaction();
      return result;
    } catch (error) {
      await session.rollbackTransaction();
      throw error;
    } finally {
      await session.release();
    }
  }

  async findByName(name: string): Promise<LoadCategoryByIdResponse | null> {
    const entity = await this.categoryEntity.findOne({ where: { name } });
    if (!entity) return null;

    return {
      id: entity.id,
      name: entity.name,
      description: entity.description,
      photo: entity.photo,
      createdAt: entity.createdAt,
      updatedAt: entity.updatedAt
    };
  }
}