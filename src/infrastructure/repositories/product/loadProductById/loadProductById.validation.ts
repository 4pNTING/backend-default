import { Repository } from 'typeorm';
import { ProductEntity } from '@infrastructure/entities/product.entity';
import { LoadProductByIdRequest } from '@domain/models/product.model';

export class LoadProductByIdValidation {
    constructor(private readonly productRepository: Repository<ProductEntity>) { }

    public async execute(params: LoadProductByIdRequest): Promise<void> {
        if (!params.id) {
            throw new Error('Product ID is required');
        }

        const exists = await this.productRepository.findOne({ where: { id: params.id } });
        if (!exists) {
            throw new Error(`Product not found with id: ${params.id}`);
        }
    }
}
