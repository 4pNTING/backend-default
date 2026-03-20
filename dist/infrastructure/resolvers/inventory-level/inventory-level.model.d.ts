import { Product } from '../product/product.model';
import { Zone } from '../zone/zone.model';
export declare class InventoryLevel {
    _id: string;
    productId: string;
    zoneId: string;
    quantity: number;
    updatedAt?: Date;
    product?: Product;
    zone?: Zone;
}
export declare class LoadInventoryLevelResponse {
    count: number;
    inventoryLevel: InventoryLevel[];
}
export declare class LoadInventoryLevelByIdResponse {
    inventoryLevel: InventoryLevel;
}
export declare class CreateInventoryLevelResponse {
    inventoryLevel: InventoryLevel;
}
export declare class UpdateInventoryLevelResponse {
    inventoryLevel: InventoryLevel;
}
export declare class CreateInventoryLevelDto {
    productId: string;
    zoneId: string;
    quantity: number;
}
export declare class UpdateInventoryLevelDto {
    _id: string;
    quantity: number;
}
export declare class LoadInventoryLevelByIdDto {
    _id: string;
}
export declare class LoadInventoryLevelByProductAndZoneDto {
    productId: string;
    zoneId: string;
}
export declare class LoadInventoryLevelDto {
    page?: number;
    limit?: number;
    productId?: string;
    zoneId?: string;
}
