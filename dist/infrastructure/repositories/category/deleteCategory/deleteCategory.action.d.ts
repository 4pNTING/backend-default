import { QueryRunner } from 'typeorm';
import { DeleteCategoryRequest } from '../../../../src/domain/models/category.model';
export declare class DeleteCategoryAction {
    private readonly session;
    constructor(session: QueryRunner);
    execute(params: DeleteCategoryRequest): Promise<void>;
}
