import { QueryRunner } from 'typeorm';
export declare class RestoreZoneAction {
    private readonly session;
    constructor(session: QueryRunner);
    execute(id: number): Promise<void>;
}
