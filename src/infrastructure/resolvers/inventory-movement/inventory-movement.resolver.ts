import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Inject, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../../common/jwt-auth.guard';
import {
    InventoryMovement,
    LoadInventoryMovementResponse,
    LoadInventoryMovementByIdResponse,
    CreateInventoryMovementDto,
    LoadInventoryMovementDto,
    LoadInventoryMovementByIdDto,
    CreateInventoryMovementResponse
} from './inventory-movement.model';
import { InventoryMovementUsecasesProxyModule } from '../../usecases-proxy/inventory-movement-usecases-proxy.module';
import { CreateInventoryMovementUseCase } from '../../../usecases/inventory-movement/createInventoryMovement.usecase';
import { LoadInventoryMovementUseCase } from '../../../usecases/inventory-movement/loadInventoryMovement.usecase';
import { LoadInventoryMovementByIdUseCase } from '../../../usecases/inventory-movement/loadInventoryMovementById.usecase';

@Resolver(() => InventoryMovement)
@UseGuards(JwtAuthGuard)
export class InventoryMovementResolver {
    constructor(
        @Inject(InventoryMovementUsecasesProxyModule.CREATE_INVENTORY_MOVEMENT_PROXY)
        private readonly createInventoryMovementUseCase: CreateInventoryMovementUseCase,

        @Inject(InventoryMovementUsecasesProxyModule.LOAD_INVENTORY_MOVEMENT_PROXY)
        private readonly loadInventoryMovementUseCase: LoadInventoryMovementUseCase,

        @Inject(InventoryMovementUsecasesProxyModule.LOAD_BY_ID_INVENTORY_MOVEMENT_PROXY)
        private readonly loadInventoryMovementByIdUseCase: LoadInventoryMovementByIdUseCase,
    ) { }

    @Query(() => LoadInventoryMovementResponse, { name: 'loadInventoryMovement' })
    async loadInventoryMovement(
        @Args('input', { nullable: true }) input: LoadInventoryMovementDto
    ) {
        const query: any = {};
        if (input) {
            if (input.page || input.limit) {
                query.paginate = {
                    page: input.page || 1,
                    limit: input.limit || 10
                };
            }
        }

        const result = await this.loadInventoryMovementUseCase.execute(query);
        const items = result.items.map(item => ({ ...item, _id: item.id }));

        return {
            count: result.total,
            inventoryMovement: items,
        };
    }

    @Query(() => LoadInventoryMovementByIdResponse, { name: 'loadInventoryMovementById', nullable: true })
    async loadInventoryMovementById(
        @Args('input') input: LoadInventoryMovementByIdDto
    ) {
        const result = await this.loadInventoryMovementByIdUseCase.execute({ id: input._id });
        if (!result) return { inventoryMovement: null };
        return { inventoryMovement: { ...result, _id: result.id } };
    }

    @Mutation(() => CreateInventoryMovementResponse)
    async createInventoryMovement(
        @Args('input') input: CreateInventoryMovementDto
    ) {
        const result = await this.createInventoryMovementUseCase.execute(input);
        return { inventoryMovement: { ...result, _id: result.id } };
    }
}
