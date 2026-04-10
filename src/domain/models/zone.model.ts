import { ActiveStatus } from '../enums/enum';

// Base Model
export class ZoneModel {
    _id: string;
    name: string;
    isActive?: ActiveStatus;
    createdAt?: Date;
    updatedAt?: Date;
}

export class CreateZoneRequest {
    name: string;
    isActive?: ActiveStatus;
}

export class CreateZoneResponse extends ZoneModel { }

export class UpdateZoneRequest {
    _id: string;
    name?: string;
    isActive?: ActiveStatus;
}

export class UpdateZoneResponse {
    _id: string;
}

export class DeleteZoneRequest {
    _id: string;
}

export class DeleteZoneResponse {
    _id: string;
}

export class RestoreZoneRequest {
    _id: string;
}

export class RestoreZoneResponse extends ZoneModel { }

export class LoadAllZoneRequest {
    // QueryProps handled in controller/resolver
}

export class LoadAllZoneResponse {
    items: ZoneModel[];
}

export class LoadZoneByIdRequest {
    _id: string;
}

export class LoadZoneByIdResponse extends ZoneModel { }
