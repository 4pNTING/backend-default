import { QueryRunner } from 'typeorm';
import { LoadAllInventoryLevelResponse } from '@domain/models/inventory-level.model';
import { QueryProps } from '@domain/models/query.model';
export declare class LoadAllInventoryLevelAction {
    private readonly session;
    constructor(session: QueryRunner);
    execute(query: QueryProps): Promise<LoadAllInventoryLevelResponse>;
}
