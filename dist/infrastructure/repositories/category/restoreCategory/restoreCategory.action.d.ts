import { QueryRunner } from 'typeorm';
export declare class RestoreCategoryAction {
    private readonly session;
    constructor(session: QueryRunner);
    execute(id: string): Promise<void>;
}
