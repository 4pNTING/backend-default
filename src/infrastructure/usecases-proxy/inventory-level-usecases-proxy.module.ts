import { DynamicModule, Module } from '@nestjs/common';
import { DatabaseInventoryLevelRepository } from '../repositories/inventory-level/inventory-level.repository';
import { RepositoriesModule } from '../repositories/repositories.module';

import { LoadInventoryLevelUseCase } from '../../usecases/inventory-level/loadInventoryLevel.usecase';
import { LoadInventoryLevelByIdUseCase } from '../../usecases/inventory-level/loadInventoryLevelById.usecase';
import { LoadInventoryLevelByProductAndZoneUseCase } from '../../usecases/inventory-level/loadInventoryLevelByProductAndZone.usecase';
import { CreateInventoryLevelUseCase } from '../../usecases/inventory-level/createInventoryLevel.usecase';
import { UpdateInventoryLevelUseCase } from '../../usecases/inventory-level/updateInventoryLevel.usecase';

@Module({
    imports: [RepositoriesModule],
})
export class InventoryLevelUsecasesProxyModule {
    static LOAD_INVENTORY_LEVEL_PROXY = 'LoadInventoryLevelProxy';
    static LOAD_BY_ID_INVENTORY_LEVEL_PROXY = 'LoadByIdInventoryLevelProxy';
    static LOAD_BY_PRODUCT_ZONE_INVENTORY_LEVEL_PROXY = 'LoadByProductZoneInventoryLevelProxy';
    static CREATE_INVENTORY_LEVEL_PROXY = 'CreateInventoryLevelProxy';
    static UPDATE_INVENTORY_LEVEL_PROXY = 'UpdateInventoryLevelProxy';

    static register(): DynamicModule {
        return {
            module: InventoryLevelUsecasesProxyModule,
            providers: [
                {
                    inject: [DatabaseInventoryLevelRepository],
                    provide: InventoryLevelUsecasesProxyModule.LOAD_INVENTORY_LEVEL_PROXY,
                    useFactory: (repo: DatabaseInventoryLevelRepository) => new LoadInventoryLevelUseCase(repo),
                },
                {
                    inject: [DatabaseInventoryLevelRepository],
                    provide: InventoryLevelUsecasesProxyModule.LOAD_BY_ID_INVENTORY_LEVEL_PROXY,
                    useFactory: (repo: DatabaseInventoryLevelRepository) => new LoadInventoryLevelByIdUseCase(repo),
                },
                {
                    inject: [DatabaseInventoryLevelRepository],
                    provide: InventoryLevelUsecasesProxyModule.LOAD_BY_PRODUCT_ZONE_INVENTORY_LEVEL_PROXY,
                    useFactory: (repo: DatabaseInventoryLevelRepository) => new LoadInventoryLevelByProductAndZoneUseCase(repo),
                },
                {
                    inject: [DatabaseInventoryLevelRepository],
                    provide: InventoryLevelUsecasesProxyModule.CREATE_INVENTORY_LEVEL_PROXY,
                    useFactory: (repo: DatabaseInventoryLevelRepository) => new CreateInventoryLevelUseCase(repo),
                },
                {
                    inject: [DatabaseInventoryLevelRepository],
                    provide: InventoryLevelUsecasesProxyModule.UPDATE_INVENTORY_LEVEL_PROXY,
                    useFactory: (repo: DatabaseInventoryLevelRepository) => new UpdateInventoryLevelUseCase(repo),
                },
            ],
            exports: [
                InventoryLevelUsecasesProxyModule.LOAD_INVENTORY_LEVEL_PROXY,
                InventoryLevelUsecasesProxyModule.LOAD_BY_ID_INVENTORY_LEVEL_PROXY,
                InventoryLevelUsecasesProxyModule.LOAD_BY_PRODUCT_ZONE_INVENTORY_LEVEL_PROXY,
                InventoryLevelUsecasesProxyModule.CREATE_INVENTORY_LEVEL_PROXY,
                InventoryLevelUsecasesProxyModule.UPDATE_INVENTORY_LEVEL_PROXY,
            ],
        };
    }
}
