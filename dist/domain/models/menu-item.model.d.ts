import { ActiveStatus } from '../enums/enum';
export declare class MenuItemModel {
    _id: string;
    uniqueId: number;
    uid: string;
    name: string;
    description?: string;
    photo?: string;
    price: number;
    categoryId: string;
    isActive: ActiveStatus;
    createdAt?: Date;
    updatedAt?: Date;
}
export declare class CreateMenuItemRequest {
    name: string;
    description?: string;
    photo?: string;
    price: number;
    categoryId: string;
    isActive?: ActiveStatus;
}
export declare class CreateMenuItemResponse extends MenuItemModel {
}
export declare class UpdateMenuItemRequest {
    _id: string;
    name?: string;
    description?: string;
    photo?: string;
    price?: number;
    categoryId?: string;
    isActive?: ActiveStatus;
}
export declare class UpdateMenuItemResponse {
    _id: string;
}
export declare class DeleteMenuItemRequest {
    _id: string;
}
export declare class DeleteMenuItemResponse {
    _id: string;
}
export declare class RestoreMenuItemRequest {
    _id: string;
}
export declare class RestoreMenuItemResponse extends MenuItemModel {
}
export declare class LoadAllMenuItemRequest {
}
export declare class LoadAllMenuItemResponse {
    items: MenuItemModel[];
    total: number;
}
export declare class LoadMenuItemByIdRequest {
    _id: string;
}
export declare class LoadMenuItemByIdResponse extends MenuItemModel {
}
export declare class LoadMenuItemByCategoryRequest {
    categoryId: string;
}
export declare class LoadMenuItemByCategoryResponse {
    items: MenuItemModel[];
}
