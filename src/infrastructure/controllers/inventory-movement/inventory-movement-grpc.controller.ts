import { Controller, Inject } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { InventoryMovementUsecasesProxyModule } from '../../usecases-proxy/inventory-movement-usecases-proxy.module';
import { CreateInventoryMovementUseCase } from '../../../usecases/inventory-movement/createInventoryMovement.usecase';
import { LoadInventoryMovementUseCase } from '../../../usecases/inventory-movement/loadInventoryMovement.usecase';
import { LoadInventoryMovementByIdUseCase } from '../../../usecases/inventory-movement/loadInventoryMovementById.usecase';

import {
    CreateInventoryMovementRequest,
    LoadAllInventoryMovementRequest,
    LoadInventoryMovementByIdRequest
} from '../../../domain/models/inventory-movement.model';

@Controller()
export class InventoryMovementGrpcController {
    constructor(
        @Inject(InventoryMovementUsecasesProxyModule.CREATE_INVENTORY_MOVEMENT_PROXY)
        private readonly createUseCase: CreateInventoryMovementUseCase,
        @Inject(InventoryMovementUsecasesProxyModule.LOAD_INVENTORY_MOVEMENT_PROXY)
        private readonly loadAllUseCase: LoadInventoryMovementUseCase,
        @Inject(InventoryMovementUsecasesProxyModule.LOAD_BY_ID_INVENTORY_MOVEMENT_PROXY)
        private readonly loadByIdUseCase: LoadInventoryMovementByIdUseCase,
    ) { }

    @GrpcMethod('InventoryMovementService', 'Create')
    async create(data: CreateInventoryMovementRequest) {
        return this.createUseCase.execute(data);
    }

    @GrpcMethod('InventoryMovementService', 'FindAll')
    async findAll(data: LoadAllInventoryMovementRequest) {
        return this.loadAllUseCase.execute(data);
    }

    @GrpcMethod('InventoryMovementService', 'FindOne')
    async findOne(data: LoadInventoryMovementByIdRequest) {
        return this.loadByIdUseCase.execute(data);
    }
}
