import { Inject } from '@nestjs/common';
import { Args, Mutation, Resolver, Field, InputType, ObjectType } from '@nestjs/graphql';
import { IsString, IsNotEmpty } from 'class-validator'; // <-- 1. เพิ่มตัวตรวจสอบข้อมูล
import { AuthUsecasesProxyModule } from '../../usecases-proxy/auth-usecases-proxy.module';
import { LoginUseCase } from '../../../usecases/auth/login.usecase';
import { LoginResponse } from '../../../domain/models/user.model';

@InputType()
class AuthLoginArgs {
    @Field()
    @IsString()
    @IsNotEmpty()
    username: string;

    @Field()
    @IsString()
    @IsNotEmpty()
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
    username: string;
    @Field({ nullable: true })
    isActive?: boolean;
    @Field({ nullable: true })
    token?: string;
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