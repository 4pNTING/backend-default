import { IProductRepository } from '@domain/repositories/product.repository.interface';
export declare class RestoreProductUseCase {
    private readonly productRepository;
    constructor(productRepository: IProductRepository);
    execute(id: string): Promise<void>;
}
