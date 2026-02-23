import { CategoryModel } from '../../domain/models/category.model';
export declare class CategoryEntity implements CategoryModel {
    id: number;
    name: string;
    description: string;
    photo: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
    isActive: boolean;
}
