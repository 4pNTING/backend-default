import { IProductRepository } from '@domain/repositories/product.repository.interface';
import { CreateProductRequest, CreateProductResponse } from '@domain/models/product.model';
export declare class CreateProductUseCase {
    private readonly productRepository;
    constructor(productRepository: IProductRepository);
    execute(params: CreateProductRequest): Promise<CreateProductResponse>;
}
