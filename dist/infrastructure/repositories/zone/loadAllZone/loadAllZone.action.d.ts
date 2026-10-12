import { QueryRunner } from 'typeorm';
import { LoadAllZoneResponse } from '../../../../domain/models/zone.model.js';
import { QueryProps } from '../../../../domain/models/query.model.js';
export declare class LoadAllZoneAction {
    private readonly session;
    constructor(session: QueryRunner);
    execute(query: QueryProps): Promise<LoadAllZoneResponse>;
}
