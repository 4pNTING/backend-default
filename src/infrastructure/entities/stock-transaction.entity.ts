import {
    Entity, Column, PrimaryGeneratedColumn,
    CreateDateColumn,
    ManyToOne, JoinColumn
} from 'typeorm';
import { StockTransactionModel } from '../../domain/models/inventory.model';
import { StockTransactionType } from '../../domain/enums/enum';
import { InventoryItemEntity } from './inventory-item.entity';
import { OrderEntity } from './order.entity';
import { UserEntity } from './user.entity';

@Entity('stock_transactions')
export class StockTransactionEntity implements StockTransactionModel {
    @PrimaryGeneratedColumn('uuid')
    _id: string;

    @Column({ type: 'uuid' })
    inventoryItemId: string;

    @ManyToOne(() => InventoryItemEntity, (inv) => inv.transactions, { eager: false, onDelete: 'CASCADE' })
    @JoinColumn({ name: 'inventoryItemId' })
    inventoryItem: InventoryItemEntity;

    @Column({
        type: 'enum',
        enum: StockTransactionType,
    })
    type: StockTransactionType;

    @Column({ type: 'decimal', precision: 12, scale: 2 })
    quantity: number;

    @Column({ type: 'decimal', precision: 12, scale: 2 })
    balanceAfter: number;

    @Column({ type: 'uuid', nullable: true })
    orderId: string;

    @ManyToOne(() => OrderEntity, { eager: false, onDelete: 'SET NULL', nullable: true })
    @JoinColumn({ name: 'orderId' })
    order: OrderEntity;

    @Column({ type: 'uuid', nullable: true })
    staffId: string;

    @ManyToOne(() => UserEntity, { eager: false, onDelete: 'SET NULL', nullable: true })
    @JoinColumn({ name: 'staffId' })
    staff: UserEntity;

    @Column({ nullable: true })
    note: string;

    @CreateDateColumn()
    createdAt: Date;
}
