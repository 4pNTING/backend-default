"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseInventoryMovementRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const inventory_movement_entity_1 = require("@infrastructure/entities/inventory-movement.entity");
const createInventoryMovement_action_1 = require("./createInventoryMovement/createInventoryMovement.action");
const loadAllInventoryMovement_action_1 = require("./loadAllInventoryMovement/loadAllInventoryMovement.action");
let DatabaseInventoryMovementRepository = class DatabaseInventoryMovementRepository {
    constructor(entityRepository, dataSource) {
        this.entityRepository = entityRepository;
        this.dataSource = dataSource;
    }
    async create(params) {
        const session = this.dataSource.createQueryRunner();
        await session.connect();
        await session.startTransaction();
        try {
            const result = await new createInventoryMovement_action_1.CreateInventoryMovementAction(session).execute(params);
            await session.commitTransaction();
            return result;
        }
        catch (error) {
            await session.rollbackTransaction();
            throw error;
        }
        finally {
            await session.release();
        }
    }
    async findAll(query) {
        const session = this.dataSource.createQueryRunner();
        await session.connect();
        await session.startTransaction();
        try {
            const result = await new loadAllInventoryMovement_action_1.LoadAllInventoryMovementAction(session).execute(query);
            await session.commitTransaction();
            return result;
        }
        catch (error) {
            await session.rollbackTransaction();
            throw error;
        }
        finally {
            await session.release();
        }
    }
    async findById(params) {
        const entity = await this.entityRepository.findOne({
            where: { id: params.id }
        });
        if (!entity)
            return null;
        return {
            id: entity.id,
            productId: entity.productId,
            zoneId: entity.zoneId,
            type: entity.type,
            quantity: entity.quantity,
            note: entity.note,
            userId: entity.userId,
            createdAt: entity.createdAt,
        };
    }
};
exports.DatabaseInventoryMovementRepository = DatabaseInventoryMovementRepository;
exports.DatabaseInventoryMovementRepository = DatabaseInventoryMovementRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(inventory_movement_entity_1.InventoryMovementEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.DataSource])
], DatabaseInventoryMovementRepository);
//# sourceMappingURL=inventory-movement.repository.js.map