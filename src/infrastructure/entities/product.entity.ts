import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { ProductModel } from '../../domain/models/product.model';
import { CategoryEntity } from './category.entity';
// จะมี Error แดงๆ ที่ InventoryLevel/Movement เล็กน้อย ไม่ต้องตกใจครับ เดี๋ยวเราสร้างในสเต็ปถัดไป
import { InventoryLevelEntity } from './inventory-level.entity';
import { InventoryMovementEntity } from './inventory-movement.entity';

@Entity('products')
export class ProductEntity implements ProductModel {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    sku: string;

    @Column()
    name: string;

    @Column({ nullable: true })
    description: string;

    @Column('int')
    price: number;

    @Column('int')
    cost: number;

    @Column()
    categoryId: number;

    @Column({ default: 5 })
    lowStockThreshold: number;

    // เชื่อมไปหา Category (Many Products -> 1 Category)
    @ManyToOne(() => CategoryEntity, category => category.products)
    @JoinColumn()
    category: CategoryEntity;

    // เชื่อมไปหา Inventory (1 Product -> Many Inventory Levels & Movements)
    @OneToMany(() => InventoryLevelEntity, level => level.product)
    inventoryLevels: InventoryLevelEntity[];

    @OneToMany(() => InventoryMovementEntity, movement => movement.product)
    movements: InventoryMovementEntity[];

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @DeleteDateColumn()
    deletedAt: Date;

    @Column({ default: true })
    isActive: boolean;
}