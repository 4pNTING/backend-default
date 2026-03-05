import { IProductRepository } from '@domain/repositories/product.repository.interface';
import { CreateProductRequest, CreateProductResponse } from '@domain/models/product.model';

export class CreateProductUseCase {
    constructor(private readonly productRepository: IProductRepository) { }

    async execute(params: CreateProductRequest): Promise<CreateProductResponse> {
        return await this.productRepository.create(params);
    }
}
