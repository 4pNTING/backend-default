import { ActiveStatus } from '../../../domain/enums/enum';
export { ActiveStatus };
export declare class Category {
    _id: string;
    name: string;
    description?: string;
    photo?: string;
    createdAt?: Date;
    updatedAt?: Date;
    isActive?: ActiveStatus;
}
export declare class LoadCategoryResponse {
    count: number;
    category: Category[];
}
export declare class LoadCategoryByIdResponse {
    category: Category;
}
export declare class CreateCategoryResponse {
    category: Category;
}
export declare class UpdateCategoryResponse {
    category: Category;
}
export declare class DeleteCategoryResponse {
    category: Category;
}
export declare class RestoreCategoryResponse {
    category: Category;
}
export declare class CreateCategoryDto {
    name: string;
    description?: string;
    photo?: string;
    isActive?: ActiveStatus;
}
export declare class UpdateCategoryDto {
    _id: string;
    name?: string;
    description?: string;
    photo?: string;
    isActive?: ActiveStatus;
}
export declare class LoadCategoryByIdDto {
    _id: string;
}
export declare class DeleteCategoryDto {
    _id: string;
}
export declare class RestoreCategoryDto {
    _id: string;
}
export declare class LoadCategoryDto {
    page?: number;
    limit?: number;
    isActive?: ActiveStatus;
    keyword?: string;
}
