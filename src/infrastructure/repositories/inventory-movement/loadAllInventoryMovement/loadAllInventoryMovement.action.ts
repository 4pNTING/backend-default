import { QueryRunner } from 'typeorm';
import { InventoryMovementEntity } from '@infrastructure/entities/inventory-movement.entity';
import { LoadAllInventoryMovementResponse } from '@domain/models/inventory-movement.model';
import { QueryProps } from '@domain/models/query.model';

export class LoadAllInventoryMovementAction {
    constructor(private readonly session: QueryRunner) { }

    public async execute(query: QueryProps): Promise<LoadAllInventoryMovementResponse> {
        try {
            const qb = this.session.manager.createQueryBuilder(InventoryMovementEntity, 'movement');

            // Pagination
            const page = query.paginate?.page || 1;
            const limit = query.paginate?.limit || 10;
            qb.skip((page - 1) * limit).take(limit);

            // Sort
            if (query.sort) {
                qb.orderBy('movement.id', query.sort > 0 ? 'ASC' : 'DESC');
            } else {
                qb.orderBy('movement.createdAt', 'DESC'); // Default order new to old
            }

            const [entities, total] = await qb.getManyAndCount();

            return { items: entities, total };
        } catch (error) {
            console.error('ERROR LoadAllInventoryMovementAction', error?.message);
            throw error instanceof Error ? error : new Error(error?.message);
        }
    }
}
