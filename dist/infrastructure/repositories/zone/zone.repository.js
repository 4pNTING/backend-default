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
exports.DatabaseZoneRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const zone_entity_1 = require("../../entities/zone.entity");
const createZone_action_1 = require("./createZone/createZone.action");
const updateZone_action_1 = require("./updateZone/updateZone.action");
const deleteZone_action_1 = require("./deleteZone/deleteZone.action");
const restoreZone_action_1 = require("./restoreZone/restoreZone.action");
const loadAllZone_action_1 = require("./loadAllZone/loadAllZone.action");
const loadZoneById_action_1 = require("./loadZoneById/loadZoneById.action");
let DatabaseZoneRepository = class DatabaseZoneRepository {
    constructor(zoneEntityRepository, dataSource) {
        this.zoneEntityRepository = zoneEntityRepository;
        this.dataSource = dataSource;
    }
    async create(params) {
        const session = this.dataSource.createQueryRunner();
        await session.connect();
        await session.startTransaction();
        try {
            const result = await new createZone_action_1.CreateZoneAction(session).execute(params);
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
            await new updateZone_action_1.UpdateZoneAction(session).execute(params);
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
    async delete(params) {
        const session = this.dataSource.createQueryRunner();
        await session.connect();
        await session.startTransaction();
        try {
            await new deleteZone_action_1.DeleteZoneAction(session).execute(params.id);
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
    async restore(id) {
        const session = this.dataSource.createQueryRunner();
        await session.connect();
        await session.startTransaction();
        try {
            await new restoreZone_action_1.RestoreZoneAction(session).execute(id);
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
        try {
            return await new loadAllZone_action_1.LoadAllZoneAction(session).execute(query);
        }
        finally {
            await session.release();
        }
    }
    async findById(params) {
        const session = this.dataSource.createQueryRunner();
        await session.connect();
        try {
            return await new loadZoneById_action_1.LoadZoneByIdAction(session).execute(params);
        }
        finally {
            await session.release();
        }
    }
    async findByName(name) {
        const entity = await this.zoneEntityRepository.findOne({ where: { name } });
        if (!entity)
            return null;
        return entity;
    }
};
exports.DatabaseZoneRepository = DatabaseZoneRepository;
exports.DatabaseZoneRepository = DatabaseZoneRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(zone_entity_1.ZoneEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.DataSource])
], DatabaseZoneRepository);
//# sourceMappingURL=zone.repository.js.map