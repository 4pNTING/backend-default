import { registerEnumType } from '@nestjs/graphql';

export enum Role {
    USER = 'user',
    MANAGER = 'manager',
    ADMIN = 'admin',
}

export enum ActiveStatus {
    ACTIVE = 'active',
    INACTIVE = 'inactive',
    ALL = 'all'
}

registerEnumType(ActiveStatus, {
    name: 'ActiveStatus',
    description: 'Filter for active, inactive, or all items',
});

export enum InventoryMovementType {
    IN = 'in',
    OUT = 'out',
    TRANSFER = 'transfer',
    ADJUST = 'adjust'
}

registerEnumType(InventoryMovementType, {
    name: 'InventoryMovementType',
    description: 'Type of inventory movement: in, out, transfer, or adjust',
});
