import { ActiveStatus } from '../enums/enum';

// Base Model
export class ZoneModel {
    id: string;
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
    id: string;
    name?: string;
    isActive?: ActiveStatus;
}

export class UpdateZoneResponse {
    id: string;
}

// ==============================
// DELETE
// ==============================
export class DeleteZoneRequest {
    id: string;
}

export class DeleteZoneResponse {
    id: string;
}

// ==============================
// RESTORE
// ==============================
export class RestoreZoneRequest {
    id: string;
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
    id: string;
}

export class LoadZoneByIdResponse extends ZoneModel { }
