import { ActiveStatus } from '../../common/graphql/common.model';
export { ActiveStatus };
export declare class Category {
    _id: number;
    name: string;
    description?: string;
    photo?: string;
    createdAt?: Date;
    updatedAt?: Date;
    isActive?: boolean;
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
    isActive?: boolean;
}
export declare class UpdateCategoryDto {
    _id: number;
    name?: string;
    description?: string;
    photo?: string;
    isActive?: boolean;
}
export declare class LoadCategoryByIdDto {
    _id: number;
}
export declare class DeleteCategoryDto {
    _id: number;
}
export declare class RestoreCategoryDto {
    _id: number;
}
export declare class LoadCategoryDto {
    page?: number;
    limit?: number;
    isActive?: ActiveStatus;
    keyword?: string;
}
