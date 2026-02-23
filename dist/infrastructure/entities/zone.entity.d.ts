import { ZoneModel } from '../../domain/models/zone.model';
export declare class ZoneEntity implements ZoneModel {
    id: number;
    name: string;
    description: string;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
}
