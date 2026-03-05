import { Controller, Inject } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { InventoryLevelUsecasesProxyModule } from '../../usecases-proxy/inventory-level-usecases-proxy.module';
import { LoadInventoryLevelUseCase } from '../../../usecases/inventory-level/loadInventoryLevel.usecase';
import { LoadInventoryLevelByIdUseCase } from '../../../usecases/inventory-level/loadInventoryLevelById.usecase';
import { LoadInventoryLevelByProductAndZoneUseCase } from '../../../usecases/inventory-level/loadInventoryLevelByProductAndZone.usecase';
import { CreateInventoryLevelUseCase } from '../../../usecases/inventory-level/createInventoryLevel.usecase';
import { UpdateInventoryLevelUseCase } from '../../../usecases/inventory-level/updateInventoryLevel.usecase';

import {
    CreateInventoryLevelRequest,
    LoadAllInventoryLevelRequest,
    LoadInventoryLevelByIdRequest,
    LoadInventoryLevelByProductAndZoneRequest,
    UpdateInventoryLevelRequest
} from '../../../domain/models/inventory-level.model';

@Controller()
export class InventoryLevelGrpcController {
    constructor(
        @Inject(InventoryLevelUsecasesProxyModule.CREATE_INVENTORY_LEVEL_PROXY)
        private readonly createUseCase: CreateInventoryLevelUseCase,
        @Inject(InventoryLevelUsecasesProxyModule.LOAD_INVENTORY_LEVEL_PROXY)
        private readonly loadAllUseCase: LoadInventoryLevelUseCase,
        @Inject(InventoryLevelUsecasesProxyModule.LOAD_BY_ID_INVENTORY_LEVEL_PROXY)
        private readonly loadByIdUseCase: LoadInventoryLevelByIdUseCase,
        @Inject(InventoryLevelUsecasesProxyModule.LOAD_BY_PRODUCT_ZONE_INVENTORY_LEVEL_PROXY)
        private readonly loadByProductZoneUseCase: LoadInventoryLevelByProductAndZoneUseCase,
        @Inject(InventoryLevelUsecasesProxyModule.UPDATE_INVENTORY_LEVEL_PROXY)
        private readonly updateUseCase: UpdateInventoryLevelUseCase,
    ) { }

    @GrpcMethod('InventoryLevelService', 'Create')
    async create(data: CreateInventoryLevelRequest) {
        return this.createUseCase.execute(data);
    }

    @GrpcMethod('InventoryLevelService', 'FindAll')
    async findAll(data: LoadAllInventoryLevelRequest) {
        return this.loadAllUseCase.execute(data);
    }

    @GrpcMethod('InventoryLevelService', 'FindOne')
    async findOne(data: LoadInventoryLevelByIdRequest) {
        return this.loadByIdUseCase.execute(data);
    }

    @GrpcMethod('InventoryLevelService', 'FindByProductAndZone')
    async findByProductAndZone(data: LoadInventoryLevelByProductAndZoneRequest) {
        return this.loadByProductZoneUseCase.execute(data);
    }

    @GrpcMethod('InventoryLevelService', 'Update')
    async update(data: UpdateInventoryLevelRequest) {
        return this.updateUseCase.execute(data);
    }
}
