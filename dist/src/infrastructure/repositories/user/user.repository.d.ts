import { Repository } from 'typeorm';
import { UserEntity } from '../../entities/user.entity';
import { IUserRepository } from '../../../domain/repositories/user.repository.interface';
import { UserModel } from '../../../domain/models/user.model';
export declare class DatabaseUserRepository implements IUserRepository {
    private readonly userRepository;
    constructor(userRepository: Repository<UserEntity>);
    findByUsername(username: string): Promise<UserModel | null>;
    findById(_id: string): Promise<UserModel | null>;
}
