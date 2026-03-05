import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { InventoryMovementModel } from '../../domain/models/inventory-movement.model';
import { ProductEntity } from './product.entity';
import { ZoneEntity } from './zone.entity';
import { InventoryMovementType } from '../../domain/enums/enum';

@Entity('inventory_movements')
export class InventoryMovementEntity implements InventoryMovementModel {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    productId: number;

    @Column({ nullable: true })
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

    @Column({ nullable: true })
    userId: number;

    @ManyToOne(() => ProductEntity, product => product.movements)
    @JoinColumn()
    product: ProductEntity;

    @ManyToOne(() => ZoneEntity)
    @JoinColumn()
    zone: ZoneEntity;

    @CreateDateColumn()
    createdAt: Date;
}
