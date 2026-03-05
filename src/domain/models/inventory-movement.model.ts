import { InventoryMovementType } from '../enums/enum';

export class InventoryMovementModel {
    id: number;
    productId: number;
    zoneId: number;
    type: InventoryMovementType;
    quantity: number; // ขยับกี่ชิ้น
    note?: string; // หมายเหตุ
    userId?: number; // ไอดีคนทำรายการ
    createdAt?: Date;
}

export class CreateInventoryMovementRequest {
    productId: number;
    zoneId: number;
    type: InventoryMovementType;
    quantity: number;
    note?: string;
    userId?: number;
}

export class CreateInventoryMovementResponse extends InventoryMovementModel { }

export class LoadAllInventoryMovementRequest { }

export class LoadAllInventoryMovementResponse {
    items: InventoryMovementModel[];
    total: number;
}

export class LoadInventoryMovementByIdRequest {
    id: number;
}

export class LoadInventoryMovementByIdResponse extends InventoryMovementModel { }