import { DynamicModule, Module } from '@nestjs/common';
import { DatabaseCurrencyRepository } from '../repositories/currency/currency.repository';
import { RepositoriesModule } from '../repositories/repositories.module';
import { CreateCurrencyUsecase } from '../../usecases/currency/createCurrency.usecase';
import { UpdateCurrencyUsecase } from '../../usecases/currency/updateCurrency.usecase';
import { DeleteCurrencyUsecase } from '../../usecases/currency/deleteCurrency.usecase';
import { LoadAllCurrencyUsecase } from '../../usecases/currency/loadAllCurrency.usecase';
import { LoadCurrencyByIdUsecase } from '../../usecases/currency/loadCurrencyById.usecase';

@Module({
    imports: [RepositoriesModule],
})
export class CurrencyUsecasesProxyModule {
    static CREATE_CURRENCY_PROXY = 'CreateCurrencyProxy';
    static UPDATE_CURRENCY_PROXY = 'UpdateCurrencyProxy';
    static DELETE_CURRENCY_PROXY = 'DeleteCurrencyProxy';
    static LOAD_ALL_CURRENCY_PROXY = 'LoadAllCurrencyProxy';
    static LOAD_BY_ID_CURRENCY_PROXY = 'LoadByIdCurrencyProxy';

    static register(): DynamicModule {
        return {
            module: CurrencyUsecasesProxyModule,
            providers: [
                {
                    inject: [DatabaseCurrencyRepository],
                    provide: CurrencyUsecasesProxyModule.CREATE_CURRENCY_PROXY,
                    useFactory: (repo: DatabaseCurrencyRepository) => new CreateCurrencyUsecase(repo),
                },
                {
                    inject: [DatabaseCurrencyRepository],
                    provide: CurrencyUsecasesProxyModule.UPDATE_CURRENCY_PROXY,
                    useFactory: (repo: DatabaseCurrencyRepository) => new UpdateCurrencyUsecase(repo),
                },
                {
                    inject: [DatabaseCurrencyRepository],
                    provide: CurrencyUsecasesProxyModule.DELETE_CURRENCY_PROXY,
                    useFactory: (repo: DatabaseCurrencyRepository) => new DeleteCurrencyUsecase(repo),
                },
                {
                    inject: [DatabaseCurrencyRepository],
                    provide: CurrencyUsecasesProxyModule.LOAD_ALL_CURRENCY_PROXY,
                    useFactory: (repo: DatabaseCurrencyRepository) => new LoadAllCurrencyUsecase(repo),
                },
                {
                    inject: [DatabaseCurrencyRepository],
                    provide: CurrencyUsecasesProxyModule.LOAD_BY_ID_CURRENCY_PROXY,
                    useFactory: (repo: DatabaseCurrencyRepository) => new LoadCurrencyByIdUsecase(repo),
                },
            ],
            exports: [
                CurrencyUsecasesProxyModule.CREATE_CURRENCY_PROXY,
                CurrencyUsecasesProxyModule.UPDATE_CURRENCY_PROXY,
                CurrencyUsecasesProxyModule.DELETE_CURRENCY_PROXY,
                CurrencyUsecasesProxyModule.LOAD_ALL_CURRENCY_PROXY,
                CurrencyUsecasesProxyModule.LOAD_BY_ID_CURRENCY_PROXY,
            ],
        };
    }
}
