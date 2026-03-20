import { CreateZoneUsecase } from '../../../usecases/zone/createZone.usecase';
import { UpdateZoneUsecase } from '../../../usecases/zone/updateZone.usecase';
import { DeleteZoneUsecase } from '../../../usecases/zone/deleteZone.usecase';
import { LoadAllZoneUsecase } from '../../../usecases/zone/loadAllZone.usecase';
import { LoadZoneByIdUsecase } from '../../../usecases/zone/loadZoneById.usecase';
import { RestoreZoneUsecase } from '../../../usecases/zone/restoreZone.usecase';
import { CreateZoneDto, UpdateZoneDto, DeleteZoneDto, LoadZoneDto, LoadZoneByIdDto, RestoreZoneDto } from './zone.model';
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
        zone: import("../../../domain/models/zone.model").ZoneModel[];
    }>;
    loadZoneById(input: LoadZoneByIdDto): Promise<{
        zone: import("../../../domain/models/zone.model").LoadZoneByIdResponse;
    }>;
    createZone(input: CreateZoneDto): Promise<{
        zone: import("../../../domain/models/zone.model").CreateZoneResponse;
    }>;
    updateZone(input: UpdateZoneDto): Promise<{
        zone: import("../../../domain/models/zone.model").LoadZoneByIdResponse;
    }>;
    deleteZone(input: DeleteZoneDto): Promise<{
        zone: {
            _id: string;
        };
    }>;
    restoreZone(input: RestoreZoneDto): Promise<{
        zone: import("../../../domain/models/zone.model").LoadZoneByIdResponse;
    }>;
}
