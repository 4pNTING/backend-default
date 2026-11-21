import {
    Entity, Column, PrimaryGeneratedColumn,
    CreateDateColumn, UpdateDateColumn, DeleteDateColumn,
    OneToMany
} from 'typeorm';
import { InventoryItemModel } from '../../domain/models/inventory.model';
import { ActiveStatus } from '../../domain/enums/enum';
import { RecipeItemEntity } from './recipe-item.entity';
import { StockTransactionEntity } from './stock-transaction.entity';

@Entity('inventory_items')
export class InventoryItemEntity implements InventoryItemModel {
    @PrimaryGeneratedColumn('uuid')
    _id: string;

    @Column()
    name: string;

    @Column({ nullable: true })
    sku: string;

    @Column()
    category: string;

    @Column()
    unit: string;

    @Column({ type: 'decimal', precision: 12, scale: 2, default: 0 })
    currentStock: number;

    @Column({ type: 'decimal', precision: 12, scale: 2, default: 0 })
    minStockAlert: number;

    @Column({ type: 'decimal', precision: 12, scale: 2, default: 0 })
    costPerUnit: number;

    @Column({
        type: 'enum',
        enum: ActiveStatus,
        default: ActiveStatus.active,
    })
    isActive: ActiveStatus;

    @OneToMany(() => RecipeItemEntity, (r) => r.inventoryItem)
    recipes: RecipeItemEntity[];

    @OneToMany(() => StockTransactionEntity, (t) => t.inventoryItem)
    transactions: StockTransactionEntity[];

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @DeleteDateColumn()
    deletedAt: Date;
}
