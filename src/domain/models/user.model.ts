export class UserModel {
    id: number;
    username: string;
    password?: string;
    role?: string;
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
    role?: string;
    message: string;
    isActive?: boolean;
}
