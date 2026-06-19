import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { CurrencyModel } from '../../domain/models/currency.model';

@Entity('currencies')
export class CurrencyEntity implements CurrencyModel {
    @PrimaryGeneratedColumn('uuid')
    _id: string;

    @Column({ unique: true })
    code: string;

    @Column()
    name: string;

    @Column({ default: true })
    isActive: boolean;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}
