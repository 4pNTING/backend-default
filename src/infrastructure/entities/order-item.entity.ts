import {
    Entity, Column, PrimaryGeneratedColumn,
    CreateDateColumn, UpdateDateColumn,
    ManyToOne, JoinColumn
} from 'typeorm';
import { OrderItemModel } from '../../domain/models/order.model';
import { OrderEntity } from './order.entity';

@Entity('order_items')
export class OrderItemEntity implements OrderItemModel {
    @PrimaryGeneratedColumn('uuid')
    _id: string;

    @Column({ type: 'uuid' })
    orderId: string;

    @ManyToOne(() => OrderEntity, (order) => order.items, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'orderId' })
    order: OrderEntity;

    @Column({ type: 'uuid' })
    menuItemId: string;

    @Column()
    menuItemName: string;    // snapshot ชื่ออาหารตอนสั่ง

    @Column({ type: 'int', default: 1 })
    quantity: number;

    @Column({ type: 'decimal', precision: 10, scale: 2, default: 0 })
    unitPrice: number;       // snapshot ราคาตอนสั่ง

    @Column({ type: 'decimal', precision: 10, scale: 2, default: 0 })
    totalPrice: number;

    @Column({ nullable: true })
    note: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}
