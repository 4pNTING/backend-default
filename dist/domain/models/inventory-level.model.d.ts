export declare class InventoryLevelModel {
    id: string;
    productId: string;
    zoneId: string;
    quantity: number;
    updatedAt?: Date;
    product?: any;
    zone?: any;
}
export declare class CreateInventoryLevelRequest {
    productId: string;
    zoneId: string;
    quantity: number;
}
export declare class CreateInventoryLevelResponse extends InventoryLevelModel {
}
export declare class UpdateInventoryLevelRequest {
    id: string;
    quantity: number;
}
export declare class UpdateInventoryLevelResponse {
    id: string;
    success: boolean;
}
export declare class LoadAllInventoryLevelRequest {
}
export declare class LoadAllInventoryLevelResponse {
    items: InventoryLevelModel[];
    total: number;
}
export declare class LoadInventoryLevelByIdRequest {
    id: string;
}
export declare class LoadInventoryLevelByIdResponse extends InventoryLevelModel {
}
export declare class LoadInventoryLevelByProductAndZoneRequest {
    productId: string;
    zoneId: string;
}
export declare class LoadInventoryLevelByProductAndZoneResponse extends InventoryLevelModel {
}
