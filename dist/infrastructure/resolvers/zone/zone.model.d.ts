export declare class Zone {
    _id: number;
    name: string;
    description?: string;
    isActive?: boolean;
    createdAt?: Date;
    updatedAt?: Date;
}
export declare class LoadZoneResponse {
    count: number;
    zone: Zone[];
}
export declare class LoadZoneByIdResponse {
    zone: Zone;
}
export declare class CreateZoneResponse {
    zone: Zone;
}
export declare class UpdateZoneResponse {
    zone: Zone;
}
export declare class DeleteZoneResponse {
    zone: Zone;
}
export declare class RestoreZoneResponse {
    zone: Zone;
}
export declare class CreateZoneDto {
    name: string;
    description?: string;
    isActive?: boolean;
}
export declare class UpdateZoneDto {
    _id: number;
    name?: string;
    description?: string;
    isActive?: boolean;
}
export declare class LoadZoneByIdDto {
    _id: number;
}
export declare class DeleteZoneDto {
    _id: number;
}
export declare class RestoreZoneDto {
    _id: number;
}
export declare class LoadZoneDto {
    page?: number;
    limit?: number;
    isActive?: string;
    keyword?: string;
}
