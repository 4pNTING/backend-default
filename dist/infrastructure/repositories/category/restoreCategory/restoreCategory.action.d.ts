import { QueryRunner } from 'typeorm';
export declare class RestoreCategoryAction {
    private readonly session;
    constructor(session: QueryRunner);
    execute(_id: string): Promise<void>;
}
