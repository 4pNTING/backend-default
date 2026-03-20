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
exports.DatabaseInventoryLevelRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const inventory_level_entity_1 = require("@infrastructure/entities/inventory-level.entity");
const createInventoryLevel_action_1 = require("./createInventoryLevel/createInventoryLevel.action");
const updateInventoryLevel_action_1 = require("./updateInventoryLevel/updateInventoryLevel.action");
const loadAllInventoryLevel_action_1 = require("./loadAllInventoryLevel/loadAllInventoryLevel.action");
let DatabaseInventoryLevelRepository = class DatabaseInventoryLevelRepository {
    constructor(entityRepository, dataSource) {
        this.entityRepository = entityRepository;
        this.dataSource = dataSource;
    }
    async create(params) {
        const session = this.dataSource.createQueryRunner();
        await session.connect();
        await session.startTransaction();
        try {
            const result = await new createInventoryLevel_action_1.CreateInventoryLevelAction(session).execute(params);
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
    async update(params) {
        const session = this.dataSource.createQueryRunner();
        await session.connect();
        await session.startTransaction();
        try {
            await new updateInventoryLevel_action_1.UpdateInventoryLevelAction(session).execute(params);
            await session.commitTransaction();
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
            const result = await new loadAllInventoryLevel_action_1.LoadAllInventoryLevelAction(session).execute(query);
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
            where: { id: params.id },
            relations: ['product', 'zone']
        });
        if (!entity)
            return null;
        return {
            id: entity.id,
            productId: entity.productId,
            zoneId: entity.zoneId,
            quantity: entity.quantity,
            updatedAt: entity.updatedAt,
            product: entity.product,
            zone: entity.zone,
        };
    }
    async findByProductAndZone(params) {
        const entity = await this.entityRepository.findOne({
            where: { productId: params.productId, zoneId: params.zoneId },
            relations: ['product', 'zone']
        });
        if (!entity)
            return null;
        return {
            id: entity.id,
            productId: entity.productId,
            zoneId: entity.zoneId,
            quantity: entity.quantity,
            updatedAt: entity.updatedAt,
            product: entity.product,
            zone: entity.zone,
        };
    }
};
exports.DatabaseInventoryLevelRepository = DatabaseInventoryLevelRepository;
exports.DatabaseInventoryLevelRepository = DatabaseInventoryLevelRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(inventory_level_entity_1.InventoryLevelEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.DataSource])
], DatabaseInventoryLevelRepository);
//# sourceMappingURL=inventory-level.repository.js.map