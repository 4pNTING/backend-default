import { IUserRepository } from '../../domain/repositories/user.repository.interface';
import { LoginRequest, LoginResponse } from '../../domain/models/user.model';
export declare class LoginUseCase {
    private readonly userRepository;
    private readonly jwtSecret;
    private readonly jwtExpiration;
    constructor(userRepository: IUserRepository, jwtSecret: string, jwtExpiration: string);
    execute(request: LoginRequest): Promise<LoginResponse>;
}
