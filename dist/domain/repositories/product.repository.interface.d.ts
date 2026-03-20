import { CreateProductRequest, CreateProductResponse, UpdateProductRequest, DeleteProductRequest, LoadAllProductResponse, LoadProductByIdRequest, LoadProductByIdResponse } from '../models/product.model';
import { QueryProps } from '../models/query.model';
export interface IProductRepository {
    create(params: CreateProductRequest): Promise<CreateProductResponse>;
    update(params: UpdateProductRequest): Promise<void>;
    delete(params: DeleteProductRequest): Promise<void>;
    restore(id: string): Promise<void>;
    findAll(query: QueryProps): Promise<LoadAllProductResponse>;
    findById(params: LoadProductByIdRequest): Promise<LoadProductByIdResponse | null>;
    findBySku(sku: string): Promise<LoadProductByIdResponse | null>;
}
