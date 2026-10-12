import { QueryRunner } from 'typeorm';
import { LoadAllMenuItemResponse } from '../../../../domain/models/menu-item.model.js';
import { QueryProps } from '../../../../domain/models/query.model.js';
export declare class LoadAllMenuItemAction {
    private readonly session;
    constructor(session: QueryRunner);
    execute(query: QueryProps): Promise<LoadAllMenuItemResponse>;
}
