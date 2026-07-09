import { ActiveStatus, TableStatus } from '../../../domain/enums/enum';
export { ActiveStatus, TableStatus };
export declare class Table {
    _id: string;
    number: string;
    zoneId: string;
    capacity: number;
    status: TableStatus;
    isActive?: ActiveStatus;
    createdAt?: Date;
    updatedAt?: Date;
}
export declare class LoadTableResponse {
    table: Table[];
}
export declare class LoadTableByIdResponse {
    table: Table;
}
export declare class CreateTableResponse {
    table: Table;
}
export declare class UpdateTableResponse {
    table: Table;
}
export declare class DeleteTableResponse {
    table: Table;
}
export declare class RestoreTableResponse {
    table: Table;
}
export declare class CreateTableDto {
    number: string;
    zoneId: string;
    capacity?: number;
    status?: TableStatus;
    isActive?: ActiveStatus;
}
export declare class UpdateTableDto {
    _id: string;
    number?: string;
    zoneId?: string;
    capacity?: number;
    status?: TableStatus;
    isActive?: ActiveStatus;
}
export declare class LoadTableDto {
    page?: number;
    limit?: number;
    zoneId?: string;
    isActive?: ActiveStatus;
    keyword?: string;
    sortField?: string;
    sortDirection?: string;
}
export declare class LoadTableByIdDto {
    _id: string;
}
export declare class DeleteTableDto {
    _id: string;
}
export declare class RestoreTableDto {
    _id: string;
}
export declare class LoadTableByZoneDto {
    zoneId: string;
}
