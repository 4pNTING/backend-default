import { QueryRunner } from 'typeorm';
import { DeleteProductRequest } from '@domain/models/product.model';
export declare class DeleteProductAction {
    private readonly session;
    constructor(session: QueryRunner);
    execute(params: DeleteProductRequest): Promise<void>;
}
