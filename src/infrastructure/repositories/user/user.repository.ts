import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from '../../entities/user.entity';
import { IUserRepository } from '../../../domain/repositories/user.repository.interface';
import { UserModel } from '../../../domain/models/user.model';

@Injectable()
export class DatabaseUserRepository implements IUserRepository {
    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepository: Repository<UserEntity>,
    ) { }

    async findByUsername(username: string): Promise<UserModel | null> {
        const user = await this.userRepository.findOne({ where: { username } });
        if (!user) return null;
        return user;
    }

    async findById(id: number): Promise<UserModel | null> {
        const user = await this.userRepository.findOne({ where: { id } });
        if (!user) return null;
        return user;
    }
}
