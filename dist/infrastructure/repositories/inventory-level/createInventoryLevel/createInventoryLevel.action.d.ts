import { QueryRunner } from 'typeorm';
import { InventoryLevelModel, CreateInventoryLevelRequest, CreateInventoryLevelResponse } from '@domain/models/inventory-level.model';
export declare class CreateInventoryLevelAction extends InventoryLevelModel {
    private readonly session;
    constructor(session: QueryRunner);
    execute(params: CreateInventoryLevelRequest): Promise<CreateInventoryLevelResponse>;
}
