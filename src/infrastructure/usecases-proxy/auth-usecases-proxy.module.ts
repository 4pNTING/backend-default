import { DynamicModule, Module } from '@nestjs/common';
import { DatabaseUserRepository } from '../repositories/user/user.repository';
import { RepositoriesModule } from '../repositories/repositories.module';
import { LoginUseCase } from '../../usecases/auth/login.usecase';

@Module({
    imports: [RepositoriesModule],
})
export class AuthUsecasesProxyModule {
    static LOGIN_PROXY = 'LoginProxy';

    static register(): DynamicModule {
        return {
            module: AuthUsecasesProxyModule,
            providers: [
                {
                    inject: [DatabaseUserRepository],
                    provide: AuthUsecasesProxyModule.LOGIN_PROXY,
                    useFactory: (repo: DatabaseUserRepository) => new LoginUseCase(repo),
                },
            ],
            exports: [AuthUsecasesProxyModule.LOGIN_PROXY],
        };
    }
}
