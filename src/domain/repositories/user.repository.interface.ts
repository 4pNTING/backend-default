import { UserModel } from '../models/user.model';

export interface IUserRepository {
    findByUsername(username: string): Promise<UserModel | null>;
    findById(id: number): Promise<UserModel | null>;
}
