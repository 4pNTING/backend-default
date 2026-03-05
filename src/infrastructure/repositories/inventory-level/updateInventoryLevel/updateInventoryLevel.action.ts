import { QueryRunner } from 'typeorm';
import { InventoryLevelEntity } from '@infrastructure/entities/inventory-level.entity';
import { UpdateInventoryLevelRequest } from '@domain/models/inventory-level.model';

export class UpdateInventoryLevelAction {
    constructor(private readonly session: QueryRunner) { }

    public async execute(params: UpdateInventoryLevelRequest): Promise<void> {
        try {
            await this.session.manager.update(
                InventoryLevelEntity,
                { id: params.id },
                { quantity: params.quantity, updatedAt: new Date() }
            );
        } catch (error) {
            console.error('ERROR UpdateInventoryLevelAction.execute', error?.message);
            throw error instanceof Error ? error : new Error(error?.message);
        }
    }
}
