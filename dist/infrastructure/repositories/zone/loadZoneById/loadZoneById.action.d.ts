import { QueryRunner } from 'typeorm';
import { LoadZoneByIdRequest, LoadZoneByIdResponse } from '../../../../src/domain/models/zone.model';
export declare class LoadZoneByIdAction {
    private readonly session;
    constructor(session: QueryRunner);
    execute(params: LoadZoneByIdRequest): Promise<LoadZoneByIdResponse | null>;
}
