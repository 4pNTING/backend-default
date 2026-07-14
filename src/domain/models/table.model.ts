import { ActiveStatus, TableStatus } from '../enums/enum';

// ─── Base Model ───────────────────────────────────────────
export class TableModel {
    _id: string;
    number: string;       // เลขโต๊ะ เช่น "T01", "A5"
    zoneId: string;       // FK → Zone
    capacity: number;     // จำนวนที่นั่ง
    status: TableStatus;
    isActive: ActiveStatus;
    createdAt?: Date;
    updatedAt?: Date;
}

// ─── Create ───────────────────────────────────────────────
export class CreateTableRequest {
    number: string;
    zoneId: string;
    capacity?: number;   // optional — defaults to 2 in the action
    status?: TableStatus;
    isActive?: ActiveStatus;
}

export class CreateTableResponse extends TableModel { }

// ─── Update ───────────────────────────────────────────────
export class UpdateTableRequest {
    _id: string;
    number?: string;
    zoneId?: string;
    capacity?: number;
    status?: TableStatus;
    isActive?: ActiveStatus;
}

export class UpdateTableResponse {
    _id: string;
}

// ─── Delete / Restore ────────────────────────────────────
export class DeleteTableRequest {
    _id: string;
}

export class DeleteTableResponse {
    _id: string;
}

export class RestoreTableRequest {
    _id: string;
}

export class RestoreTableResponse extends TableModel { }

// ─── Load ────────────────────────────────────────────────
export class LoadAllTableRequest { }

export class LoadAllTableResponse {
    items: TableModel[];
    total: number;
}

export class LoadTableByIdRequest {
    _id: string;
}

export class LoadTableByIdResponse extends TableModel { }

export class LoadTableByZoneRequest {
    zoneId: string;
}

export class LoadTableByZoneResponse {
    items: TableModel[];
}
