"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateZoneAction = void 0;
const zone_entity_1 = require("@infrastructure/entities/zone.entity");
const zone_model_1 = require("@domain/models/zone.model");
class CreateZoneAction extends zone_model_1.ZoneModel {
    constructor(session) {
        super();
        this.session = session;
    }
    async execute(params) {
        try {
            await this.validateAndBuildParams(params);
            await this.persistZone();
            return this.buildResponse();
        }
        catch (error) {
            console.error('ERROR CreateZoneAction.execute', error?.message);
            throw error instanceof Error ? error : new Error(error?.message);
        }
    }
    async validateAndBuildParams(params) {
        try {
            this.name = params.name;
            this.description = params.description;
            this.isActive = params.isActive ?? true;
            this.createdAt = new Date();
            this.updatedAt = new Date();
        }
        catch (error) {
            console.error('ERROR validateAndBuildParams', error?.message);
            throw new Error(`Failed to build parameters: ${error?.message}`);
        }
    }
    async persistZone() {
        try {
            const entity = this.session.manager.create(zone_entity_1.ZoneEntity, this);
            const savedEntity = await this.session.manager.save(zone_entity_1.ZoneEntity, entity);
            if (savedEntity) {
                this.id = savedEntity.id;
            }
            else {
                throw new Error('Failed to save zone into database');
            }
        }
        catch (error) {
            console.error('ERROR persistZone', error?.message);
            throw new Error(`Failed to persist zone: ${error?.message}`);
        }
    }
    buildResponse() {
        try {
            return {
                id: this.id,
                name: this.name,
                description: this.description,
                isActive: this.isActive,
                createdAt: this.createdAt,
                updatedAt: this.updatedAt
            };
        }
        catch (error) {
            console.error('ERROR buildResponse', error?.message);
            throw new Error(`Failed to build response: ${error?.message}`);
        }
    }
}
exports.CreateZoneAction = CreateZoneAction;
//# sourceMappingURL=createZone.action.js.map