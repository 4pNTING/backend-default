import { ActiveStatus, TableStatus } from '../enums/enum';
export declare class TableModel {
    _id: string;
    uniqueId: number;
    uid: string;
    number: string;
    zoneId: string;
    capacity: number;
    status: TableStatus;
    isActive: ActiveStatus;
    createdAt?: Date;
    updatedAt?: Date;
}
export declare class CreateTableRequest {
    number: string;
    zoneId: string;
    capacity?: number;
    status?: TableStatus;
    isActive?: ActiveStatus;
}
export declare class CreateTableResponse extends TableModel {
}
export declare class UpdateTableRequest {
    _id: string;
    number?: string;
    zoneId?: string;
    capacity?: number;
    status?: TableStatus;
    isActive?: ActiveStatus;
}
export declare class UpdateTableResponse {
    _id: string;
}
export declare class DeleteTableRequest {
    _id: string;
}
export declare class DeleteTableResponse {
    _id: string;
}
export declare class RestoreTableRequest {
    _id: string;
}
export declare class RestoreTableResponse extends TableModel {
}
export declare class LoadAllTableRequest {
}
export declare class LoadAllTableResponse {
    items: TableModel[];
    total: number;
}
export declare class LoadTableByIdRequest {
    _id: string;
}
export declare class LoadTableByIdResponse extends TableModel {
}
export declare class LoadTableByZoneRequest {
    zoneId: string;
}
export declare class LoadTableByZoneResponse {
    items: TableModel[];
}
