import { InventoryLevelModel } from '../../domain/models/inventory-level.model';
import { ProductEntity } from './product.entity';
import { ZoneEntity } from './zone.entity';
export declare class InventoryLevelEntity implements InventoryLevelModel {
    id: string;
    productId: string;
    zoneId: string;
    quantity: number;
    product: ProductEntity;
    zone: ZoneEntity;
    updatedAt: Date;
}
