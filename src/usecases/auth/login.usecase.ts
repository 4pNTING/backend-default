import { IUserRepository } from '../../domain/repositories/user.repository.interface';
import { LoginRequest, LoginResponse } from '../../domain/models/user.model';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import { UnauthorizedException } from '@nestjs/common';

export class LoginUseCase {
    constructor(
        private readonly userRepository: IUserRepository,
        private readonly jwtSecret: string,
        private readonly jwtExpiration: string,
    ) { }

    async execute(request: LoginRequest): Promise<LoginResponse> {
        if (!request || !request.username || !request.password) {
            throw new UnauthorizedException('Username and password are required');
        }

        const user = await this.userRepository.findByUsername(request.username);

        if (!user || !user.password) {
            throw new UnauthorizedException('Invalid username or password');
        }

        const isPasswordValid = await bcrypt.compare(request.password, user.password);

        if (!isPasswordValid) {
            throw new UnauthorizedException('Invalid username or password');
        }

        const payload = {
            id: user._id,
            username: user.username,
            role: user.role
        };

        const accessToken = jwt.sign(payload, this.jwtSecret, { expiresIn: this.jwtExpiration as jwt.SignOptions['expiresIn'] });
        
        // Generate Refresh Token
        const refreshToken = jwt.sign(payload, this.jwtSecret, { expiresIn: '7d' });

        return {
            _id: user._id,
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