import { ActiveStatus } from '../enums/enum';
export declare class CategoryModel {
    _id: string;
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
    _id: string;
    name?: string;
    description?: string;
    photo?: string;
    isActive?: ActiveStatus;
}
export declare class UpdateCategoryResponse {
    _id: string;
}
export declare class DeleteCategoryRequest {
    _id: string;
}
export declare class DeleteCategoryResponse {
    _id: string;
}
export declare class LoadAllCategoryRequest {
}
export declare class LoadAllCategoryResponse {
    items: CategoryModel[];
    total: number;
}
export declare class LoadCategoryByIdRequest {
    _id: string;
}
export declare class LoadCategoryByIdResponse extends CategoryModel {
}
