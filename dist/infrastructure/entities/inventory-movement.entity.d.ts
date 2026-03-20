import { InventoryMovementModel } from '../../domain/models/inventory-movement.model';
import { ProductEntity } from './product.entity';
import { ZoneEntity } from './zone.entity';
import { InventoryMovementType } from '../../domain/enums/enum';
export declare class InventoryMovementEntity implements InventoryMovementModel {
    id: string;
    productId: string;
    zoneId: string;
    quantity: number;
    type: InventoryMovementType;
    note: string;
    userId: string;
    product: ProductEntity;
    zone: ZoneEntity;
    createdAt: Date;
}
