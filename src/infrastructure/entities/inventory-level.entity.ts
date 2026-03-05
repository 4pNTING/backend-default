import { Entity, Column, PrimaryGeneratedColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { InventoryLevelModel } from '../../domain/models/inventory-level.model';
import { ProductEntity } from './product.entity';
import { ZoneEntity } from './zone.entity';

@Entity('inventory_levels')
export class InventoryLevelEntity implements InventoryLevelModel {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    productId: number;

    @Column()
    zoneId: number;

    @Column('int', { default: 0 })
    quantity: number;

    @ManyToOne(() => ProductEntity, product => product.inventoryLevels)
    @JoinColumn()
    product: ProductEntity;

    @ManyToOne(() => ZoneEntity)
    @JoinColumn()
    zone: ZoneEntity;

    @UpdateDateColumn()
    updatedAt: Date;
}