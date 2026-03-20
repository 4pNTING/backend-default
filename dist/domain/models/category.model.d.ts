import { ActiveStatus } from '../enums/enum';
export declare class CategoryModel {
    id: string;
    name: string;
    description?: string;
    photo?: string;
    createdAt?: Date;
    updatedAt?: Date;
    isActive?: ActiveStatus;
}
export declare class CreateCategoryRequest {
    name: string;
    description?: string;
    photo?: string;
    isActive?: ActiveStatus;
}
export declare class CreateCategoryResponse extends CategoryModel {
}
export declare class UpdateCategoryRequest {
    id: string;
    name?: string;
    description?: string;
    photo?: string;
    isActive?: ActiveStatus;
}
export declare class UpdateCategoryResponse {
    id: string;
    success: boolean;
}
export declare class DeleteCategoryRequest {
    id: string;
}
export declare class DeleteCategoryResponse {
    id: string;
    success: boolean;
}
export declare class LoadAllCategoryRequest {
}
export declare class LoadAllCategoryResponse {
    items: CategoryModel[];
    total: number;
}
export declare class LoadCategoryByIdRequest {
    id: string;
}
export declare class LoadCategoryByIdResponse extends CategoryModel {
}
