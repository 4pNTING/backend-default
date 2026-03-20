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
exports.DatabaseProductRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const product_entity_1 = require("@infrastructure/entities/product.entity");
const createProduct_action_1 = require("./createProduct/createProduct.action");
const createProduct_validation_1 = require("./createProduct/createProduct.validation");
const updateProduct_action_1 = require("./updateProduct/updateProduct.action");
const updateProduct_validation_1 = require("./updateProduct/updateProduct.validation");
const deleteProduct_action_1 = require("./deleteProduct/deleteProduct.action");
const restoreProduct_action_1 = require("./restoreProduct/restoreProduct.action");
const loadAllProduct_action_1 = require("./loadAllProduct/loadAllProduct.action");
const loadProductById_action_1 = require("./loadProductById/loadProductById.action");
const loadProductById_validation_1 = require("./loadProductById/loadProductById.validation");
let DatabaseProductRepository = class DatabaseProductRepository {
    constructor(productEntity, dataSource) {
        this.productEntity = productEntity;
        this.dataSource = dataSource;
    }
    async create(params) {
        const session = this.dataSource.createQueryRunner();
        await session.connect();
        await session.startTransaction();
        try {
            await new createProduct_validation_1.CreateProductValidation(this.productEntity).execute(params);
            const result = await new createProduct_action_1.CreateProductAction(session).execute(params);
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
            await new updateProduct_validation_1.UpdateProductValidation(this.productEntity).execute(params);
            await new updateProduct_action_1.UpdateProductAction(session).execute(params);
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
            await new deleteProduct_action_1.DeleteProductAction(session).execute(params);
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
            await new restoreProduct_action_1.RestoreProductAction(session).execute(id);
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
            const result = await new loadAllProduct_action_1.LoadAllProductAction(session).execute(query);
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
            await new loadProductById_validation_1.LoadProductByIdValidation(this.productEntity).execute(params);
            const result = await new loadProductById_action_1.LoadProductByIdAction(session).execute(params);
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
    async findBySku(sku) {
        const entity = await this.productEntity.findOne({ where: { sku } });
        if (!entity)
            return null;
        return {
            id: entity.id,
            sku: entity.sku,
            name: entity.name,
            description: entity.description,
            price: entity.price,
            cost: entity.cost,
            categoryId: entity.categoryId,
            lowStockThreshold: entity.lowStockThreshold,
            createdAt: entity.createdAt,
            updatedAt: entity.updatedAt,
            isActive: entity.isActive
        };
    }
};
exports.DatabaseProductRepository = DatabaseProductRepository;
exports.DatabaseProductRepository = DatabaseProductRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(product_entity_1.ProductEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.DataSource])
], DatabaseProductRepository);
//# sourceMappingURL=product.repository.js.map