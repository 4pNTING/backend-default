import {
    Entity, Column, PrimaryGeneratedColumn,
    CreateDateColumn, UpdateDateColumn, DeleteDateColumn,
    ManyToOne, JoinColumn
} from 'typeorm';
import { TableModel } from '../../domain/models/table.model';
import { ActiveStatus, TableStatus } from '../../domain/enums/enum';
import { ZoneEntity } from './zone.entity';

@Entity('tables')
export class TableEntity implements TableModel {
    @PrimaryGeneratedColumn('uuid')
    _id: string;

    @Column({ unique: true })
    number: string;

    @Column({ type: 'uuid' })
    zoneId: string;

    @ManyToOne(() => ZoneEntity, { eager: false, onDelete: 'SET NULL', nullable: true })
    @JoinColumn({ name: 'zoneId' })
    zone: ZoneEntity;

    @Column({ type: 'int', default: 2 })
    capacity: number;

    @Column({
        type: 'enum',
        enum: TableStatus,
        default: TableStatus.available
    })
    status: TableStatus;

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
