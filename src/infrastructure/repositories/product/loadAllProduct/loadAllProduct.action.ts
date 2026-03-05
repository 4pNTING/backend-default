import { QueryRunner } from 'typeorm';
import { ProductEntity } from '@infrastructure/entities/product.entity';
import { LoadAllProductResponse } from '@domain/models/product.model';
import { QueryProps } from '@domain/models/query.model';

export class LoadAllProductAction {
    constructor(private readonly session: QueryRunner) { }

    public async execute(query: QueryProps): Promise<LoadAllProductResponse> {
        try {
            const qb = this.session.manager.createQueryBuilder(ProductEntity, 'product')
                .leftJoinAndSelect('product.category', 'category')
                .leftJoinAndSelect('product.inventoryLevels', 'inventoryLevels');

            // 1. Search (ค้นหาจาก SKU, Name, หรือ Description)
            if (query.search?.q) {
                const keyword = `%${query.search.q}%`;
                qb.andWhere(
                    `(product.sku LIKE :keyword OR product.name LIKE :keyword OR product.description LIKE :keyword)`,
                    { keyword }
                );
            }

            // 1.5 Filter (isActive)
            if (query.isActive !== undefined) {
                qb.andWhere('product.isActive = :isActive', { isActive: query.isActive });
            }

            // 2. Pagination
            const page = query.paginate?.page || 1;
            const limit = query.paginate?.limit || 10;
            qb.skip((page - 1) * limit).take(limit);

            // 3. Sort
            if (query.sort) {
                qb.orderBy('product.id', query.sort > 0 ? 'ASC' : 'DESC');
            } else {
                qb.orderBy('product.id', 'DESC'); // Default Sort
            }

            // Execute Query
            const [entities, total] = await qb.getManyAndCount();

            return { items: entities, total };

        } catch (error) {
            console.error('ERROR LoadAllProductAction', error?.message);
            throw error instanceof Error ? error : new Error(error?.message);
        }
    }
}
