import { QueryRunner } from 'typeorm';
import { UpdateZoneRequest } from '../../../../src/domain/models/zone.model';
export declare class UpdateZoneAction {
    private readonly session;
    constructor(session: QueryRunner);
    execute(params: UpdateZoneRequest): Promise<void>;
}
