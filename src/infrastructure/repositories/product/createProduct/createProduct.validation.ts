import { Repository } from 'typeorm';
import { ProductEntity } from '@infrastructure/entities/product.entity';
import { CreateProductRequest } from '@domain/models/product.model';

export class CreateProductValidation extends CreateProductRequest {
    constructor(private readonly productRepository: Repository<ProductEntity>) {
        super();
    }

    public async execute(params: CreateProductRequest): Promise<void> {
        try {
            await this.buildParams(params);
            await this.validateParams();
        } catch (error) {
            throw error instanceof Error ? error : new Error(String(error));
        }
    }

    private async buildParams(params: CreateProductRequest): Promise<void> {
        try {
            this.sku = params.sku;
            this.name = params.name;
        } catch (error) {
            console.log('ERROR buildParams', error?.message);
            throw new Error(error?.message || 'Unknown error');
        }
    }

    private async validateParams(): Promise<void> {
        try {
            if (!this.sku || this.sku.trim() === '') {
                throw new Error('Product SKU is required');
            }

            if (!this.name || this.name.trim() === '') {
                throw new Error('Product name is required');
            }

            const exist = await this.productRepository.findOne({
                where: { sku: this.sku }
            });

            if (exist) {
                throw new Error(`Product SKU "${this.sku}" already exists.`);
            }

        } catch (error) {
            console.log('ERROR validateParams', error?.message);
            throw error instanceof Error ? error : new Error(error?.message);
        }
    }
}
