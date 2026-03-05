import { QueryRunner } from 'typeorm';
import { InventoryLevelEntity } from '@infrastructure/entities/inventory-level.entity';
import { InventoryLevelModel, CreateInventoryLevelRequest, CreateInventoryLevelResponse } from '@domain/models/inventory-level.model';

export class CreateInventoryLevelAction extends InventoryLevelModel {
    constructor(private readonly session: QueryRunner) {
        super();
    }

    public async execute(params: CreateInventoryLevelRequest): Promise<CreateInventoryLevelResponse> {
        try {
            this.productId = params.productId;
            this.zoneId = params.zoneId;
            this.quantity = params.quantity;
            this.updatedAt = new Date();

            const entity = this.session.manager.create(InventoryLevelEntity, this);
            const savedEntity = await this.session.manager.save(InventoryLevelEntity, entity);

            if (savedEntity) {
                this.id = savedEntity.id;
            } else {
                throw new Error('Failed to save inventory level into database');
            }

            return {
                id: this.id,
                productId: this.productId,
                zoneId: this.zoneId,
                quantity: this.quantity,
                updatedAt: this.updatedAt
            };
        } catch (error) {
            console.error('ERROR CreateInventoryLevelAction.execute', error?.message);
            throw error instanceof Error ? error : new Error(error?.message);
        }
    }
}
