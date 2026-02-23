import { IUserRepository } from '../../domain/repositories/user.repository.interface';
import { LoginRequest, LoginResponse } from '../../domain/models/user.model';
import * as bcrypt from 'bcrypt';

export class LoginUseCase {
    constructor(private readonly userRepository: IUserRepository) { }

    async execute(request: LoginRequest): Promise<LoginResponse> {
        const user = await this.userRepository.findByUsername(request.username);

        if (!user) {
            return {
                success: false,
                message: 'Invalid username or password',
            };
        }

        const isPasswordValid = await bcrypt.compare(request.password, user.password || '');

        if (!isPasswordValid) {
            return {
                success: false,
                message: 'Invalid username or password',
            };
        }

        return {
            success: true,
            _id: user.id.toString(),
            role: user.role,
            message: 'Login successful',
            isActive: user.isActive,
        };
    }
}
