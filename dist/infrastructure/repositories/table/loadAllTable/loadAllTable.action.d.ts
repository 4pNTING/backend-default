import { QueryRunner } from 'typeorm';
import { LoadAllTableResponse } from '../../../../domain/models/table.model.js';
import { QueryProps } from '../../../../domain/models/query.model.js';
export declare class LoadAllTableAction {
    private readonly session;
    constructor(session: QueryRunner);
    execute(query: QueryProps): Promise<LoadAllTableResponse>;
}
