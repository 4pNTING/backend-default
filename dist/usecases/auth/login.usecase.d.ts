import { IUserRepository } from '../../domain/repositories/user.repository.interface';
import { LoginRequest, LoginResponse } from '../../domain/models/user.model';
export declare class LoginUseCase {
    private readonly userRepository;
    constructor(userRepository: IUserRepository);
    execute(request: LoginRequest): Promise<LoginResponse>;
}
