import {
    Entity, Column, PrimaryGeneratedColumn,
    CreateDateColumn, UpdateDateColumn, DeleteDateColumn,
    ManyToOne, OneToMany, JoinColumn
} from 'typeorm';
import { OrderModel } from '../../domain/models/order.model';
import { OrderStatus } from '../../domain/enums/enum';
import { TableEntity } from './table.entity';
import { UserEntity } from './user.entity';
import { OrderItemEntity } from './order-item.entity';

@Entity('orders')
export class OrderEntity implements OrderModel {
    @PrimaryGeneratedColumn('uuid')
    _id: string;

    @Column({ unique: true })
    orderNumber: string;

    @Column({ type: 'uuid' })
    tableId: string;

    @ManyToOne(() => TableEntity, { eager: false, onDelete: 'SET NULL', nullable: true })
    @JoinColumn({ name: 'tableId' })
    table: TableEntity;

    @Column({ type: 'uuid' })
    staffId: string;

    @ManyToOne(() => UserEntity, { eager: false, onDelete: 'SET NULL', nullable: true })
    @JoinColumn({ name: 'staffId' })
    staff: UserEntity;

    @Column({
        type: 'enum',
        enum: OrderStatus,
        default: OrderStatus.pending,
    })
    status: OrderStatus;

    @Column({ nullable: true })
    note: string;

    @Column({ type: 'decimal', precision: 12, scale: 2, default: 0 })
    subTotal: number;

    @Column({ type: 'decimal', precision: 12, scale: 2, default: 0 })
    discount: number;

    @Column({ type: 'decimal', precision: 12, scale: 2, default: 0 })
    total: number;

    @OneToMany(() => OrderItemEntity, (item) => item.order, { cascade: true, eager: false })
    items: OrderItemEntity[];

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @DeleteDateColumn()
    deletedAt: Date;
}
