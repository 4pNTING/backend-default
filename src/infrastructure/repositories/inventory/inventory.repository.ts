import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository, QueryRunner, ILike } from 'typeorm';
import { InventoryItemEntity } from '../../entities/inventory-item.entity';
import { RecipeItemEntity } from '../../entities/recipe-item.entity';
import { StockTransactionEntity } from '../../entities/stock-transaction.entity';
import { MenuItemEntity } from '../../entities/menu-item.entity';
import { OrderEntity } from '../../entities/order.entity';
import { IInventoryRepository } from '@domain/repositories/inventory.repository.interface';
import {
    CreateInventoryItemRequest, CreateInventoryItemResponse,
    UpdateInventoryItemRequest, UpdateInventoryItemResponse,
    DeleteInventoryItemRequest, DeleteInventoryItemResponse,
    LoadInventoryRequest, LoadInventoryResponse,
    LoadLowStockAlertResponse,
    AdjustStockRequest, AdjustStockResponse,
    SetMenuItemRecipeRequest, SetMenuItemRecipeResponse,
    LoadRecipeByMenuItemRequest, LoadRecipeByMenuItemResponse,
    LoadStockHistoryRequest, LoadStockHistoryResponse,
} from '@domain/models/inventory.model';
import { ActiveStatus, StockTransactionType } from '@domain/enums/enum';
import { RedisService } from '../../cache/redis.service';
import { CacheKeys } from '../../cache/cache-keys.constants';

@Injectable()
export class DatabaseInventoryRepository implements IInventoryRepository {
    constructor(
        @InjectRepository(InventoryItemEntity)
        private readonly inventoryItemEntity: Repository<InventoryItemEntity>,
        @InjectRepository(RecipeItemEntity)
        private readonly recipeItemEntity: Repository<RecipeItemEntity>,
        @InjectRepository(StockTransactionEntity)
        private readonly stockTransactionEntity: Repository<StockTransactionEntity>,
        @InjectRepository(MenuItemEntity)
        private readonly menuItemEntity: Repository<MenuItemEntity>,
        private readonly dataSource: DataSource,
        private readonly redisService: RedisService,
    ) { }

    async createItem(params: CreateInventoryItemRequest): Promise<CreateInventoryItemResponse> {
        const session = this.dataSource.createQueryRunner();
        await session.connect();
        await session.startTransaction();
        try {
            const entity = session.manager.create(InventoryItemEntity, {
                name: params.name,
                sku: params.sku,
                category: params.category,
                unit: params.unit,
                currentStock: params.currentStock ?? 0,
                minStockAlert: params.minStockAlert ?? 0,
                costPerUnit: params.costPerUnit ?? 0,
                isActive: params.isActive ?? ActiveStatus.active,
            });
            const saved = await session.manager.save(InventoryItemEntity, entity);

            if (params.currentStock && params.currentStock > 0) {
                const tx = session.manager.create(StockTransactionEntity, {
                    inventoryItemId: saved._id,
                    type: StockTransactionType.IN,
                    quantity: params.currentStock,
                    balanceAfter: params.currentStock,
                    note: 'Initial stock on creation',
                });
                await session.manager.save(StockTransactionEntity, tx);
            }

            await session.commitTransaction();

            await this.redisService.delByPattern(CacheKeys.INVENTORY_LIST_PATTERN);
            await this.redisService.del(CacheKeys.INVENTORY_LOW_STOCK);

            return saved;
        } catch (error) {
            await session.rollbackTransaction();
            throw error;
        } finally {
            await session.release();
        }
    }

    async updateItem(params: UpdateInventoryItemRequest): Promise<UpdateInventoryItemResponse> {
        const item = await this.inventoryItemEntity.findOne({ where: { _id: params._id } });
        if (!item) {
            throw new NotFoundException(`Inventory item not found`);
        }

        const updateData: Partial<InventoryItemEntity> = {};
        if (params.name !== undefined) updateData.name = params.name;
        if (params.sku !== undefined) updateData.sku = params.sku;
        if (params.category !== undefined) updateData.category = params.category;
        if (params.unit !== undefined) updateData.unit = params.unit;
        if (params.minStockAlert !== undefined) updateData.minStockAlert = params.minStockAlert;
        if (params.costPerUnit !== undefined) updateData.costPerUnit = params.costPerUnit;
        if (params.isActive !== undefined) updateData.isActive = params.isActive;

        await this.inventoryItemEntity.update({ _id: params._id }, updateData);

        await this.redisService.del(CacheKeys.INVENTORY_BY_ID(params._id));
        await this.redisService.delByPattern(CacheKeys.INVENTORY_LIST_PATTERN);
        await this.redisService.del(CacheKeys.INVENTORY_LOW_STOCK);

        const updated = await this.inventoryItemEntity.findOne({ where: { _id: params._id } });
        return updated!;
    }

    async deleteItem(params: DeleteInventoryItemRequest): Promise<DeleteInventoryItemResponse> {
        await this.inventoryItemEntity.softDelete(params._id);
        await this.redisService.del(CacheKeys.INVENTORY_BY_ID(params._id));
        await this.redisService.delByPattern(CacheKeys.INVENTORY_LIST_PATTERN);
        await this.redisService.del(CacheKeys.INVENTORY_LOW_STOCK);
        return { _id: params._id };
    }

    async findAll(params: LoadInventoryRequest): Promise<LoadInventoryResponse> {
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
        if (params.isActive && params.isActive !== ActiveStatus.all) {
            qb.andWhere('item.isActive = :isActive', { isActive: params.isActive });
        }

        qb.orderBy('item.createdAt', 'DESC');
        qb.skip((page - 1) * limit).take(limit);

        const [items, total] = await qb.getManyAndCount();
        return { items, total };
    }

    async findLowStock(): Promise<LoadLowStockAlertResponse> {
        const qb = this.inventoryItemEntity.createQueryBuilder('item');
        qb.where('item.isActive = :active', { active: ActiveStatus.active });
        qb.andWhere('item.currentStock <= item.minStockAlert');
        qb.orderBy('item.currentStock', 'ASC');

        const items = await qb.getMany();
        return { items };
    }

    async adjustStock(params: AdjustStockRequest): Promise<AdjustStockResponse> {
        const session = this.dataSource.createQueryRunner();
        await session.connect();
        await session.startTransaction();

        try {
            const item = await session.manager.findOne(InventoryItemEntity, {
                where: { _id: params.inventoryItemId },
            });
            if (!item) {
                throw new NotFoundException(`Inventory item not found`);
            }

            let delta = Number(params.quantity);
            if (params.type === StockTransactionType.WASTE || params.type === StockTransactionType.OUT_SALE) {
                delta = delta > 0 ? -delta : delta;
            }

            const current = Number(item.currentStock);
            const balanceAfter = current + delta;

            await session.manager.update(InventoryItemEntity, { _id: item._id }, {
                currentStock: balanceAfter,
            });

            const tx = session.manager.create(StockTransactionEntity, {
                inventoryItemId: item._id,
                type: params.type,
                quantity: delta,
                balanceAfter,
                staffId: params.staffId,
                note: params.note,
            });
            const savedTx = await session.manager.save(StockTransactionEntity, tx);

            // Out of Stock Guard check for all menus using this ingredient
            await this.updateMenuAvailabilityForIngredient(item._id, balanceAfter, session);

            await session.commitTransaction();

            await this.redisService.del(CacheKeys.INVENTORY_BY_ID(item._id));
            await this.redisService.delByPattern(CacheKeys.INVENTORY_LIST_PATTERN);
            await this.redisService.del(CacheKeys.INVENTORY_LOW_STOCK);
            await this.redisService.delByPattern(CacheKeys.MENU_ITEM_LIST_PATTERN);

            item.currentStock = balanceAfter;
            return {
                transaction: savedTx,
                item,
            };
        } catch (error) {
            await session.rollbackTransaction();
            throw error;
        } finally {
            await session.release();
        }
    }

    async setRecipe(params: SetMenuItemRecipeRequest): Promise<SetMenuItemRecipeResponse> {
        const session = this.dataSource.createQueryRunner();
        await session.connect();
        await session.startTransaction();

        try {
            const menuItem = await session.manager.findOne(MenuItemEntity, {
                where: { _id: params.menuItemId },
            });
            if (!menuItem) {
                throw new NotFoundException(`Menu item not found`);
            }

            // Remove existing recipe items for this menu
            await session.manager.delete(RecipeItemEntity, { menuItemId: params.menuItemId });

            const createdRecipes: RecipeItemEntity[] = [];
            for (const ing of params.ingredients) {
                const invItem = await session.manager.findOne(InventoryItemEntity, {
                    where: { _id: ing.inventoryItemId },
                });
                if (!invItem) {
                    throw new BadRequestException(`Inventory item ${ing.inventoryItemId} not found`);
                }

                const entity = session.manager.create(RecipeItemEntity, {
                    menuItemId: params.menuItemId,
                    inventoryItemId: ing.inventoryItemId,
                    quantityRequired: ing.quantityRequired,
                });
                const saved = await session.manager.save(RecipeItemEntity, entity);
                saved.inventoryItem = invItem;
                createdRecipes.push(saved);
            }

            // Recheck menu availability based on new recipe
            let isAvailable = true;
            for (const r of createdRecipes) {
                if (Number(r.inventoryItem?.currentStock ?? 0) < Number(r.quantityRequired)) {
                    isAvailable = false;
                    break;
                }
            }
            await session.manager.update(MenuItemEntity, { _id: params.menuItemId }, { isAvailable });

            await session.commitTransaction();

            await this.redisService.del(CacheKeys.INVENTORY_RECIPE_BY_MENU(params.menuItemId));
            await this.redisService.del(CacheKeys.MENU_ITEM_BY_ID(params.menuItemId));
            await this.redisService.delByPattern(CacheKeys.MENU_ITEM_LIST_PATTERN);

            return {
                menuItemId: params.menuItemId,
                recipes: createdRecipes,
            };
        } catch (error) {
            await session.rollbackTransaction();
            throw error;
        } finally {
            await session.release();
        }
    }

    async getRecipeByMenuItem(params: LoadRecipeByMenuItemRequest): Promise<LoadRecipeByMenuItemResponse> {
        const recipes = await this.recipeItemEntity.find({
            where: { menuItemId: params.menuItemId },
            relations: ['inventoryItem'],
        });
        return { recipes };
    }

    async getStockHistory(params: LoadStockHistoryRequest): Promise<LoadStockHistoryResponse> {
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

    /**
     * Auto Stock Deduction: called when an order is paid
     */
    async deductStockForOrder(orderId: string, externalSession?: QueryRunner): Promise<void> {
        const session = externalSession ?? this.dataSource.createQueryRunner();
        const shouldRelease = !externalSession;

        if (shouldRelease) {
            await session.connect();
            await session.startTransaction();
        }

        try {
            const order = await session.manager.findOne(OrderEntity, {
                where: { _id: orderId },
                relations: ['items'],
            });
            if (!order || !order.items || order.items.length === 0) {
                return;
            }

            for (const item of order.items) {
                const recipes = await session.manager.find(RecipeItemEntity, {
                    where: { menuItemId: item.menuItemId },
                });

                for (const recipe of recipes) {
                    const requiredTotal = Number(recipe.quantityRequired) * Number(item.quantity);
                    const invItem = await session.manager.findOne(InventoryItemEntity, {
                        where: { _id: recipe.inventoryItemId },
                    });

                    if (invItem) {
                        const newStock = Number(invItem.currentStock) - requiredTotal;
                        await session.manager.update(InventoryItemEntity, { _id: invItem._id }, {
                            currentStock: newStock,
                        });

                        const tx = session.manager.create(StockTransactionEntity, {
                            inventoryItemId: invItem._id,
                            type: StockTransactionType.OUT_SALE,
                            quantity: -requiredTotal,
                            balanceAfter: newStock,
                            orderId: order._id,
                            staffId: order.staffId,
                            note: `Sale auto deduction: ${item.menuItemName} x${item.quantity}`,
                        });
                        await session.manager.save(StockTransactionEntity, tx);

                        // Check Out of Stock Guard
                        await this.updateMenuAvailabilityForIngredient(invItem._id, newStock, session);
                    }
                }
            }

            if (shouldRelease) {
                await session.commitTransaction();
            }

            await this.redisService.delByPattern(CacheKeys.INVENTORY_LIST_PATTERN);
            await this.redisService.del(CacheKeys.INVENTORY_LOW_STOCK);
            await this.redisService.delByPattern(CacheKeys.MENU_ITEM_LIST_PATTERN);
        } catch (error) {
            if (shouldRelease) {
                await session.rollbackTransaction();
            }
            throw error;
        } finally {
            if (shouldRelease) {
                await session.release();
            }
        }
    }

    /**
     * Out of Stock Guard: update isAvailable flag for all menus requiring this ingredient
     */
    private async updateMenuAvailabilityForIngredient(
        inventoryItemId: string,
        currentStock: number,
        session: QueryRunner,
    ): Promise<void> {
        const recipes = await session.manager.find(RecipeItemEntity, {
            where: { inventoryItemId },
        });

        for (const r of recipes) {
            if (currentStock < Number(r.quantityRequired)) {
                await session.manager.update(MenuItemEntity, { _id: r.menuItemId }, {
                    isAvailable: false,
                });
            } else {
                // Check if all OTHER ingredients for this menuItem are also sufficient
                const allRecipesForMenu = await session.manager.find(RecipeItemEntity, {
                    where: { menuItemId: r.menuItemId },
                });
                let allSufficient = true;
                for (const itemRecipe of allRecipesForMenu) {
                    const ing = await session.manager.findOne(InventoryItemEntity, {
                        where: { _id: itemRecipe.inventoryItemId },
                    });
                    if (!ing || Number(ing.currentStock) < Number(itemRecipe.quantityRequired)) {
                        allSufficient = false;
                        break;
                    }
                }
                await session.manager.update(MenuItemEntity, { _id: r.menuItemId }, {
                    isAvailable: allSufficient,
                });
            }
        }
    }
}
