import { QueryRunner } from 'typeorm';
import { UpdateCategoryRequest } from '../../../../src/domain/models/category.model';
export declare class UpdateCategoryAction {
    private readonly session;
    constructor(session: QueryRunner);
    execute(params: UpdateCategoryRequest): Promise<void>;
}
