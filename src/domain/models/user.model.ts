import { Role } from '../enums/enum';

export class UserModel {
    id: number;
    username: string;
    password: string;
    role?: Role;
    createdAt?: Date;
    updatedAt?: Date;
    isActive?: boolean;
}

export class LoginRequest {
    username: string;
    password: string;
}

export class LoginResponse {
    success: boolean;
    _id?: string;
    username?: string;
    role?: Role;
    message: string;
    isActive?: boolean;
    token?: string;
    createdAt?: Date;
    updatedAt?: Date;
}
