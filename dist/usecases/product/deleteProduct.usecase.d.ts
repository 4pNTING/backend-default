import { IProductRepository } from '@domain/repositories/product.repository.interface';
import { DeleteProductRequest } from '@domain/models/product.model';
export declare class DeleteProductUseCase {
    private readonly productRepository;
    constructor(productRepository: IProductRepository);
    execute(params: DeleteProductRequest): Promise<void>;
}
