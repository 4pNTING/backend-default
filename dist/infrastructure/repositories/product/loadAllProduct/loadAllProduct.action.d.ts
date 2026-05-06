import { QueryRunner } from 'typeorm';
import { LoadAllProductResponse } from '@domain/models/product.model';
import { QueryProps } from '../../../../src/domain/models/query.model';
export declare class LoadAllProductAction {
    private readonly session;
    constructor(session: QueryRunner);
    execute(query: QueryProps): Promise<LoadAllProductResponse>;
}
