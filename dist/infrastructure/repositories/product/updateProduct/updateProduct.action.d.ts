import { QueryRunner } from 'typeorm';
import { UpdateProductRequest } from '@domain/models/product.model';
export declare class UpdateProductAction {
    private readonly session;
    constructor(session: QueryRunner);
    execute(params: UpdateProductRequest): Promise<void>;
}
