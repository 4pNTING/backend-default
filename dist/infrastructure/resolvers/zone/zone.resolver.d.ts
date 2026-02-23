import { CreateZoneUsecase } from '../../../usecases/zone/createZone.usecase';
import { UpdateZoneUsecase } from '../../../usecases/zone/updateZone.usecase';
import { DeleteZoneUsecase } from '../../../usecases/zone/deleteZone.usecase';
import { LoadAllZoneUsecase } from '../../../usecases/zone/loadAllZone.usecase';
import { LoadZoneByIdUsecase } from '../../../usecases/zone/loadZoneById.usecase';
import { RestoreZoneUsecase } from '../../../usecases/zone/restoreZone.usecase';
import { Zone, CreateZoneDto, UpdateZoneDto, DeleteZoneDto, LoadZoneDto, LoadZoneByIdDto, RestoreZoneDto } from './zone.model';
export declare class ZoneResolver {
    private readonly createZoneUsecase;
    private readonly updateZoneUsecase;
    private readonly deleteZoneUsecase;
    private readonly loadAllZoneUsecase;
    private readonly loadZoneByIdUsecase;
    private readonly restoreZoneUsecase;
    constructor(createZoneUsecase: CreateZoneUsecase, updateZoneUsecase: UpdateZoneUsecase, deleteZoneUsecase: DeleteZoneUsecase, loadAllZoneUsecase: LoadAllZoneUsecase, loadZoneByIdUsecase: LoadZoneByIdUsecase, restoreZoneUsecase: RestoreZoneUsecase);
    loadZone(input: LoadZoneDto): Promise<{
        count: number;
        zone: {
            _id: number;
            id: number;
            name: string;
            description?: string;
            isActive?: boolean;
            createdAt?: Date;
            updatedAt?: Date;
        }[];
    }>;
    loadZoneById(input: LoadZoneByIdDto): Promise<{
        zone: {
            _id: number;
            id: number;
            name: string;
            description?: string;
            isActive?: boolean;
            createdAt?: Date;
            updatedAt?: Date;
        };
    }>;
    createZone(input: CreateZoneDto): Promise<{
        zone: {
            _id: number;
            id: number;
            name: string;
            description?: string;
            isActive?: boolean;
            createdAt?: Date;
            updatedAt?: Date;
        };
    }>;
    updateZone(input: UpdateZoneDto): Promise<{
        zone: {
            _id: number;
            id: number;
            name: string;
            description?: string;
            isActive?: boolean;
            createdAt?: Date;
            updatedAt?: Date;
        };
    }>;
    deleteZone(input: DeleteZoneDto): Promise<{
        zone: Zone;
    }>;
    restoreZone(input: RestoreZoneDto): Promise<{
        zone: {
            _id: number;
            id: number;
            name: string;
            description?: string;
            isActive?: boolean;
            createdAt?: Date;
            updatedAt?: Date;
        };
    }>;
}
