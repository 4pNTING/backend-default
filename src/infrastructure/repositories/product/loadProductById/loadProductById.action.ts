import { QueryRunner } from 'typeorm';
import { ProductEntity } from '@infrastructure/entities/product.entity';
import { LoadProductByIdRequest, LoadProductByIdResponse } from '@domain/models/product.model';

export class LoadProductByIdAction {
    constructor(private readonly session: QueryRunner) { }

    public async execute(params: LoadProductByIdRequest): Promise<LoadProductByIdResponse | null> {
        try {
            const entity = await this.session.manager.findOne(ProductEntity, {
                where: { id: params.id },
                relations: ['category', 'inventoryLevels']
            });

            if (!entity) return null;

            return {
                id: entity.id,
                sku: entity.sku,
                name: entity.name,
                description: entity.description,
                price: entity.price,
                cost: entity.cost,
                categoryId: entity.categoryId,
                lowStockThreshold: entity.lowStockThreshold,
                createdAt: entity.createdAt,
                updatedAt: entity.updatedAt,
                isActive: entity.isActive
            };
        } catch (error) {
            console.error('ERROR LoadProductByIdAction.execute', error?.message);
            throw error instanceof Error ? error : new Error(error?.message);
        }
    }
}
