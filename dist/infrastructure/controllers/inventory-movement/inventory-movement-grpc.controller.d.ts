import { CreateInventoryMovementUseCase } from '../../../usecases/inventory-movement/createInventoryMovement.usecase';
import { LoadInventoryMovementUseCase } from '../../../usecases/inventory-movement/loadInventoryMovement.usecase';
import { LoadInventoryMovementByIdUseCase } from '../../../usecases/inventory-movement/loadInventoryMovementById.usecase';
import { CreateInventoryMovementRequest, LoadAllInventoryMovementRequest, LoadInventoryMovementByIdRequest } from '../../../domain/models/inventory-movement.model';
export declare class InventoryMovementGrpcController {
    private readonly createUseCase;
    private readonly loadAllUseCase;
    private readonly loadByIdUseCase;
    constructor(createUseCase: CreateInventoryMovementUseCase, loadAllUseCase: LoadInventoryMovementUseCase, loadByIdUseCase: LoadInventoryMovementByIdUseCase);
    create(data: CreateInventoryMovementRequest): Promise<import("../../../domain/models/inventory-movement.model").CreateInventoryMovementResponse>;
    findAll(data: LoadAllInventoryMovementRequest): Promise<import("../../../domain/models/inventory-movement.model").LoadAllInventoryMovementResponse>;
    findOne(data: LoadInventoryMovementByIdRequest): Promise<import("../../../domain/models/inventory-movement.model").LoadInventoryMovementByIdResponse>;
}
