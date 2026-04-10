import { Controller, Inject, Post, Body, HttpException, HttpStatus } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { AuthUsecasesProxyModule } from '../../usecases-proxy/auth-usecases-proxy.module';
import { LoginUseCase } from '../../../usecases/auth/login.usecase';
import { LoginRequest, LoginResponse } from '../../../domain/models/user.model';

@Controller('api/auth')
export class AuthController {
    constructor(
        @Inject(AuthUsecasesProxyModule.LOGIN_PROXY)
        private readonly loginUseCase: LoginUseCase,
    ) { }

    @GrpcMethod('AuthService', 'Login')
    async login(data: LoginRequest): Promise<any> {
        try {
            const result = await this.loginUseCase.execute(data);
            return {
                _id: result._id,
                role: result.role,
                is_active: result.isActive,
                username: result.username,
                token: result.token,
                created_at: result.createdAt,
                updated_at: result.updatedAt,
            };
        } catch (error) {
            console.error('Login Error:', error);
            return {
                success: false,
                message: error.message || 'Internal Server Error',
            };
        }
    }

    @Post('login')
    async loginRest(@Body() data: LoginRequest): Promise<any> {
        try {
            const result = await this.loginUseCase.execute(data);
            return {
                token: result.token,
                user: {
                  _id: result._id,
                  username: result.username,
                  role: result.role,
                  isActive: result.isActive,
                }
            };
        } catch (error) {
            console.error('REST Login Error:', error);
            throw new HttpException({
                success: false,
                message: error.message || 'Internal Server Error',
            }, HttpStatus.UNAUTHORIZED);
        }
    }
}
