import { ActiveStatus } from '../enums/enum';
export declare class MenuOptionModel {
    _id: string;
    menuItemId: string;
    name: string;
    extraPrice: number;
    isActive: ActiveStatus;
    createdAt?: Date;
    updatedAt?: Date;
}
export declare class CreateMenuOptionRequest {
    menuItemId: string;
    name: string;
    extraPrice?: number;
    isActive?: ActiveStatus;
}
export declare class CreateMenuOptionResponse extends MenuOptionModel {
}
export declare class UpdateMenuOptionRequest {
    _id: string;
    name?: string;
    extraPrice?: number;
    isActive?: ActiveStatus;
}
export declare class UpdateMenuOptionResponse {
    _id: string;
}
export declare class DeleteMenuOptionRequest {
    _id: string;
}
export declare class DeleteMenuOptionResponse {
    _id: string;
}
export declare class LoadMenuOptionByItemRequest {
    menuItemId: string;
}
export declare class LoadMenuOptionByItemResponse {
    items: MenuOptionModel[];
}
export declare class LoadMenuOptionByIdRequest {
    _id: string;
}
export declare class LoadMenuOptionByIdResponse extends MenuOptionModel {
}
