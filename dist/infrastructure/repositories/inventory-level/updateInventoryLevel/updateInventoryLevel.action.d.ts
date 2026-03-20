import { QueryRunner } from 'typeorm';
import { UpdateInventoryLevelRequest } from '@domain/models/inventory-level.model';
export declare class UpdateInventoryLevelAction {
    private readonly session;
    constructor(session: QueryRunner);
    execute(params: UpdateInventoryLevelRequest): Promise<void>;
}
