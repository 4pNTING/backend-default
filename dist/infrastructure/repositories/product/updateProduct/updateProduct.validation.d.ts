import { Repository } from 'typeorm';
import { ProductEntity } from '@infrastructure/entities/product.entity';
import { UpdateProductRequest } from '@domain/models/product.model';
export declare class UpdateProductValidation extends UpdateProductRequest {
    private readonly productRepository;
    constructor(productRepository: Repository<ProductEntity>);
    execute(params: UpdateProductRequest): Promise<void>;
    private buildParams;
    private validateParams;
}
