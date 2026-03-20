import { CategoryModel } from '../../domain/models/category.model';
import { ActiveStatus } from '../../domain/enums/enum';
export declare class CategoryEntity implements CategoryModel {
    id: string;
    name: string;
    description: string;
    photo: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
    isActive: ActiveStatus;
}
