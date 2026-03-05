import { IProductRepository } from '@domain/repositories/product.repository.interface';
import { LoadAllProductResponse } from '@domain/models/product.model';
import { QueryProps } from '@domain/models/query.model';

export class LoadProductUseCase {
    constructor(private readonly productRepository: IProductRepository) { }

    async execute(query: QueryProps): Promise<LoadAllProductResponse> {
        return await this.productRepository.findAll(query);
    }
}
