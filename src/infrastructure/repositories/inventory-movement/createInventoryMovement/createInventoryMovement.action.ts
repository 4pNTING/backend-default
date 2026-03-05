import { QueryRunner } from 'typeorm';
import { InventoryMovementEntity } from '@infrastructure/entities/inventory-movement.entity';
import { InventoryMovementModel, CreateInventoryMovementRequest, CreateInventoryMovementResponse } from '@domain/models/inventory-movement.model';

export class CreateInventoryMovementAction extends InventoryMovementModel {
    constructor(private readonly session: QueryRunner) {
        super();
    }

    public async execute(params: CreateInventoryMovementRequest): Promise<CreateInventoryMovementResponse> {
        try {
            this.productId = params.productId;
            this.zoneId = params.zoneId;
            this.type = params.type;
            this.quantity = params.quantity;
            this.note = params.note;
            this.userId = params.userId;
            this.createdAt = new Date();

            const entity = this.session.manager.create(InventoryMovementEntity, this);
            const savedEntity = await this.session.manager.save(InventoryMovementEntity, entity);

            if (savedEntity) {
                this.id = savedEntity.id;
            } else {
                throw new Error('Failed to save inventory movement into database');
            }

            return {
                id: this.id,
                productId: this.productId,
                zoneId: this.zoneId,
                type: this.type,
                quantity: this.quantity,
                note: this.note,
                userId: this.userId,
                createdAt: this.createdAt
            };
        } catch (error) {
            console.error('ERROR CreateInventoryMovementAction.execute', error?.message);
            throw error instanceof Error ? error : new Error(error?.message);
        }
    }
}
