import { UserModel } from '../models/user.model';
export interface IUserRepository {
    findByUsername(username: string): Promise<UserModel | null>;
    findById(_id: string): Promise<UserModel | null>;
}
