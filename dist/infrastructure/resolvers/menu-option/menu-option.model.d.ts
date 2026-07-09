import { ActiveStatus } from '../../../domain/enums/enum';
export declare class MenuOption {
    _id: string;
    menuItemId: string;
    name: string;
    extraPrice: number;
    isActive?: ActiveStatus;
    createdAt?: Date;
    updatedAt?: Date;
}
export declare class LoadMenuOptionResponse {
    menuOption: MenuOption[];
}
export declare class CreateMenuOptionResponse {
    menuOption: MenuOption;
}
export declare class UpdateMenuOptionResponse {
    menuOption: MenuOption;
}
export declare class DeleteMenuOptionResponse {
    _id: string;
}
export declare class CreateMenuOptionDto {
    menuItemId: string;
    name: string;
    extraPrice?: number;
    isActive?: ActiveStatus;
}
export declare class UpdateMenuOptionDto {
    _id: string;
    name?: string;
    extraPrice?: number;
    isActive?: ActiveStatus;
}
export declare class DeleteMenuOptionDto {
    _id: string;
}
export declare class LoadMenuOptionByMenuItemDto {
    menuItemId: string;
}
