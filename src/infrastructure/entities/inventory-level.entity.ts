import { Entity, Column, PrimaryGeneratedColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { InventoryLevelModel } from '../../domain/models/inventory-level.model';
import { ProductEntity } from './product.entity';
import { ZoneEntity } from './zone.entity';

@Entity('inventory_levels')
export class InventoryLevelEntity implements InventoryLevelModel {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: 'product_id' })
    productId: number;

    @Column({ name: 'zone_id' })
    zoneId: number;

    @Column('int', { default: 0 })
    quantity: number;

    @ManyToOne(() => ProductEntity, product => product.inventoryLevels)
    @JoinColumn({ name: 'product_id' })
    product: ProductEntity;

    @ManyToOne(() => ZoneEntity)
    @JoinColumn({ name: 'zone_id' })
    zone: ZoneEntity;

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date;
}