import { InventoryMovementType } from '../../../domain/enums/enum';
export declare class InventoryMovement {
    _id: string;
    productId: string;
    zoneId: string;
    type: InventoryMovementType;
    quantity: number;
    note?: string;
    userId?: string;
    createdAt?: Date;
}
export declare class LoadInventoryMovementResponse {
    count: number;
    inventoryMovement: InventoryMovement[];
}
export declare class LoadInventoryMovementByIdResponse {
    inventoryMovement: InventoryMovement;
}
export declare class CreateInventoryMovementResponse {
    inventoryMovement: InventoryMovement;
}
export declare class CreateInventoryMovementDto {
    productId: string;
    zoneId: string;
    type: InventoryMovementType;
    quantity: number;
    note?: string;
    userId?: string;
}
export declare class LoadInventoryMovementByIdDto {
    _id: string;
}
export declare class LoadInventoryMovementDto {
    page?: number;
    limit?: number;
}
