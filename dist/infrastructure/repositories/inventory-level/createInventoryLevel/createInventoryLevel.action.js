"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateInventoryLevelAction = void 0;
const inventory_level_entity_1 = require("@infrastructure/entities/inventory-level.entity");
const inventory_level_model_1 = require("@domain/models/inventory-level.model");
class CreateInventoryLevelAction extends inventory_level_model_1.InventoryLevelModel {
    constructor(session) {
        super();
        this.session = session;
    }
    async execute(params) {
        try {
            this.productId = params.productId;
            this.zoneId = params.zoneId;
            this.quantity = params.quantity;
            this.updatedAt = new Date();
            const entity = this.session.manager.create(inventory_level_entity_1.InventoryLevelEntity, this);
            const savedEntity = await this.session.manager.save(inventory_level_entity_1.InventoryLevelEntity, entity);
            if (savedEntity) {
                this.id = savedEntity.id;
            }
            else {
                throw new Error('Failed to save inventory level into database');
            }
            return {
                id: this.id,
                productId: this.productId,
                zoneId: this.zoneId,
                quantity: this.quantity,
                updatedAt: this.updatedAt
            };
        }
        catch (error) {
            console.error('ERROR CreateInventoryLevelAction.execute', error?.message);
            throw error instanceof Error ? error : new Error(error?.message);
        }
    }
}
exports.CreateInventoryLevelAction = CreateInventoryLevelAction;
//# sourceMappingURL=createInventoryLevel.action.js.map