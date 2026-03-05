import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { InventoryMovementModel } from '../../domain/models/inventory-movement.model';
import { ProductEntity } from './product.entity';
import { ZoneEntity } from './zone.entity';
import { InventoryMovementType } from '../../domain/enums/enum';

@Entity('inventory_movements')
export class InventoryMovementEntity implements InventoryMovementModel {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: 'product_id' })
    productId: number;

    @Column({ name: 'zone_id', nullable: true })
    zoneId: number;

    @Column('int')
    quantity: number;

    @Column({
        type: 'enum',
        enum: InventoryMovementType
    })
    type: InventoryMovementType;

    @Column({ nullable: true })
    note: string;

    @Column({ name: 'user_id', nullable: true })
    userId: number;

    @ManyToOne(() => ProductEntity, product => product.movements)
    @JoinColumn({ name: 'product_id' })
    product: ProductEntity;

    @ManyToOne(() => ZoneEntity)
    @JoinColumn({ name: 'zone_id' })
    zone: ZoneEntity;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;
}
