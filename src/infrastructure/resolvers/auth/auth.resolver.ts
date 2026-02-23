import { Inject } from '@nestjs/common';
import { Args, Mutation, Resolver, Field, InputType, ObjectType } from '@nestjs/graphql';
import { AuthUsecasesProxyModule } from '../../usecases-proxy/auth-usecases-proxy.module';
import { LoginUseCase } from '../../../usecases/auth/login.usecase';
import { LoginRequest, LoginResponse } from '../../../domain/models/user.model';

@InputType()
class AuthLoginArgs {
    @Field()
    username: string;
    @Field()
    password: string;
}

@ObjectType()
class AuthLoginResponse {
    @Field()
    success: boolean;
    @Field({ nullable: true })
    _id?: string;
    @Field({ nullable: true })
    role?: string;
    @Field()
    message: string;
    @Field({ nullable: true })
    isActive?: boolean;
}

@Resolver()
export class AuthResolver {
    constructor(
        @Inject(AuthUsecasesProxyModule.LOGIN_PROXY)
        private readonly loginUseCase: LoginUseCase,
    ) { }

    @Mutation(() => AuthLoginResponse)
    async login(@Args('loginData') loginData: AuthLoginArgs): Promise<LoginResponse> {
        return this.loginUseCase.execute(loginData);
    }
}
