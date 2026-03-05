import { IProductRepository } from '@domain/repositories/product.repository.interface';

export class RestoreProductUseCase {
    constructor(private readonly productRepository: IProductRepository) { }

    async execute(id: number): Promise<void> {
        await this.productRepository.restore(id);
    }
}
