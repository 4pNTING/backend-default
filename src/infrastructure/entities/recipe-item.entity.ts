import {
    Entity, Column, PrimaryGeneratedColumn,
    CreateDateColumn, UpdateDateColumn,
    ManyToOne, JoinColumn
} from 'typeorm';
import { RecipeItemModel } from '../../domain/models/inventory.model';
import { MenuItemEntity } from './menu-item.entity';
import { InventoryItemEntity } from './inventory-item.entity';

@Entity('recipe_items')
export class RecipeItemEntity implements RecipeItemModel {
    @PrimaryGeneratedColumn('uuid')
    _id: string;

    @Column({ type: 'uuid' })
    menuItemId: string;

    @ManyToOne(() => MenuItemEntity, { eager: false, onDelete: 'CASCADE' })
    @JoinColumn({ name: 'menuItemId' })
    menuItem: MenuItemEntity;

    @Column({ type: 'uuid' })
    inventoryItemId: string;

    @ManyToOne(() => InventoryItemEntity, (inv) => inv.recipes, { eager: true, onDelete: 'RESTRICT' })
    @JoinColumn({ name: 'inventoryItemId' })
    inventoryItem: InventoryItemEntity;

    @Column({ type: 'decimal', precision: 12, scale: 2 })
    quantityRequired: number;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}
