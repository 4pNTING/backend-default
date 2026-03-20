import { IProductRepository } from '@domain/repositories/product.repository.interface';
import { LoadProductByIdRequest, LoadProductByIdResponse } from '@domain/models/product.model';
export declare class LoadProductByIdUseCase {
    private readonly productRepository;
    constructor(productRepository: IProductRepository);
    execute(params: LoadProductByIdRequest): Promise<LoadProductByIdResponse | null>;
}
