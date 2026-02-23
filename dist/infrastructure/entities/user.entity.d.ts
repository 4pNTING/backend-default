import { UserModel } from '../../domain/models/user.model';
export declare class UserEntity implements UserModel {
    id: number;
    username: string;
    password?: string;
    role?: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
    isActive: boolean;
}
