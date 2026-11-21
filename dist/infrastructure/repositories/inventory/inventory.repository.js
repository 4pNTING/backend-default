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
exports.DatabaseInventoryRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const inventory_item_entity_1 = require("../../entities/inventory-item.entity");
const recipe_item_entity_1 = require("../../entities/recipe-item.entity");
const stock_transaction_entity_1 = require("../../entities/stock-transaction.entity");
const menu_item_entity_1 = require("../../entities/menu-item.entity");
const order_entity_1 = require("../../entities/order.entity");
const enum_1 = require("../../../domain/enums/enum.js");
const redis_service_1 = require("../../cache/redis.service");
const cache_keys_constants_1 = require("../../cache/cache-keys.constants");
let DatabaseInventoryRepository = class DatabaseInventoryRepository {
    constructor(inventoryItemEntity, recipeItemEntity, stockTransactionEntity, menuItemEntity, dataSource, redisService) {
        this.inventoryItemEntity = inventoryItemEntity;
        this.recipeItemEntity = recipeItemEntity;
        this.stockTransactionEntity = stockTransactionEntity;
        this.menuItemEntity = menuItemEntity;
        this.dataSource = dataSource;
        this.redisService = redisService;
    }
    async createItem(params) {
        const session = this.dataSource.createQueryRunner();
        await session.connect();
        await session.startTransaction();
        try {
            const entity = session.manager.create(inventory_item_entity_1.InventoryItemEntity, {
                name: params.name,
                sku: params.sku,
                category: params.category,
                unit: params.unit,
                currentStock: params.currentStock ?? 0,
                minStockAlert: params.minStockAlert ?? 0,
                costPerUnit: params.costPerUnit ?? 0,
                isActive: params.isActive ?? enum_1.ActiveStatus.active,
            });
            const saved = await session.manager.save(inventory_item_entity_1.InventoryItemEntity, entity);
            if (params.currentStock && params.currentStock > 0) {
                const tx = session.manager.create(stock_transaction_entity_1.StockTransactionEntity, {
                    inventoryItemId: saved._id,
                    type: enum_1.StockTransactionType.IN,
                    quantity: params.currentStock,
                    balanceAfter: params.currentStock,
                    note: 'Initial stock on creation',
                });
                await session.manager.save(stock_transaction_entity_1.StockTransactionEntity, tx);
            }
            await session.commitTransaction();
            await this.redisService.delByPattern(cache_keys_constants_1.CacheKeys.INVENTORY_LIST_PATTERN);
            await this.redisService.del(cache_keys_constants_1.CacheKeys.INVENTORY_LOW_STOCK);
            return saved;
        }
        catch (error) {
            await session.rollbackTransaction();
            throw error;
        }
        finally {
            await session.release();
        }
    }
    async updateItem(params) {
        const item = await this.inventoryItemEntity.findOne({ where: { _id: params._id } });
        if (!item) {
            throw new common_1.NotFoundException(`Inventory item not found`);
        }
        const updateData = {};
        if (params.name !== undefined)
            updateData.name = params.name;
        if (params.sku !== undefined)
            updateData.sku = params.sku;
        if (params.category !== undefined)
            updateData.category = params.category;
        if (params.unit !== undefined)
            updateData.unit = params.unit;
        if (params.minStockAlert !== undefined)
            updateData.minStockAlert = params.minStockAlert;
        if (params.costPerUnit !== undefined)
            updateData.costPerUnit = params.costPerUnit;
        if (params.isActive !== undefined)
            updateData.isActive = params.isActive;
        await this.inventoryItemEntity.update({ _id: params._id }, updateData);
        await this.redisService.del(cache_keys_constants_1.CacheKeys.INVENTORY_BY_ID(params._id));
        await this.redisService.delByPattern(cache_keys_constants_1.CacheKeys.INVENTORY_LIST_PATTERN);
        await this.redisService.del(cache_keys_constants_1.CacheKeys.INVENTORY_LOW_STOCK);
        const updated = await this.inventoryItemEntity.findOne({ where: { _id: params._id } });
        return updated;
    }
    async deleteItem(params) {
        await this.inventoryItemEntity.softDelete(params._id);
        await this.redisService.del(cache_keys_constants_1.CacheKeys.INVENTORY_BY_ID(params._id));
        await this.redisService.delByPattern(cache_keys_constants_1.CacheKeys.INVENTORY_LIST_PATTERN);
        await this.redisService.del(cache_keys_constants_1.CacheKeys.INVENTORY_LOW_STOCK);
        return { _id: params._id };
    }
    async findAll(params) {
        const page = params.page ?? 1;
        const limit = params.limit ?? 50;
        const qb = this.inventoryItemEntity.createQueryBuilder('item');
        if (params.search) {
            qb.andWhere('(item.name ILIKE :search OR item.sku ILIKE :search)', {
                search: `%${params.search}%`,
            });
        }
        if (params.category) {
            qb.andWhere('item.category = :category', { category: params.category });
        }
        if (params.isActive && params.isActive !== enum_1.ActiveStatus.all) {
            qb.andWhere('item.isActive = :isActive', { isActive: params.isActive });
        }
        qb.orderBy('item.createdAt', 'DESC');
        qb.skip((page - 1) * limit).take(limit);
        const [items, total] = await qb.getManyAndCount();
        return { items, total };
    }
    async findLowStock() {
        const qb = this.inventoryItemEntity.createQueryBuilder('item');
        qb.where('item.isActive = :active', { active: enum_1.ActiveStatus.active });
        qb.andWhere('item.currentStock <= item.minStockAlert');
        qb.orderBy('item.currentStock', 'ASC');
        const items = await qb.getMany();
        return { items };
    }
    async adjustStock(params) {
        const session = this.dataSource.createQueryRunner();
        await session.connect();
        await session.startTransaction();
        try {
            const item = await session.manager.findOne(inventory_item_entity_1.InventoryItemEntity, {
                where: { _id: params.inventoryItemId },
            });
            if (!item) {
                throw new common_1.NotFoundException(`Inventory item not found`);
            }
            let delta = Number(params.quantity);
            if (params.type === enum_1.StockTransactionType.WASTE || params.type === enum_1.StockTransactionType.OUT_SALE) {
                delta = delta > 0 ? -delta : delta;
            }
            const current = Number(item.currentStock);
            const balanceAfter = current + delta;
            await session.manager.update(inventory_item_entity_1.InventoryItemEntity, { _id: item._id }, {
                currentStock: balanceAfter,
            });
            const tx = session.manager.create(stock_transaction_entity_1.StockTransactionEntity, {
                inventoryItemId: item._id,
                type: params.type,
                quantity: delta,
                balanceAfter,
                staffId: params.staffId,
                note: params.note,
            });
            const savedTx = await session.manager.save(stock_transaction_entity_1.StockTransactionEntity, tx);
            await this.updateMenuAvailabilityForIngredient(item._id, balanceAfter, session);
            await session.commitTransaction();
            await this.redisService.del(cache_keys_constants_1.CacheKeys.INVENTORY_BY_ID(item._id));
            await this.redisService.delByPattern(cache_keys_constants_1.CacheKeys.INVENTORY_LIST_PATTERN);
            await this.redisService.del(cache_keys_constants_1.CacheKeys.INVENTORY_LOW_STOCK);
            await this.redisService.delByPattern(cache_keys_constants_1.CacheKeys.MENU_ITEM_LIST_PATTERN);
            item.currentStock = balanceAfter;
            return {
                transaction: savedTx,
                item,
            };
        }
        catch (error) {
            await session.rollbackTransaction();
            throw error;
        }
        finally {
            await session.release();
        }
    }
    async setRecipe(params) {
        const session = this.dataSource.createQueryRunner();
        await session.connect();
        await session.startTransaction();
        try {
            const menuItem = await session.manager.findOne(menu_item_entity_1.MenuItemEntity, {
                where: { _id: params.menuItemId },
            });
            if (!menuItem) {
                throw new common_1.NotFoundException(`Menu item not found`);
            }
            await session.manager.delete(recipe_item_entity_1.RecipeItemEntity, { menuItemId: params.menuItemId });
            const createdRecipes = [];
            for (const ing of params.ingredients) {
                const invItem = await session.manager.findOne(inventory_item_entity_1.InventoryItemEntity, {
                    where: { _id: ing.inventoryItemId },
                });
                if (!invItem) {
                    throw new common_1.BadRequestException(`Inventory item ${ing.inventoryItemId} not found`);
                }
                const entity = session.manager.create(recipe_item_entity_1.RecipeItemEntity, {
                    menuItemId: params.menuItemId,
                    inventoryItemId: ing.inventoryItemId,
                    quantityRequired: ing.quantityRequired,
                });
                const saved = await session.manager.save(recipe_item_entity_1.RecipeItemEntity, entity);
                saved.inventoryItem = invItem;
                createdRecipes.push(saved);
            }
            let isAvailable = true;
            for (const r of createdRecipes) {
                if (Number(r.inventoryItem?.currentStock ?? 0) < Number(r.quantityRequired)) {
                    isAvailable = false;
                    break;
                }
            }
            await session.manager.update(menu_item_entity_1.MenuItemEntity, { _id: params.menuItemId }, { isAvailable });
            await session.commitTransaction();
            await this.redisService.del(cache_keys_constants_1.CacheKeys.INVENTORY_RECIPE_BY_MENU(params.menuItemId));
            await this.redisService.del(cache_keys_constants_1.CacheKeys.MENU_ITEM_BY_ID(params.menuItemId));
            await this.redisService.delByPattern(cache_keys_constants_1.CacheKeys.MENU_ITEM_LIST_PATTERN);
            return {
                menuItemId: params.menuItemId,
                recipes: createdRecipes,
            };
        }
        catch (error) {
            await session.rollbackTransaction();
            throw error;
        }
        finally {
            await session.release();
        }
    }
    async getRecipeByMenuItem(params) {
        const recipes = await this.recipeItemEntity.find({
            where: { menuItemId: params.menuItemId },
            relations: ['inventoryItem'],
        });
        return { recipes };
    }
    async getStockHistory(params) {
        const page = params.page ?? 1;
        const limit = params.limit ?? 50;
        const qb = this.stockTransactionEntity.createQueryBuilder('tx')
            .leftJoinAndSelect('tx.inventoryItem', 'inventoryItem');
        if (params.inventoryItemId) {
            qb.andWhere('tx.inventoryItemId = :id', { id: params.inventoryItemId });
        }
        if (params.type) {
            qb.andWhere('tx.type = :type', { type: params.type });
        }
        qb.orderBy('tx.createdAt', 'DESC');
        qb.skip((page - 1) * limit).take(limit);
        const [items, total] = await qb.getManyAndCount();
        return { items, total };
    }
    async deductStockForOrder(orderId, externalSession) {
        const session = externalSession ?? this.dataSource.createQueryRunner();
        const shouldRelease = !externalSession;
        if (shouldRelease) {
            await session.connect();
            await session.startTransaction();
        }
        try {
            const order = await session.manager.findOne(order_entity_1.OrderEntity, {
                where: { _id: orderId },
                relations: ['items'],
            });
            if (!order || !order.items || order.items.length === 0) {
                return;
            }
            for (const item of order.items) {
                const recipes = await session.manager.find(recipe_item_entity_1.RecipeItemEntity, {
                    where: { menuItemId: item.menuItemId },
                });
                for (const recipe of recipes) {
                    const requiredTotal = Number(recipe.quantityRequired) * Number(item.quantity);
                    const invItem = await session.manager.findOne(inventory_item_entity_1.InventoryItemEntity, {
                        where: { _id: recipe.inventoryItemId },
                    });
                    if (invItem) {
                        const newStock = Number(invItem.currentStock) - requiredTotal;
                        await session.manager.update(inventory_item_entity_1.InventoryItemEntity, { _id: invItem._id }, {
                            currentStock: newStock,
                        });
                        const tx = session.manager.create(stock_transaction_entity_1.StockTransactionEntity, {
                            inventoryItemId: invItem._id,
                            type: enum_1.StockTransactionType.OUT_SALE,
                            quantity: -requiredTotal,
                            balanceAfter: newStock,
                            orderId: order._id,
                            staffId: order.staffId,
                            note: `Sale auto deduction: ${item.menuItemName} x${item.quantity}`,
                        });
                        await session.manager.save(stock_transaction_entity_1.StockTransactionEntity, tx);
                        await this.updateMenuAvailabilityForIngredient(invItem._id, newStock, session);
                    }
                }
            }
            if (shouldRelease) {
                await session.commitTransaction();
            }
            await this.redisService.delByPattern(cache_keys_constants_1.CacheKeys.INVENTORY_LIST_PATTERN);
            await this.redisService.del(cache_keys_constants_1.CacheKeys.INVENTORY_LOW_STOCK);
            await this.redisService.delByPattern(cache_keys_constants_1.CacheKeys.MENU_ITEM_LIST_PATTERN);
        }
        catch (error) {
            if (shouldRelease) {
                await session.rollbackTransaction();
            }
            throw error;
        }
        finally {
            if (shouldRelease) {
                await session.release();
            }
        }
    }
    async updateMenuAvailabilityForIngredient(inventoryItemId, currentStock, session) {
        const recipes = await session.manager.find(recipe_item_entity_1.RecipeItemEntity, {
            where: { inventoryItemId },
        });
        for (const r of recipes) {
            if (currentStock < Number(r.quantityRequired)) {
                await session.manager.update(menu_item_entity_1.MenuItemEntity, { _id: r.menuItemId }, {
                    isAvailable: false,
                });
            }
            else {
                const allRecipesForMenu = await session.manager.find(recipe_item_entity_1.RecipeItemEntity, {
                    where: { menuItemId: r.menuItemId },
                });
                let allSufficient = true;
                for (const itemRecipe of allRecipesForMenu) {
                    const ing = await session.manager.findOne(inventory_item_entity_1.InventoryItemEntity, {
                        where: { _id: itemRecipe.inventoryItemId },
                    });
                    if (!ing || Number(ing.currentStock) < Number(itemRecipe.quantityRequired)) {
                        allSufficient = false;
                        break;
                    }
                }
                await session.manager.update(menu_item_entity_1.MenuItemEntity, { _id: r.menuItemId }, {
                    isAvailable: allSufficient,
                });
            }
        }
    }
};
exports.DatabaseInventoryRepository = DatabaseInventoryRepository;
exports.DatabaseInventoryRepository = DatabaseInventoryRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(inventory_item_entity_1.InventoryItemEntity)),
    __param(1, (0, typeorm_1.InjectRepository)(recipe_item_entity_1.RecipeItemEntity)),
    __param(2, (0, typeorm_1.InjectRepository)(stock_transaction_entity_1.StockTransactionEntity)),
    __param(3, (0, typeorm_1.InjectRepository)(menu_item_entity_1.MenuItemEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.DataSource,
        redis_service_1.RedisService])
], DatabaseInventoryRepository);
//# sourceMappingURL=inventory.repository.js.map