import { QueryRunner } from 'typeorm';
import { LoadCategoryByIdRequest, LoadCategoryByIdResponse } from '../../../../src/domain/models/category.model';
export declare class LoadCategoryByIdAction {
    private readonly session;
    constructor(session: QueryRunner);
    execute(params: LoadCategoryByIdRequest): Promise<LoadCategoryByIdResponse | null>;
}
