export class InventoryLevelModel {
    id: number;
    productId: number;
    zoneId: number;
    quantity: number;
    updatedAt?: Date;
    product?: any;
    zone?: any;
}

export class CreateInventoryLevelRequest {
    productId: number;
    zoneId: number;
    quantity: number;
}

export class CreateInventoryLevelResponse extends InventoryLevelModel { }

export class UpdateInventoryLevelRequest {
    id: number;
    quantity: number;
}

export class UpdateInventoryLevelResponse {
    id: number;
    success: boolean;
}

export class LoadAllInventoryLevelRequest { }

export class LoadAllInventoryLevelResponse {
    items: InventoryLevelModel[];
    total: number;
}

export class LoadInventoryLevelByIdRequest {
    id: number;
}

export class LoadInventoryLevelByIdResponse extends InventoryLevelModel { }

export class LoadInventoryLevelByProductAndZoneRequest {
    productId: number;
    zoneId: number;
}

export class LoadInventoryLevelByProductAndZoneResponse extends InventoryLevelModel { }