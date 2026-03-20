import { IProductRepository } from '@domain/repositories/product.repository.interface';
import { UpdateProductRequest } from '@domain/models/product.model';
export declare class UpdateProductUseCase {
    private readonly productRepository;
    constructor(productRepository: IProductRepository);
    execute(params: UpdateProductRequest): Promise<void>;
}
