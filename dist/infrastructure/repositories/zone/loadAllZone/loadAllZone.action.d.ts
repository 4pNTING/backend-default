import { QueryRunner } from 'typeorm';
import { LoadAllZoneResponse } from '../../../../src/domain/models/zone.model';
import { QueryProps } from '../../../../src/domain/models/query.model';
export declare class LoadAllZoneAction {
    private readonly session;
    constructor(session: QueryRunner);
    execute(query: QueryProps): Promise<LoadAllZoneResponse>;
}
