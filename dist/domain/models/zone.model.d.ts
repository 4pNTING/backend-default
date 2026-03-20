import { ActiveStatus } from '../enums/enum';
export declare class ZoneModel {
    id: string;
    name: string;
    isActive?: ActiveStatus;
    createdAt?: Date;
    updatedAt?: Date;
}
export declare class CreateZoneRequest {
    name: string;
    isActive?: ActiveStatus;
}
export declare class CreateZoneResponse extends ZoneModel {
}
export declare class UpdateZoneRequest {
    id: string;
    name?: string;
    isActive?: ActiveStatus;
}
export declare class UpdateZoneResponse {
    id: string;
}
export declare class DeleteZoneRequest {
    id: string;
}
export declare class DeleteZoneResponse {
    id: string;
}
export declare class RestoreZoneRequest {
    id: string;
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
    id: string;
}
export declare class LoadZoneByIdResponse extends ZoneModel {
}
