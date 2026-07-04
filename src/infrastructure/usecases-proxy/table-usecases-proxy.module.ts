import { DynamicModule, Module } from '@nestjs/common';
import { DatabaseTableRepository } from '../repositories/table/table.repository';
import { RepositoriesModule } from '../repositories/repositories.module';

import { CreateTableUseCase }      from '../../usecases/table/createTable.usecase';
import { UpdateTableUseCase }      from '../../usecases/table/updateTable.usecase';
import { DeleteTableUseCase }      from '../../usecases/table/deleteTable.usecase';
import { RestoreTableUseCase }     from '../../usecases/table/restoreTable.usecase';
import { LoadTableUseCase }        from '../../usecases/table/loadTable.usecase';
import { LoadByIDTableUseCase }    from '../../usecases/table/loadByIDTable.usecase';
import { LoadTableByZoneUseCase }  from '../../usecases/table/loadTableByZone.usecase';

@Module({
    imports: [RepositoriesModule],
})
export class TableUsecasesProxyModule {
    static CREATE_TABLE_PROXY         = 'CreateTableProxy';
    static UPDATE_TABLE_PROXY         = 'UpdateTableProxy';
    static DELETE_TABLE_PROXY         = 'DeleteTableProxy';
    static RESTORE_TABLE_PROXY        = 'RestoreTableProxy';
    static LOAD_TABLE_PROXY           = 'LoadTableProxy';
    static LOAD_BY_ID_TABLE_PROXY     = 'LoadByIDTableProxy';
    static LOAD_TABLE_BY_ZONE_PROXY   = 'LoadTableByZoneProxy';

    static register(): DynamicModule {
        return {
            module: TableUsecasesProxyModule,
            providers: [
                {
                    inject: [DatabaseTableRepository],
                    provide: TableUsecasesProxyModule.CREATE_TABLE_PROXY,
                    useFactory: (repo: DatabaseTableRepository) => new CreateTableUseCase(repo),
                },
                {
                    inject: [DatabaseTableRepository],
                    provide: TableUsecasesProxyModule.UPDATE_TABLE_PROXY,
                    useFactory: (repo: DatabaseTableRepository) => new UpdateTableUseCase(repo),
                },
                {
                    inject: [DatabaseTableRepository],
                    provide: TableUsecasesProxyModule.DELETE_TABLE_PROXY,
                    useFactory: (repo: DatabaseTableRepository) => new DeleteTableUseCase(repo),
                },
                {
                    inject: [DatabaseTableRepository],
                    provide: TableUsecasesProxyModule.RESTORE_TABLE_PROXY,
                    useFactory: (repo: DatabaseTableRepository) => new RestoreTableUseCase(repo),
                },
                {
                    inject: [DatabaseTableRepository],
                    provide: TableUsecasesProxyModule.LOAD_TABLE_PROXY,
                    useFactory: (repo: DatabaseTableRepository) => new LoadTableUseCase(repo),
                },
                {
                    inject: [DatabaseTableRepository],
                    provide: TableUsecasesProxyModule.LOAD_BY_ID_TABLE_PROXY,
                    useFactory: (repo: DatabaseTableRepository) => new LoadByIDTableUseCase(repo),
                },
                {
                    inject: [DatabaseTableRepository],
                    provide: TableUsecasesProxyModule.LOAD_TABLE_BY_ZONE_PROXY,
                    useFactory: (repo: DatabaseTableRepository) => new LoadTableByZoneUseCase(repo),
                },
            ],
            exports: [
                TableUsecasesProxyModule.CREATE_TABLE_PROXY,
                TableUsecasesProxyModule.UPDATE_TABLE_PROXY,
                TableUsecasesProxyModule.DELETE_TABLE_PROXY,
                TableUsecasesProxyModule.RESTORE_TABLE_PROXY,
                TableUsecasesProxyModule.LOAD_TABLE_PROXY,
                TableUsecasesProxyModule.LOAD_BY_ID_TABLE_PROXY,
                TableUsecasesProxyModule.LOAD_TABLE_BY_ZONE_PROXY,
            ],
        };
    }
}
