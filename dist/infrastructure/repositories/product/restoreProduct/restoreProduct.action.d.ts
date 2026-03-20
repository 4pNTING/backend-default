import { QueryRunner } from 'typeorm';
export declare class RestoreProductAction {
    private readonly session;
    constructor(session: QueryRunner);
    execute(id: string): Promise<void>;
}
