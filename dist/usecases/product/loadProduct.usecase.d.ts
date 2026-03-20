import { IProductRepository } from '@domain/repositories/product.repository.interface';
import { LoadAllProductResponse } from '@domain/models/product.model';
import { QueryProps } from '@domain/models/query.model';
export declare class LoadProductUseCase {
    private readonly productRepository;
    constructor(productRepository: IProductRepository);
    execute(query: QueryProps): Promise<LoadAllProductResponse>;
}
