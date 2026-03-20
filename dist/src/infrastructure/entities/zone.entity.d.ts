import { ZoneModel } from '../../domain/models/zone.model';
import { ActiveStatus } from '../../domain/enums/enum';
export declare class ZoneEntity implements ZoneModel {
    _id: string;
    name: string;
    isActive: ActiveStatus;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
}
