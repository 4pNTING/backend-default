import { Controller, Inject } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { AuthUsecasesProxyModule } from '../../usecases-proxy/auth-usecases-proxy.module';
import { LoginUseCase } from '../../../usecases/auth/login.usecase';
import { LoginRequest, LoginResponse } from '../../../domain/models/user.model';

@Controller()
export class AuthController {
    constructor(
        @Inject(AuthUsecasesProxyModule.LOGIN_PROXY)
        private readonly loginUseCase: LoginUseCase,
    ) { }

    @GrpcMethod('AuthService', 'Login')
    async login(data: LoginRequest): Promise<any> {
        const result = await this.loginUseCase.execute(data);
        return {
            success: result.success,
            _id: result._id,
            role: result.role,
            message: result.message,
            is_active: result.isActive,
            username: result.username,
            token: result.token,
            created_at: result.createdAt ? result.createdAt.toISOString() : undefined,
            updated_at: result.updatedAt ? result.updatedAt.toISOString() : undefined,
        };
    }
}
