import { DynamicModule, Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
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
                    inject: [DatabaseUserRepository, ConfigService],
                    provide: AuthUsecasesProxyModule.LOGIN_PROXY,
                    useFactory: (repo: DatabaseUserRepository, config: ConfigService) =>
                        new LoginUseCase(
                            repo,
                            config.get<string>('JWT_SECRET'),
                            config.get<string>('JWT_EXPIRATION'),
                        ),
                },
            ],
            exports: [AuthUsecasesProxyModule.LOGIN_PROXY],
        };
    }
}
