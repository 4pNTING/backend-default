import { ActiveStatus } from '../enums/enum';

// Base Model
export class ZoneModel {
    _id: string;
    name: string;
    isActive?: ActiveStatus;
    createdAt?: Date;
    updatedAt?: Date;
}

// ==============================
// CREATE
// ==============================
export class CreateZoneRequest {
    name: string;
    isActive?: ActiveStatus;
}

export class CreateZoneResponse extends ZoneModel { }

// ==============================
// UPDATE
// ==============================
export class UpdateZoneRequest {
    _id: string;
    name?: string;
    isActive?: ActiveStatus;
}

export class UpdateZoneResponse {
    _id: string;
}

// ==============================
// DELETE
// ==============================
export class DeleteZoneRequest {
    _id: string;
}

export class DeleteZoneResponse {
    _id: string;
}

// ==============================
// RESTORE
// ==============================
export class RestoreZoneRequest {
    _id: string;
}

export class RestoreZoneResponse extends ZoneModel { }

// ==============================
// LOAD ALL
// ==============================
export class LoadAllZoneRequest {
    // QueryProps handled in controller/resolver
}

export class LoadAllZoneResponse {
    items: ZoneModel[];
    total: number;
}

// ==============================
// LOAD BY ID
// ==============================
export class LoadZoneByIdRequest {
    _id: string;
}

export class LoadZoneByIdResponse extends ZoneModel { }
