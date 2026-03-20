import { QueryRunner } from 'typeorm';
import { ProductModel, CreateProductRequest, CreateProductResponse } from '@domain/models/product.model';
export declare class CreateProductAction extends ProductModel {
    private readonly session;
    constructor(session: QueryRunner);
    execute(params: CreateProductRequest): Promise<CreateProductResponse>;
    private validateAndBuildParams;
    private persistProduct;
    private buildResponse;
}
