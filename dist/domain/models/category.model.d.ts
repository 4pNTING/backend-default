export declare class CategoryModel {
    id: number;
    name: string;
    description?: string;
    photo?: string;
    createdAt?: Date;
    updatedAt?: Date;
    isActive?: boolean;
}
export declare class CreateCategoryRequest {
    name: string;
    description?: string;
    photo?: string;
    isActive?: boolean;
}
export declare class CreateCategoryResponse extends CategoryModel {
}
export declare class UpdateCategoryRequest {
    id: number;
    name?: string;
    description?: string;
    photo?: string;
    isActive?: boolean;
}
export declare class UpdateCategoryResponse {
    id: number;
    success: boolean;
}
export declare class DeleteCategoryRequest {
    id: number;
}
export declare class DeleteCategoryResponse {
    id: number;
    success: boolean;
}
export declare class LoadAllCategoryRequest {
}
export declare class LoadAllCategoryResponse {
    items: CategoryModel[];
    total: number;
}
export declare class LoadCategoryByIdRequest {
    id: number;
}
export declare class LoadCategoryByIdResponse extends CategoryModel {
}
