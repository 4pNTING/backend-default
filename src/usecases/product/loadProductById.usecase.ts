import { IProductRepository } from '@domain/repositories/product.repository.interface';
import { LoadProductByIdRequest, LoadProductByIdResponse } from '@domain/models/product.model';

export class LoadProductByIdUseCase {
    constructor(private readonly productRepository: IProductRepository) { }

    async execute(params: LoadProductByIdRequest): Promise<LoadProductByIdResponse | null> {
        return await this.productRepository.findById(params);
    }
}
