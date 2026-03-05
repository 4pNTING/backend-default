import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Inject, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../../common/jwt-auth.guard';
import {
    InventoryLevel,
    LoadInventoryLevelResponse,
    LoadInventoryLevelByIdResponse,
    LoadInventoryLevelDto,
    LoadInventoryLevelByIdDto,
    LoadInventoryLevelByProductAndZoneDto,
    CreateInventoryLevelDto,
    UpdateInventoryLevelDto,
    CreateInventoryLevelResponse,
    UpdateInventoryLevelResponse
} from './inventory-level.model';
import { InventoryLevelUsecasesProxyModule } from '../../usecases-proxy/inventory-level-usecases-proxy.module';
import { LoadInventoryLevelUseCase } from '../../../usecases/inventory-level/loadInventoryLevel.usecase';
import { LoadInventoryLevelByIdUseCase } from '../../../usecases/inventory-level/loadInventoryLevelById.usecase';
import { LoadInventoryLevelByProductAndZoneUseCase } from '../../../usecases/inventory-level/loadInventoryLevelByProductAndZone.usecase';
import { CreateInventoryLevelUseCase } from '../../../usecases/inventory-level/createInventoryLevel.usecase';
import { UpdateInventoryLevelUseCase } from '../../../usecases/inventory-level/updateInventoryLevel.usecase';

@Resolver(() => InventoryLevel)
@UseGuards(JwtAuthGuard)
export class InventoryLevelResolver {
    constructor(
        @Inject(InventoryLevelUsecasesProxyModule.LOAD_INVENTORY_LEVEL_PROXY)
        private readonly loadInventoryLevelUseCase: LoadInventoryLevelUseCase,

        @Inject(InventoryLevelUsecasesProxyModule.LOAD_BY_ID_INVENTORY_LEVEL_PROXY)
        private readonly loadInventoryLevelByIdUseCase: LoadInventoryLevelByIdUseCase,

        @Inject(InventoryLevelUsecasesProxyModule.LOAD_BY_PRODUCT_ZONE_INVENTORY_LEVEL_PROXY)
        private readonly loadInventoryLevelByProductAndZoneUseCase: LoadInventoryLevelByProductAndZoneUseCase,

        @Inject(InventoryLevelUsecasesProxyModule.CREATE_INVENTORY_LEVEL_PROXY)
        private readonly createInventoryLevelUseCase: CreateInventoryLevelUseCase,

        @Inject(InventoryLevelUsecasesProxyModule.UPDATE_INVENTORY_LEVEL_PROXY)
        private readonly updateInventoryLevelUseCase: UpdateInventoryLevelUseCase,
    ) { }

    @Query(() => LoadInventoryLevelResponse, { name: 'loadInventoryLevel' })
    async loadInventoryLevel(
        @Args('input', { nullable: true }) input: LoadInventoryLevelDto
    ) {
        const query: any = {};
        if (input) {
            if (input.page || input.limit) {
                query.paginate = {
                    page: input.page || 1,
                    limit: input.limit || 10
                };
            }
            if (input.productId !== undefined) {
                query.productId = input.productId;
            }
            if (input.zoneId !== undefined) {
                query.zoneId = input.zoneId;
            }
        }

        const result = await this.loadInventoryLevelUseCase.execute(query);
        const items = result.items.map(item => ({ ...item, _id: item.id }));

        return {
            count: result.total,
            inventoryLevel: items,
        };
    }

    @Query(() => LoadInventoryLevelByIdResponse, { name: 'loadInventoryLevelById', nullable: true })
    async loadInventoryLevelById(
        @Args('input') input: LoadInventoryLevelByIdDto
    ) {
        const result = await this.loadInventoryLevelByIdUseCase.execute({ id: input._id });
        if (!result) return { inventoryLevel: null };
        return { inventoryLevel: { ...result, _id: result.id } };
    }

    @Query(() => LoadInventoryLevelByIdResponse, { name: 'loadInventoryLevelByProductAndZone', nullable: true })
    async loadInventoryLevelByProductAndZone(
        @Args('input') input: LoadInventoryLevelByProductAndZoneDto
    ) {
        const result = await this.loadInventoryLevelByProductAndZoneUseCase.execute({
            productId: input.productId,
            zoneId: input.zoneId,
        });
        if (!result) return { inventoryLevel: null };
        return { inventoryLevel: { ...result, _id: result.id } };
    }

    @Mutation(() => CreateInventoryLevelResponse)
    async createInventoryLevel(
        @Args('input') input: CreateInventoryLevelDto
    ) {
        const result = await this.createInventoryLevelUseCase.execute(input);
        return { inventoryLevel: { ...result, _id: result.id } };
    }

    @Mutation(() => UpdateInventoryLevelResponse)
    async updateInventoryLevel(
        @Args('input') input: UpdateInventoryLevelDto
    ) {
        const { _id, ...data } = input;
        await this.updateInventoryLevelUseCase.execute({ id: _id, ...data });
        const updated = await this.loadInventoryLevelByIdUseCase.execute({ id: _id });
        return {
            inventoryLevel: updated ? { ...updated, _id: updated.id } : null
        };
    }
}
