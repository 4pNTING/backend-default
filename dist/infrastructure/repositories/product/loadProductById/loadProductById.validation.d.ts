import { Repository } from 'typeorm';
import { ProductEntity } from '@infrastructure/entities/product.entity';
import { LoadProductByIdRequest } from '@domain/models/product.model';
export declare class LoadProductByIdValidation {
    private readonly productRepository;
    constructor(productRepository: Repository<ProductEntity>);
    execute(params: LoadProductByIdRequest): Promise<void>;
}
