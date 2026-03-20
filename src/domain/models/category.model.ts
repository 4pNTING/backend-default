import { ActiveStatus } from '../enums/enum';

// Base Model
export class CategoryModel {
  id: string;
  name: string;
  description?: string;
  photo?: string;
  createdAt?: Date;
  updatedAt?: Date;
  isActive?: ActiveStatus;
}


export class CreateCategoryRequest {
  name: string;
  description?: string;
  photo?: string;
  isActive?: ActiveStatus;
}

export class CreateCategoryResponse extends CategoryModel { }

export class UpdateCategoryRequest {
  id: string;
  name?: string;
  description?: string;
  photo?: string;
  isActive?: ActiveStatus;
}

export class UpdateCategoryResponse {
  id: string;
  success: boolean;
}

export class DeleteCategoryRequest {
  id: string;
}

export class DeleteCategoryResponse {
  id: string;
  success: boolean;
}

export class LoadAllCategoryRequest {
}

export class LoadAllCategoryResponse {
  items: CategoryModel[];
  total: number;
}

export class LoadCategoryByIdRequest {
  id: string;
}

export class LoadCategoryByIdResponse extends CategoryModel { }