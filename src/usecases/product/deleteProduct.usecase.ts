import { IProductRepository } from '@domain/repositories/product.repository.interface';
import { DeleteProductRequest } from '@domain/models/product.model';

export class DeleteProductUseCase {
    constructor(private readonly productRepository: IProductRepository) { }

    async execute(params: DeleteProductRequest): Promise<void> {
        await this.productRepository.delete(params);
    }
}
