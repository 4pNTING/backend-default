import { QueryRunner } from 'typeorm';
export declare class RestoreZoneAction {
    private readonly session;
    constructor(session: QueryRunner);
    execute(id: string): Promise<void>;
}
