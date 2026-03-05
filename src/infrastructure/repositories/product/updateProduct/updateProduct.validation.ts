import { Repository, Not } from 'typeorm';
import { ProductEntity } from '@infrastructure/entities/product.entity';
import { UpdateProductRequest } from '@domain/models/product.model';

export class UpdateProductValidation extends UpdateProductRequest {
    constructor(private readonly productRepository: Repository<ProductEntity>) {
        super();
    }

    public async execute(params: UpdateProductRequest): Promise<void> {
        try {
            await this.buildParams(params);
            await this.validateParams();
        } catch (error) {
            throw error instanceof Error ? error : new Error(String(error));
        }
    }

    private async buildParams(params: UpdateProductRequest): Promise<void> {
        try {
            this.id = params.id;
            this.sku = params.sku;
            this.name = params.name;
        } catch (error) {
            console.log('ERROR buildParams', error?.message);
            throw new Error(error?.message || 'Unknown error');
        }
    }

    private async validateParams(): Promise<void> {
        try {
            if (!this.id) {
                throw new Error('Product ID is required for update');
            }

            const existingProduct = await this.productRepository.findOne({ where: { id: this.id } });
            if (!existingProduct) {
                throw new Error(`Product with ID ${this.id} not found`);
            }

            if (this.sku && this.sku !== existingProduct.sku) {
                const existSku = await this.productRepository.findOne({
                    where: { sku: this.sku, id: Not(this.id) }
                });
                if (existSku) {
                    throw new Error(`Product SKU "${this.sku}" is already in use by another product.`);
                }
            }

        } catch (error) {
            console.log('ERROR validateParams', error?.message);
            throw error instanceof Error ? error : new Error(error?.message);
        }
    }
}
