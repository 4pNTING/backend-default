import { QueryRunner } from 'typeorm';
import { DeleteCategoryRequest } from '@domain/models/category.model';
export declare class DeleteCategoryAction {
    private readonly session;
    constructor(session: QueryRunner);
    execute(params: DeleteCategoryRequest): Promise<void>;
}
