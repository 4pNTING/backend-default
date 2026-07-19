import { TableModel } from '../../domain/models/table.model';
import { ActiveStatus, TableStatus } from '../../domain/enums/enum';
import { ZoneEntity } from './zone.entity';
export declare class TableEntity implements TableModel {
    _id: string;
    uniqueId: number;
    uid: string;
    number: string;
    zoneId: string;
    zone: ZoneEntity;
    capacity: number;
    status: TableStatus;
    isActive: ActiveStatus;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
}
