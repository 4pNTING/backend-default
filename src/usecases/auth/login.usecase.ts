import { IUserRepository } from '../../domain/repositories/user.repository.interface';
import { LoginRequest, LoginResponse } from '../../domain/models/user.model';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';

export class LoginUseCase {
    constructor(
        private readonly userRepository: IUserRepository,
        private readonly jwtSecret: string,
        private readonly jwtExpiration: string,
    ) { }

    async execute(request: LoginRequest): Promise<LoginResponse> {
        if (!request || !request.username || !request.password) {
            return { success: false, message: 'Username and password are required' };
        }

        const user = await this.userRepository.findByUsername(request.username);

        if (!user || !user.password) {
            return { success: false, message: 'Invalid username or password' };
        }

        const isPasswordValid = await bcrypt.compare(request.password, user.password);

        if (!isPasswordValid) {
            return { success: false, message: 'Invalid username or password' };
        }

        const payload = {
            id: user.id,
            username: user.username,
            role: user.role
        };

        const accessToken = jwt.sign(payload, this.jwtSecret, { expiresIn: this.jwtExpiration as jwt.SignOptions['expiresIn'] });
        
        // Generate Refresh Token
        const refreshToken = jwt.sign(payload, this.jwtSecret, { expiresIn: '7d' });

        return {
            success: true,
            _id: user.id.toString(),
            message: 'Login successful',
            username: user.username,
            isActive: user.isActive,
            role: user.role,
            token: accessToken,
            refreshToken: refreshToken,
            createdAt: user.createdAt,
            updatedAt: user.updatedAt,
        };
    }
}