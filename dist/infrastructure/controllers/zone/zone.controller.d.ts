import { CreateZoneRequest, UpdateZoneRequest } from '../../../domain/models/zone.model.js';
import { QueryProps } from '../../../domain/models/query.model.js';
import { CreateZoneUsecase } from '../../../usecases/zone/createZone.usecase.js';
import { UpdateZoneUsecase } from '../../../usecases/zone/updateZone.usecase.js';
import { DeleteZoneUsecase } from '../../../usecases/zone/deleteZone.usecase.js';
import { LoadAllZoneUsecase } from '../../../usecases/zone/loadAllZone.usecase.js';
import { LoadZoneByIdUsecase } from '../../../usecases/zone/loadZoneById.usecase.js';
import { RestoreZoneUsecase } from '../../../usecases/zone/restoreZone.usecase.js';
export declare class ZoneController {
    private readonly createZoneUseCase;
    private readonly updateZoneUseCase;
    private readonly deleteZoneUseCase;
    private readonly loadAllZoneUseCase;
    private readonly loadZoneByIdUseCase;
    private readonly restoreZoneUseCase;
    constructor(createZoneUseCase: CreateZoneUsecase, updateZoneUseCase: UpdateZoneUsecase, deleteZoneUseCase: DeleteZoneUsecase, loadAllZoneUseCase: LoadAllZoneUsecase, loadZoneByIdUseCase: LoadZoneByIdUsecase, restoreZoneUseCase: RestoreZoneUsecase);
    findAll(query: QueryProps): Promise<import("../../../domain/models/zone.model.js").LoadAllZoneResponse>;
    findOne(id: string): Promise<import("../../../domain/models/zone.model.js").LoadZoneByIdResponse>;
    create(body: CreateZoneRequest): Promise<import("../../../domain/models/zone.model.js").CreateZoneResponse>;
    update(id: string, body: Omit<UpdateZoneRequest, '_id'>): Promise<void>;
    delete(id: string): Promise<void>;
    restore(id: string): Promise<void>;
}
