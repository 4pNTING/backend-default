import { CreateZoneRequest, UpdateZoneRequest } from '../../../src/domain/models/zone.model';
import { QueryProps } from '../../../src/domain/models/query.model';
import { CreateZoneUsecase } from '../../../src/usecases/zone/createZone.usecase';
import { UpdateZoneUsecase } from '../../../src/usecases/zone/updateZone.usecase';
import { DeleteZoneUsecase } from '../../../src/usecases/zone/deleteZone.usecase';
import { LoadAllZoneUsecase } from '../../../src/usecases/zone/loadAllZone.usecase';
import { LoadZoneByIdUsecase } from '../../../src/usecases/zone/loadZoneById.usecase';
import { RestoreZoneUsecase } from '../../../src/usecases/zone/restoreZone.usecase';
export declare class ZoneController {
    private readonly createZoneUseCase;
    private readonly updateZoneUseCase;
    private readonly deleteZoneUseCase;
    private readonly loadAllZoneUseCase;
    private readonly loadZoneByIdUseCase;
    private readonly restoreZoneUseCase;
    constructor(createZoneUseCase: CreateZoneUsecase, updateZoneUseCase: UpdateZoneUsecase, deleteZoneUseCase: DeleteZoneUsecase, loadAllZoneUseCase: LoadAllZoneUsecase, loadZoneByIdUseCase: LoadZoneByIdUsecase, restoreZoneUseCase: RestoreZoneUsecase);
    findAll(query: QueryProps): Promise<import("../../../src/domain/models/zone.model").LoadAllZoneResponse>;
    findOne(id: string): Promise<import("../../../src/domain/models/zone.model").LoadZoneByIdResponse>;
    create(body: CreateZoneRequest): Promise<import("../../../src/domain/models/zone.model").CreateZoneResponse>;
    update(id: string, body: Omit<UpdateZoneRequest, 'id'>): Promise<void>;
    delete(id: string): Promise<void>;
    restore(id: string): Promise<void>;
}
