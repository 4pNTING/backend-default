import { ProductModel } from '../../domain/models/product.model';
import { CategoryEntity } from './category.entity';
import { InventoryLevelEntity } from './inventory-level.entity';
import { InventoryMovementEntity } from './inventory-movement.entity';
export declare class ProductEntity implements ProductModel {
    id: string;
    sku: string;
    name: string;
    description: string;
    price: number;
    cost: number;
    categoryId: string;
    lowStockThreshold: number;
    category: CategoryEntity;
    inventoryLevels: InventoryLevelEntity[];
    movements: InventoryMovementEntity[];
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
    isActive: string;
}
