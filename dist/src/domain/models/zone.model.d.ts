import { ActiveStatus } from '../enums/enum';
export declare class ZoneModel {
    _id: string;
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
    _id: string;
    name?: string;
    isActive?: ActiveStatus;
}
export declare class UpdateZoneResponse {
    _id: string;
}
export declare class DeleteZoneRequest {
    _id: string;
}
export declare class DeleteZoneResponse {
    _id: string;
}
export declare class RestoreZoneRequest {
    _id: string;
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
    _id: string;
}
export declare class LoadZoneByIdResponse extends ZoneModel {
}
