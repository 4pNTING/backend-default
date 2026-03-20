import { LoginUseCase } from '../../../usecases/auth/login.usecase';
import { LoginResponse } from '../../../domain/models/user.model';
declare class AuthLoginArgs {
    username: string;
    password: string;
}
export declare class AuthResolver {
    private readonly loginUseCase;
    constructor(loginUseCase: LoginUseCase);
    login(loginData: AuthLoginArgs): Promise<LoginResponse>;
}
export {};
