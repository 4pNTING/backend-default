// Base Model
export class CategoryModel {
  id: number;
  name: string;
  description?: string;
  photo?: string;
  createdAt?: Date;
  updatedAt?: Date;
  isActive?: boolean;
}


export class CreateCategoryRequest {
  name: string;
  description?: string;
  photo?: string;
  isActive?: boolean;
}

export class CreateCategoryResponse extends CategoryModel { }

export class UpdateCategoryRequest {
  id: number;
  name?: string;
  description?: string;
  photo?: string;
  isActive?: boolean;
}

export class UpdateCategoryResponse {
  id: number;
  success: boolean;
}

export class DeleteCategoryRequest {
  id: number;
}

export class DeleteCategoryResponse {
  id: number;
  success: boolean;
}

export class LoadAllCategoryRequest {
}

export class LoadAllCategoryResponse {
  items: CategoryModel[];
  total: number;
}

export class LoadCategoryByIdRequest {
  id: number;
}

export class LoadCategoryByIdResponse extends CategoryModel { }