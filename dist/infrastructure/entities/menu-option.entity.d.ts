import { MenuOptionModel } from '../../domain/models/menu-option.model';
import { ActiveStatus } from '../../domain/enums/enum';
import { MenuItemEntity } from './menu-item.entity';
export declare class MenuOptionEntity implements MenuOptionModel {
    _id: string;
    menuItemId: string;
    menuItem: MenuItemEntity;
    name: string;
    extraPrice: number;
    isActive: ActiveStatus;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
}
