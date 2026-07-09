import { MenuItemModel } from '../../domain/models/menu-item.model';
import { ActiveStatus } from '../../domain/enums/enum';
import { CategoryEntity } from './category.entity';
export declare class MenuItemEntity implements MenuItemModel {
    _id: string;
    name: string;
    description: string;
    photo: string;
    price: number;
    categoryId: string;
    category: CategoryEntity;
    isActive: ActiveStatus;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
}
