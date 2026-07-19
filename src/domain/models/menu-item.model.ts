import { ActiveStatus } from '../enums/enum';

// ─── Base Model ───────────────────────────────────────────
export class MenuItemModel {
    _id: string;
    uniqueId: number;
    uid: string;
    name: string;
    description?: string;
    photo?: string;
    price: number;
    categoryId: string;    // FK → Category
    isActive: ActiveStatus;
    createdAt?: Date;
    updatedAt?: Date;
}

// ─── Create ───────────────────────────────────────────────
export class CreateMenuItemRequest {
    name: string;
    description?: string;
    photo?: string;
    price: number;
    categoryId: string;
    isActive?: ActiveStatus;
}

export class CreateMenuItemResponse extends MenuItemModel { }

// ─── Update ───────────────────────────────────────────────
export class UpdateMenuItemRequest {
    _id: string;
    name?: string;
    description?: string;
    photo?: string;
    price?: number;
    categoryId?: string;
    isActive?: ActiveStatus;
}

export class UpdateMenuItemResponse {
    _id: string;
}

// ─── Delete / Restore ─────────────────────────────────────
export class DeleteMenuItemRequest {
    _id: string;
}

export class DeleteMenuItemResponse {
    _id: string;
}

export class RestoreMenuItemRequest {
    _id: string;
}

export class RestoreMenuItemResponse extends MenuItemModel { }

// ─── Load ─────────────────────────────────────────────────
export class LoadAllMenuItemRequest { }

export class LoadAllMenuItemResponse {
    items: MenuItemModel[];
    total: number;
}

export class LoadMenuItemByIdRequest {
    _id: string;
}

export class LoadMenuItemByIdResponse extends MenuItemModel { }

export class LoadMenuItemByCategoryRequest {
    categoryId: string;
}

export class LoadMenuItemByCategoryResponse {
    items: MenuItemModel[];
}
