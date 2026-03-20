import { QueryRunner } from 'typeorm';
export declare class DeleteZoneAction {
    private readonly session;
    constructor(session: QueryRunner);
    execute(id: string): Promise<void>;
}
