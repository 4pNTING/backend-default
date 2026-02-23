export declare class UserModel {
    id: number;
    username: string;
    password?: string;
    role?: string;
    createdAt?: Date;
    updatedAt?: Date;
    isActive?: boolean;
}
export declare class LoginRequest {
    username: string;
    password: string;
}
export declare class LoginResponse {
    success: boolean;
    _id?: string;
    role?: string;
    message: string;
    isActive?: boolean;
}
