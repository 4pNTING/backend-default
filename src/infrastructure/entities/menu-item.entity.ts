import {
    Entity, Column, PrimaryGeneratedColumn,
    CreateDateColumn, UpdateDateColumn, DeleteDateColumn,
    ManyToOne, JoinColumn
} from 'typeorm';
import { MenuItemModel } from '../../domain/models/menu-item.model';
import { ActiveStatus } from '../../domain/enums/enum';
import { CategoryEntity } from './category.entity';

@Entity('menu_items')
export class MenuItemEntity implements MenuItemModel {
    @PrimaryGeneratedColumn('uuid')
    _id: string;

    @Column({ type: 'int', default: 0 })
    uniqueId: number;

    @Column({ nullable: true })
    uid: string;

    @Column()
    name: string;

    @Column({ nullable: true })
    description: string;

    @Column({ nullable: true })
    photo: string;

    @Column({ type: 'decimal', precision: 10, scale: 2, default: 0 })
    price: number;

    @Column({ type: 'uuid' })
    categoryId: string;

    @ManyToOne(() => CategoryEntity, { eager: false, onDelete: 'SET NULL', nullable: true })
    @JoinColumn({ name: 'categoryId' })
    category: CategoryEntity;

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
