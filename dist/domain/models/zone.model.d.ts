export declare class ZoneModel {
    id: number;
    name: string;
    description?: string;
    isActive?: boolean;
    createdAt?: Date;
    updatedAt?: Date;
}
export declare class CreateZoneRequest {
    name: string;
    description?: string;
    isActive?: boolean;
}
export declare class CreateZoneResponse extends ZoneModel {
}
export declare class UpdateZoneRequest {
    id: number;
    name?: string;
    description?: string;
    isActive?: boolean;
}
export declare class UpdateZoneResponse {
    id: number;
    success: boolean;
}
export declare class DeleteZoneRequest {
    id: number;
}
export declare class DeleteZoneResponse {
    id: number;
    success: boolean;
}
export declare class RestoreZoneRequest {
    id: number;
}
export declare class RestoreZoneResponse extends ZoneModel {
}
export declare class LoadAllZoneRequest {
}
export declare class LoadAllZoneResponse {
    items: ZoneModel[];
    total: number;
}
export declare class LoadZoneByIdRequest {
    id: number;
}
export declare class LoadZoneByIdResponse extends ZoneModel {
}
