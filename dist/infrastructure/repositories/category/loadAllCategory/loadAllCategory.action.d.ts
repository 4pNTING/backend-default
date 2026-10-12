import { QueryRunner } from 'typeorm';
import { LoadAllCategoryResponse } from '../../../../domain/models/category.model.js';
import { QueryProps } from '../../../../domain/models/query.model.js';
export declare class LoadAllCategoryAction {
    private readonly session;
    constructor(session: QueryRunner);
    execute(query: QueryProps): Promise<LoadAllCategoryResponse>;
}
