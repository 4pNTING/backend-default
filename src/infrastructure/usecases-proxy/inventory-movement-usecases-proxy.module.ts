import { DynamicModule, Module } from '@nestjs/common';
import { DatabaseInventoryMovementRepository } from '../repositories/inventory-movement/inventory-movement.repository';
import { DatabaseInventoryLevelRepository } from '../repositories/inventory-level/inventory-level.repository';
import { RepositoriesModule } from '../repositories/repositories.module';

import { CreateInventoryMovementUseCase } from '../../usecases/inventory-movement/createInventoryMovement.usecase';
import { LoadInventoryMovementUseCase } from '../../usecases/inventory-movement/loadInventoryMovement.usecase';
import { LoadInventoryMovementByIdUseCase } from '../../usecases/inventory-movement/loadInventoryMovementById.usecase';

@Module({
    imports: [RepositoriesModule],
})
export class InventoryMovementUsecasesProxyModule {
    static CREATE_INVENTORY_MOVEMENT_PROXY = 'CreateInventoryMovementProxy';
    static LOAD_INVENTORY_MOVEMENT_PROXY = 'LoadInventoryMovementProxy';
    static LOAD_BY_ID_INVENTORY_MOVEMENT_PROXY = 'LoadByIdInventoryMovementProxy';

    static register(): DynamicModule {
        return {
            module: InventoryMovementUsecasesProxyModule,
            providers: [
                {
                    inject: [DatabaseInventoryMovementRepository, DatabaseInventoryLevelRepository],
                    provide: InventoryMovementUsecasesProxyModule.CREATE_INVENTORY_MOVEMENT_PROXY,
                    useFactory: (movementRepo: DatabaseInventoryMovementRepository, levelRepo: DatabaseInventoryLevelRepository) =>
                        new CreateInventoryMovementUseCase(movementRepo, levelRepo),
                },
                {
                    inject: [DatabaseInventoryMovementRepository],
                    provide: InventoryMovementUsecasesProxyModule.LOAD_INVENTORY_MOVEMENT_PROXY,
                    useFactory: (repo: DatabaseInventoryMovementRepository) => new LoadInventoryMovementUseCase(repo),
                },
                {
                    inject: [DatabaseInventoryMovementRepository],
                    provide: InventoryMovementUsecasesProxyModule.LOAD_BY_ID_INVENTORY_MOVEMENT_PROXY,
                    useFactory: (repo: DatabaseInventoryMovementRepository) => new LoadInventoryMovementByIdUseCase(repo),
                },
            ],
            exports: [
                InventoryMovementUsecasesProxyModule.CREATE_INVENTORY_MOVEMENT_PROXY,
                InventoryMovementUsecasesProxyModule.LOAD_INVENTORY_MOVEMENT_PROXY,
                InventoryMovementUsecasesProxyModule.LOAD_BY_ID_INVENTORY_MOVEMENT_PROXY,
            ],
        };
    }
}
