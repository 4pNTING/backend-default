import { UserModel } from '../../domain/models/user.model';
import { Role, ActiveStatus } from '../../domain/enums/enum';
export declare class UserEntity implements UserModel {
    id: string;
    username: string;
    password: string;
    role?: Role;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
    isActive: ActiveStatus;
}
