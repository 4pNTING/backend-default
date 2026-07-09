import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { CurrencyModel } from '../../domain/models/currency.model';
import { ActiveStatus } from '../../domain/enums/enum';

@Entity('currencies')
export class CurrencyEntity implements CurrencyModel {
    @PrimaryGeneratedColumn('uuid')
    _id: string;

    @Column({ unique: true })
    code: string;

    @Column()
    name: string;

    @Column({ 
        type: 'enum',
        enum: ActiveStatus,
        default: ActiveStatus.active 
    })
    isActive: ActiveStatus;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}
