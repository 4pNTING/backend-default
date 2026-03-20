import { ActiveStatus } from '../../common/graphql/common.model';
export { ActiveStatus };
export declare class Zone {
    _id: string;
    name: string;
    isActive?: ActiveStatus;
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
    isActive?: ActiveStatus;
}
export declare class UpdateZoneDto {
    _id: string;
    name?: string;
    description?: string;
    isActive?: ActiveStatus;
}
export declare class LoadZoneByIdDto {
    _id: string;
}
export declare class DeleteZoneDto {
    _id: string;
}
export declare class RestoreZoneDto {
    _id: string;
}
export declare class LoadZoneDto {
    page?: number;
    limit?: number;
    isActive: ActiveStatus;
    keyword?: string;
}
