import { QueryRunner } from 'typeorm';
import { InventoryLevelEntity } from '@infrastructure/entities/inventory-level.entity';
import { LoadAllInventoryLevelResponse } from '@domain/models/inventory-level.model';
import { QueryProps } from '@domain/models/query.model';

export class LoadAllInventoryLevelAction {
    constructor(private readonly session: QueryRunner) { }

    public async execute(query: QueryProps): Promise<LoadAllInventoryLevelResponse> {
        try {
            const qb = this.session.manager.createQueryBuilder(InventoryLevelEntity, 'level');

            if ((query as any).productId !== undefined) {
                qb.andWhere('level.productId = :productId', { productId: (query as any).productId });
            }

            if ((query as any).zoneId !== undefined) {
                qb.andWhere('level.zoneId = :zoneId', { zoneId: (query as any).zoneId });
            }

            if (query.sort) {
                qb.orderBy('level.id', query.sort > 0 ? 'ASC' : 'DESC');
            } else {
                qb.orderBy('level.id', 'DESC');
            }

            const page = query.paginate?.page || 1;
            const limit = query.paginate?.limit || 10;
            qb.skip((page - 1) * limit).take(limit);

            const [entities, total] = await qb.getManyAndCount();

            return { items: entities, total };
        } catch (error) {
            console.error('ERROR LoadAllInventoryLevelAction', error?.message);
            throw error instanceof Error ? error : new Error(error?.message);
        }
    }
}
