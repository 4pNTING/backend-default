"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateInventoryMovementAction = void 0;
const inventory_movement_entity_1 = require("@infrastructure/entities/inventory-movement.entity");
const inventory_movement_model_1 = require("@domain/models/inventory-movement.model");
class CreateInventoryMovementAction extends inventory_movement_model_1.InventoryMovementModel {
    constructor(session) {
        super();
        this.session = session;
    }
    async execute(params) {
        try {
            this.productId = params.productId;
            this.zoneId = params.zoneId;
            this.type = params.type;
            this.quantity = params.quantity;
            this.note = params.note;
            this.userId = params.userId;
            this.createdAt = new Date();
            const entity = this.session.manager.create(inventory_movement_entity_1.InventoryMovementEntity, this);
            const savedEntity = await this.session.manager.save(inventory_movement_entity_1.InventoryMovementEntity, entity);
            if (savedEntity) {
                this.id = savedEntity.id;
            }
            else {
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
        }
        catch (error) {
            console.error('ERROR CreateInventoryMovementAction.execute', error?.message);
            throw error instanceof Error ? error : new Error(error?.message);
        }
    }
}
exports.CreateInventoryMovementAction = CreateInventoryMovementAction;
//# sourceMappingURL=createInventoryMovement.action.js.map