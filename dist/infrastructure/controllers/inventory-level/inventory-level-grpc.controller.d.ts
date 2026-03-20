import { LoadInventoryLevelUseCase } from '../../../usecases/inventory-level/loadInventoryLevel.usecase';
import { LoadInventoryLevelByIdUseCase } from '../../../usecases/inventory-level/loadInventoryLevelById.usecase';
import { LoadInventoryLevelByProductAndZoneUseCase } from '../../../usecases/inventory-level/loadInventoryLevelByProductAndZone.usecase';
import { CreateInventoryLevelUseCase } from '../../../usecases/inventory-level/createInventoryLevel.usecase';
import { UpdateInventoryLevelUseCase } from '../../../usecases/inventory-level/updateInventoryLevel.usecase';
import { CreateInventoryLevelRequest, LoadAllInventoryLevelRequest, LoadInventoryLevelByIdRequest, LoadInventoryLevelByProductAndZoneRequest, UpdateInventoryLevelRequest } from '../../../domain/models/inventory-level.model';
export declare class InventoryLevelGrpcController {
    private readonly createUseCase;
    private readonly loadAllUseCase;
    private readonly loadByIdUseCase;
    private readonly loadByProductZoneUseCase;
    private readonly updateUseCase;
    constructor(createUseCase: CreateInventoryLevelUseCase, loadAllUseCase: LoadInventoryLevelUseCase, loadByIdUseCase: LoadInventoryLevelByIdUseCase, loadByProductZoneUseCase: LoadInventoryLevelByProductAndZoneUseCase, updateUseCase: UpdateInventoryLevelUseCase);
    create(data: CreateInventoryLevelRequest): Promise<import("../../../domain/models/inventory-level.model").CreateInventoryLevelResponse>;
    findAll(data: LoadAllInventoryLevelRequest): Promise<import("../../../domain/models/inventory-level.model").LoadAllInventoryLevelResponse>;
    findOne(data: LoadInventoryLevelByIdRequest): Promise<import("../../../domain/models/inventory-level.model").LoadInventoryLevelByIdResponse>;
    findByProductAndZone(data: LoadInventoryLevelByProductAndZoneRequest): Promise<import("../../../domain/models/inventory-level.model").LoadInventoryLevelByProductAndZoneResponse>;
    update(data: UpdateInventoryLevelRequest): Promise<void>;
}
