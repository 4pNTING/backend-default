import { QueryRunner } from 'typeorm';
import { LoadProductByIdRequest, LoadProductByIdResponse } from '@domain/models/product.model';
export declare class LoadProductByIdAction {
    private readonly session;
    constructor(session: QueryRunner);
    execute(params: LoadProductByIdRequest): Promise<LoadProductByIdResponse | null>;
}
