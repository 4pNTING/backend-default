import { InventoryMovementType } from '../enums/enum';
export declare class InventoryMovementModel {
    id: string;
    productId: string;
    zoneId: string;
    type: InventoryMovementType;
    quantity: number;
    note?: string;
    userId?: string;
    createdAt?: Date;
}
export declare class CreateInventoryMovementRequest {
    productId: string;
    zoneId: string;
    type: InventoryMovementType;
    quantity: number;
    note?: string;
    userId?: string;
}
export declare class CreateInventoryMovementResponse extends InventoryMovementModel {
}
export declare class LoadAllInventoryMovementRequest {
}
export declare class LoadAllInventoryMovementResponse {
    items: InventoryMovementModel[];
    total: number;
}
export declare class LoadInventoryMovementByIdRequest {
    id: string;
}
export declare class LoadInventoryMovementByIdResponse extends InventoryMovementModel {
}
