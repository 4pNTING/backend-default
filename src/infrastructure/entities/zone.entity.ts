import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from 'typeorm';
import { ZoneModel } from '../../domain/models/zone.model';
import { ActiveStatus } from '../../domain/enums/enum';

@Entity('zones')
export class ZoneEntity implements ZoneModel {
    @PrimaryGeneratedColumn('uuid')
    _id: string;

    @Column({ unique: true })
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

    @DeleteDateColumn()
    deletedAt: Date;
}
