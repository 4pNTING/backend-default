import { LoginUseCase } from '../../../usecases/auth/login.usecase';
import { LoginResponse } from '../../../domain/models/user.model';
export declare class AuthResolver {
    private readonly loginUseCase;
    constructor(loginUseCase: LoginUseCase);
    login(loginData: AuthLoginArgs): Promise<LoginResponse>;
}
declare class AuthLoginArgs {
    username: string;
    password: string;
}
export {};
