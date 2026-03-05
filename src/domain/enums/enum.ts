import { registerEnumType } from '@nestjs/graphql';

export enum Role {
    USER = 'USER',
    MANAGER = 'MANAGER',
    ADMIN = 'ADMIN',
}

export enum ActiveStatus {
    ACTIVE = 'ACTIVE',
    INACTIVE = 'INACTIVE',
    ALL = 'ALL'
}

registerEnumType(ActiveStatus, {
    name: 'ActiveStatus',
    description: 'Filter for active, inactive, or all items',
});

export enum InventoryMovementType {
    IN = 'IN',
    OUT = 'OUT',
    TRANSFER = 'TRANSFER',
    ADJUST = 'ADJUST'
}

registerEnumType(InventoryMovementType, {
    name: 'InventoryMovementType',
    description: 'Type of inventory movement: IN, OUT, TRANSFER, or ADJUST',
});
