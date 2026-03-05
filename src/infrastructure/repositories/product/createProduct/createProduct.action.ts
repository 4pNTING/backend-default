import { QueryRunner } from 'typeorm';
import { ProductEntity } from '@infrastructure/entities/product.entity';
import { ProductModel, CreateProductRequest, CreateProductResponse } from '@domain/models/product.model';

export class CreateProductAction extends ProductModel {
    constructor(private readonly session: QueryRunner) {
        super();
    }

    public async execute(params: CreateProductRequest): Promise<CreateProductResponse> {
        try {
            await this.validateAndBuildParams(params);
            await this.persistProduct();

            return this.buildResponse();
        } catch (error) {
            console.error('ERROR CreateProductAction.execute', error?.message);
            throw error instanceof Error ? error : new Error(error?.message);
        }
    }

    private async validateAndBuildParams(params: CreateProductRequest): Promise<void> {
        try {
            this.sku = params.sku;
            this.name = params.name;
            this.description = params.description;
            this.price = params.price;
            this.cost = params.cost;
            this.categoryId = params.categoryId;
            this.lowStockThreshold = params.lowStockThreshold ?? 5;
            this.isActive = params.isActive ?? true;

            this.createdAt = new Date();
            this.updatedAt = new Date();
        } catch (error) {
            console.error('ERROR validateAndBuildParams', error?.message);
            throw new Error(`Failed to build parameters: ${error?.message}`);
        }
    }

    private async persistProduct(): Promise<void> {
        try {
            const entity = this.session.manager.create(ProductEntity, this);
            const savedEntity = await this.session.manager.save(ProductEntity, entity);

            if (savedEntity) {
                this.id = savedEntity.id;
            } else {
                throw new Error('Failed to save product into database');
            }
        } catch (error) {
            console.error('ERROR persistProduct', error?.message);
            throw new Error(`Failed to persist product: ${error?.message}`);
        }
    }

    private buildResponse(): CreateProductResponse {
        try {
            return {
                id: this.id,
                sku: this.sku,
                name: this.name,
                description: this.description,
                price: this.price,
                cost: this.cost,
                categoryId: this.categoryId,
                lowStockThreshold: this.lowStockThreshold,
                createdAt: this.createdAt,
                updatedAt: this.updatedAt,
                isActive: this.isActive
            };
        } catch (error) {
            console.error('ERROR buildResponse', error?.message);
            throw new Error(`Failed to build response: ${error?.message}`);
        }
    }
}
