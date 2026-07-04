import {
    Entity, Column, PrimaryGeneratedColumn,
    CreateDateColumn, UpdateDateColumn, DeleteDateColumn,
    ManyToOne, JoinColumn
} from 'typeorm';
import { MenuOptionModel } from '../../domain/models/menu-option.model';
import { ActiveStatus } from '../../domain/enums/enum';
import { MenuItemEntity } from './menu-item.entity';

@Entity('menu_options')
export class MenuOptionEntity implements MenuOptionModel {
    @PrimaryGeneratedColumn('uuid')
    _id: string;

    @Column({ type: 'uuid' })
    menuItemId: string;

    @ManyToOne(() => MenuItemEntity, { eager: false, onDelete: 'CASCADE' })
    @JoinColumn({ name: 'menuItemId' })
    menuItem: MenuItemEntity;

    @Column()
    name: string;

    @Column({ type: 'decimal', precision: 10, scale: 2, default: 0 })
    extraPrice: number;

    @Column({
        type: 'enum',
        enum: ActiveStatus,
        default: ActiveStatus.active,
    })
    isActive: ActiveStatus;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @DeleteDateColumn()
    deletedAt: Date;
}
