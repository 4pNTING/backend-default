import { Repository } from 'typeorm';
import { ProductEntity } from '@infrastructure/entities/product.entity';
import { CreateProductRequest } from '@domain/models/product.model';
export declare class CreateProductValidation extends CreateProductRequest {
    private readonly productRepository;
    constructor(productRepository: Repository<ProductEntity>);
    execute(params: CreateProductRequest): Promise<void>;
    private buildParams;
    private validateParams;
}
