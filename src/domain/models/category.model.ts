import { ActiveStatus } from '../enums/enum';

// Base Model
export class CategoryModel {
  _id: string;
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
  _id: string;
  name?: string;
  description?: string;
  photo?: string;
  isActive?: ActiveStatus;
}

export class UpdateCategoryResponse {
  _id: string;
}

export class DeleteCategoryRequest {
  _id: string;
}

export class DeleteCategoryResponse {
  _id: string;
}

export class LoadAllCategoryRequest {
}

export class LoadAllCategoryResponse {
  items: CategoryModel[];
  total: number;
}

export class LoadCategoryByIdRequest {
  _id: string;
}

export class LoadCategoryByIdResponse extends CategoryModel { }