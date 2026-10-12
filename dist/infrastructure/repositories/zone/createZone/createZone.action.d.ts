import { QueryRunner } from 'typeorm';
import { ZoneModel, CreateZoneRequest, CreateZoneResponse } from '../../../../domain/models/zone.model.js';
export declare class CreateZoneAction extends ZoneModel {
    private readonly session;
    constructor(session: QueryRunner);
    execute(params: CreateZoneRequest): Promise<CreateZoneResponse>;
    private validateAndBuildParams;
    private persistZone;
    private buildResponse;
}
