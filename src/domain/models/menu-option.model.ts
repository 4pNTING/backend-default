import { ActiveStatus } from '../enums/enum';

// ─── Base Model ───────────────────────────────────────────
export class MenuOptionModel {
    _id: string;
    menuItemId: string;     // FK → MenuItem
    name: string;           // เช่น "เผ็ดน้อย", "เพิ่มไข่"
    extraPrice: number;     // 0 = ฟรี
    isActive: ActiveStatus;
    createdAt?: Date;
    updatedAt?: Date;
}

// ─── Create ───────────────────────────────────────────────
export class CreateMenuOptionRequest {
    menuItemId: string;
    name: string;
    extraPrice?: number;
    isActive?: ActiveStatus;
}

export class CreateMenuOptionResponse extends MenuOptionModel { }

// ─── Update ───────────────────────────────────────────────
export class UpdateMenuOptionRequest {
    _id: string;
    name?: string;
    extraPrice?: number;
    isActive?: ActiveStatus;
}

export class UpdateMenuOptionResponse {
    _id: string;
}

// ─── Delete ───────────────────────────────────────────────
export class DeleteMenuOptionRequest {
    _id: string;
}

export class DeleteMenuOptionResponse {
    _id: string;
}

// ─── Load ─────────────────────────────────────────────────
export class LoadMenuOptionByItemRequest {
    menuItemId: string;
}

export class LoadMenuOptionByItemResponse {
    items: MenuOptionModel[];
}

export class LoadMenuOptionByIdRequest {
    _id: string;
}

export class LoadMenuOptionByIdResponse extends MenuOptionModel { }
