import { QueryRunner } from 'typeorm';
import { LoadAllInventoryMovementResponse } from '@domain/models/inventory-movement.model';
import { QueryProps } from '../../../../src/domain/models/query.model';
export declare class LoadAllInventoryMovementAction {
    private readonly session;
    constructor(session: QueryRunner);
    execute(query: QueryProps): Promise<LoadAllInventoryMovementResponse>;
}
