import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Inject, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../../common/jwt-auth.guard';
import {
    InventoryItem,
    LoadInventoryResponse, LoadLowStockAlertResponse,
    LoadStockHistoryResponse, LoadRecipeByMenuItemResponse,
    CreateInventoryItemResponse, UpdateInventoryItemResponse,
    DeleteInventoryItemResponse, AdjustStockResponse,
    SetMenuItemRecipeResponse,
    CreateInventoryItemDto, UpdateInventoryItemDto,
    DeleteInventoryItemDto, LoadInventoryDto,
    AdjustStockDto, SetMenuItemRecipeDto,
    LoadStockHistoryDto,
} from './inventory.model';
import { InventoryUsecasesProxyModule } from '../../usecases-proxy/inventory-usecases-proxy.module';
import { CreateInventoryItemUseCase } from '../../../usecases/inventory/createInventoryItem.usecase';
import { UpdateInventoryItemUseCase } from '../../../usecases/inventory/updateInventoryItem.usecase';
import { DeleteInventoryItemUseCase } from '../../../usecases/inventory/deleteInventoryItem.usecase';
import { LoadInventoryUseCase } from '../../../usecases/inventory/loadInventory.usecase';
import { LoadLowStockAlertUseCase } from '../../../usecases/inventory/loadLowStockAlert.usecase';
import { AdjustStockUseCase } from '../../../usecases/inventory/adjustStock.usecase';
import { SetMenuItemRecipeUseCase } from '../../../usecases/inventory/setMenuItemRecipe.usecase';
import { LoadRecipeByMenuItemUseCase } from '../../../usecases/inventory/loadRecipeByMenuItem.usecase';
import { LoadStockHistoryUseCase } from '../../../usecases/inventory/loadStockHistory.usecase';

@Resolver(() => InventoryItem)
@UseGuards(JwtAuthGuard)
export class InventoryResolver {
    constructor(
        @Inject(InventoryUsecasesProxyModule.CREATE_INVENTORY_ITEM_PROXY)
        private readonly createInventoryItemUseCase: CreateInventoryItemUseCase,

        @Inject(InventoryUsecasesProxyModule.UPDATE_INVENTORY_ITEM_PROXY)
        private readonly updateInventoryItemUseCase: UpdateInventoryItemUseCase,

        @Inject(InventoryUsecasesProxyModule.DELETE_INVENTORY_ITEM_PROXY)
        private readonly deleteInventoryItemUseCase: DeleteInventoryItemUseCase,

        @Inject(InventoryUsecasesProxyModule.LOAD_INVENTORY_PROXY)
        private readonly loadInventoryUseCase: LoadInventoryUseCase,

        @Inject(InventoryUsecasesProxyModule.LOAD_LOW_STOCK_ALERT_PROXY)
        private readonly loadLowStockAlertUseCase: LoadLowStockAlertUseCase,

        @Inject(InventoryUsecasesProxyModule.ADJUST_STOCK_PROXY)
        private readonly adjustStockUseCase: AdjustStockUseCase,

        @Inject(InventoryUsecasesProxyModule.SET_MENU_ITEM_RECIPE_PROXY)
        private readonly setMenuItemRecipeUseCase: SetMenuItemRecipeUseCase,

        @Inject(InventoryUsecasesProxyModule.LOAD_RECIPE_BY_MENU_ITEM_PROXY)
        private readonly loadRecipeByMenuItemUseCase: LoadRecipeByMenuItemUseCase,

        @Inject(InventoryUsecasesProxyModule.LOAD_STOCK_HISTORY_PROXY)
        private readonly loadStockHistoryUseCase: LoadStockHistoryUseCase,
    ) { }

    // ─── QUERIES ──────────────────────────────────────────

    @Query(() => LoadInventoryResponse, { name: 'loadInventory' })
    async loadInventory(
        @Args('input', { nullable: true }) input?: LoadInventoryDto,
    ): Promise<LoadInventoryResponse> {
        return await this.loadInventoryUseCase.execute(input ?? {});
    }

    @Query(() => LoadLowStockAlertResponse, { name: 'loadLowStockAlert' })
    async loadLowStockAlert(): Promise<LoadLowStockAlertResponse> {
        return await this.loadLowStockAlertUseCase.execute();
    }

    @Query(() => LoadRecipeByMenuItemResponse, { name: 'loadRecipeByMenuItem' })
    async loadRecipeByMenuItem(
        @Args('menuItemId') menuItemId: string,
    ): Promise<LoadRecipeByMenuItemResponse> {
        return await this.loadRecipeByMenuItemUseCase.execute({ menuItemId });
    }

    @Query(() => LoadStockHistoryResponse, { name: 'loadStockHistory' })
    async loadStockHistory(
        @Args('input', { nullable: true }) input?: LoadStockHistoryDto,
    ): Promise<LoadStockHistoryResponse> {
        return await this.loadStockHistoryUseCase.execute(input ?? {});
    }

    // ─── MUTATIONS ────────────────────────────────────────

    @Mutation(() => CreateInventoryItemResponse, { name: 'createInventoryItem' })
    async createInventoryItem(
        @Args('input') input: CreateInventoryItemDto,
    ): Promise<CreateInventoryItemResponse> {
        const item = await this.createInventoryItemUseCase.execute(input);
        return { item };
    }

    @Mutation(() => UpdateInventoryItemResponse, { name: 'updateInventoryItem' })
    async updateInventoryItem(
        @Args('input') input: UpdateInventoryItemDto,
    ): Promise<UpdateInventoryItemResponse> {
        const item = await this.updateInventoryItemUseCase.execute(input);
        return { item };
    }

    @Mutation(() => DeleteInventoryItemResponse, { name: 'deleteInventoryItem' })
    async deleteInventoryItem(
        @Args('input') input: DeleteInventoryItemDto,
    ): Promise<DeleteInventoryItemResponse> {
        return await this.deleteInventoryItemUseCase.execute(input);
    }

    @Mutation(() => AdjustStockResponse, { name: 'adjustStock' })
    async adjustStock(
        @Args('input') input: AdjustStockDto,
    ): Promise<AdjustStockResponse> {
        return await this.adjustStockUseCase.execute(input);
    }

    @Mutation(() => SetMenuItemRecipeResponse, { name: 'setMenuItemRecipe' })
    async setMenuItemRecipe(
        @Args('input') input: SetMenuItemRecipeDto,
    ): Promise<SetMenuItemRecipeResponse> {
        return await this.setMenuItemRecipeUseCase.execute(input);
    }
}
