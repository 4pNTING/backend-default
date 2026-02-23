import { LoginUseCase } from '../../../usecases/auth/login.usecase';
import { LoginRequest } from '../../../domain/models/user.model';
export declare class AuthController {
    private readonly loginUseCase;
    constructor(loginUseCase: LoginUseCase);
    login(data: LoginRequest): Promise<any>;
}
