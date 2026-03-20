import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from 'typeorm';
import { UserModel } from '../../domain/models/user.model';
import { Role, ActiveStatus } from '../../domain/enums/enum';

@Entity('users')
export class UserEntity implements UserModel {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ unique: true })
    username: string;

    @Column()
    password: string;

    @Column({
        type: 'enum',
        enum: Role,
        default: Role.USER
    })
    role?: Role;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @DeleteDateColumn()
    deletedAt: Date;

    @Column({ 
        type: 'enum',
        enum: ActiveStatus,
        default: ActiveStatus.active 
    })
    isActive: ActiveStatus;
}
