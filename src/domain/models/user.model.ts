import { Role, ActiveStatus } from '../enums/enum';
import { IsNotEmpty, IsString } from 'class-validator';

export class UserModel {
    _id: string;
    username: string;
    password: string;
    role?: Role;
    createdAt?: Date;
    updatedAt?: Date;
    isActive?: ActiveStatus;
}

export class LoginRequest {
    @IsString()
    @IsNotEmpty()
    username: string;

    @IsString()
    @IsNotEmpty()
    password: string;
}

export class LoginResponse {
    _id?: string;
    username?: string;
    role?: Role;
    isActive?: ActiveStatus;
    token?: string;
    refreshToken?: string;
    createdAt?: Date;
    updatedAt?: Date;
}
