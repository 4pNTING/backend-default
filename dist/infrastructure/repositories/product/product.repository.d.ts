import { DataSource, Repository } from 'typeorm';
import { ProductEntity } from '@infrastructure/entities/product.entity';
import { IProductRepository } from '@domain/repositories/product.repository.interface';
import { CreateProductRequest, CreateProductResponse, UpdateProductRequest, DeleteProductRequest, LoadAllProductResponse, LoadProductByIdRequest, LoadProductByIdResponse } from '@domain/models/product.model';
import { QueryProps } from '@domain/models/query.model';
export declare class DatabaseProductRepository implements IProductRepository {
    private readonly productEntity;
    private readonly dataSource;
    constructor(productEntity: Repository<ProductEntity>, dataSource: DataSource);
    create(params: CreateProductRequest): Promise<CreateProductResponse>;
    update(params: UpdateProductRequest): Promise<void>;
    delete(params: DeleteProductRequest): Promise<void>;
    restore(id: string): Promise<void>;
    findAll(query: QueryProps): Promise<LoadAllProductResponse>;
    findById(params: LoadProductByIdRequest): Promise<LoadProductByIdResponse | null>;
    findBySku(sku: string): Promise<LoadProductByIdResponse | null>;
}
