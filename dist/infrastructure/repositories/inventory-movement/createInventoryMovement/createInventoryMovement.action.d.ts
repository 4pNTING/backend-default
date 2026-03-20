import { QueryRunner } from 'typeorm';
import { InventoryMovementModel, CreateInventoryMovementRequest, CreateInventoryMovementResponse } from '@domain/models/inventory-movement.model';
export declare class CreateInventoryMovementAction extends InventoryMovementModel {
    private readonly session;
    constructor(session: QueryRunner);
    execute(params: CreateInventoryMovementRequest): Promise<CreateInventoryMovementResponse>;
}
