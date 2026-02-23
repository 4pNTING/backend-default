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
exports.DatabaseCategoryRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const category_entity_1 = require("@infrastructure/entities/category.entity");
const createCategory_action_1 = require("./createCategory/createCategory.action");
const createCategory_validation_1 = require("./createCategory/createCategory.validation");
const updateCategory_action_1 = require("./updateCategory/updateCategory.action");
const updateCategory_validation_1 = require("./updateCategory/updateCategory.validation");
const restoreCategory_action_1 = require("./restoreCategory/restoreCategory.action");
const loadAllCategory_action_1 = require("./loadAllCategory/loadAllCategory.action");
const loadCategoryById_action_1 = require("./loadCategoryById/loadCategoryById.action");
const loadCategoryById_validation_1 = require("./loadCategoryById/loadCategoryById.validation");
let DatabaseCategoryRepository = class DatabaseCategoryRepository {
    constructor(categoryEntity, dataSource) {
        this.categoryEntity = categoryEntity;
        this.dataSource = dataSource;
    }
    async create(params) {
        const session = this.dataSource.createQueryRunner();
        await session.connect();
        await session.startTransaction();
        try {
            await new createCategory_validation_1.CreateCategoryValidation(this.categoryEntity).execute(params);
            const result = await new createCategory_action_1.CreateCategoryAction(session).execute(params);
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
            await new updateCategory_validation_1.UpdateCategoryValidation(this.categoryEntity).execute(params);
            await new updateCategory_action_1.UpdateCategoryAction(session).execute(params);
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
            await session.manager.softDelete(category_entity_1.CategoryEntity, params.id);
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
            await new restoreCategory_action_1.RestoreCategoryAction(session).execute(id);
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
            const result = await new loadAllCategory_action_1.LoadAllCategoryAction(session).execute(query);
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
        const session = this.dataSource.createQueryRunner();
        await session.connect();
        await session.startTransaction();
        try {
            await new loadCategoryById_validation_1.LoadCategoryByIdValidation(this.categoryEntity).execute(params);
            const result = await new loadCategoryById_action_1.LoadCategoryByIdAction(session).execute(params);
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
    async findByName(name) {
        const entity = await this.categoryEntity.findOne({ where: { name } });
        if (!entity)
            return null;
        return {
            id: entity.id,
            name: entity.name,
            description: entity.description,
            photo: entity.photo,
            createdAt: entity.createdAt,
            updatedAt: entity.updatedAt
        };
    }
};
exports.DatabaseCategoryRepository = DatabaseCategoryRepository;
exports.DatabaseCategoryRepository = DatabaseCategoryRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(category_entity_1.CategoryEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.DataSource])
], DatabaseCategoryRepository);
//# sourceMappingURL=category.repository.js.map