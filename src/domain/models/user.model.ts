import { Role, ActiveStatus } from '../enums/enum';

export class UserModel {
    id: string;
    username: string;
    password: string;
    role?: Role;
    createdAt?: Date;
    updatedAt?: Date;
    isActive?: ActiveStatus;
}

export class LoginRequest {
    username: string;
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
