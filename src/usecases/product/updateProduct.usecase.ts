import { IProductRepository } from '@domain/repositories/product.repository.interface';
import { UpdateProductRequest } from '@domain/models/product.model';

export class UpdateProductUseCase {
    constructor(private readonly productRepository: IProductRepository) { }

    async execute(params: UpdateProductRequest): Promise<void> {
        await this.productRepository.update(params);
    }
}
