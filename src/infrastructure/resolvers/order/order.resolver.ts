import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Inject, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../../common/jwt-auth.guard';
import {
    Order, LoadOrderResponse, LoadOrderByIdResponse,
    CreateOrderDto, AddOrderItemDto, RemoveOrderItemDto,
    UpdateOrderStatusDto, CancelOrderDto,
    LoadOrderDto, LoadOrderByIdDto, LoadOrderByTableDto,
    CreateOrderResponse, AddOrderItemResponse,
    UpdateOrderResponse, CancelOrderResponse,
} from './order.model';
import { OrderUsecasesProxyModule }   from '../../usecases-proxy/order-usecases-proxy.module';
import { CreateOrderUseCase }         from '../../../usecases/order/createOrder.usecase';
import { AddOrderItemUseCase }        from '../../../usecases/order/addOrderItem.usecase';
import { RemoveOrderItemUseCase }     from '../../../usecases/order/removeOrderItem.usecase';
import { UpdateOrderStatusUseCase }   from '../../../usecases/order/updateOrderStatus.usecase';
import { CancelOrderUseCase }         from '../../../usecases/order/cancelOrder.usecase';
import { LoadOrderUseCase }           from '../../../usecases/order/loadOrder.usecase';
import { LoadOrderByIdUseCase }       from '../../../usecases/order/loadOrderById.usecase';
import { LoadOrderByTableUseCase }    from '../../../usecases/order/loadOrderByTable.usecase';

@Resolver(() => Order)
@UseGuards(JwtAuthGuard)
export class OrderResolver {
    constructor(
        @Inject(OrderUsecasesProxyModule.CREATE_ORDER_PROXY)
        private readonly createOrderUseCase: CreateOrderUseCase,

        @Inject(OrderUsecasesProxyModule.ADD_ORDER_ITEM_PROXY)
        private readonly addOrderItemUseCase: AddOrderItemUseCase,

        @Inject(OrderUsecasesProxyModule.REMOVE_ORDER_ITEM_PROXY)
        private readonly removeOrderItemUseCase: RemoveOrderItemUseCase,

        @Inject(OrderUsecasesProxyModule.UPDATE_ORDER_STATUS_PROXY)
        private readonly updateOrderStatusUseCase: UpdateOrderStatusUseCase,

        @Inject(OrderUsecasesProxyModule.CANCEL_ORDER_PROXY)
        private readonly cancelOrderUseCase: CancelOrderUseCase,

        @Inject(OrderUsecasesProxyModule.LOAD_ORDER_PROXY)
        private readonly loadOrderUseCase: LoadOrderUseCase,

        @Inject(OrderUsecasesProxyModule.LOAD_ORDER_BY_ID_PROXY)
        private readonly loadOrderByIdUseCase: LoadOrderByIdUseCase,

        @Inject(OrderUsecasesProxyModule.LOAD_ORDER_BY_TABLE_PROXY)
        private readonly loadOrderByTableUseCase: LoadOrderByTableUseCase,
    ) { }

    // ─── QUERIES ──────────────────────────────────────────

    @Query(() => LoadOrderResponse, { name: 'loadOrder' })
    async loadOrder(@Args('input', { nullable: true }) input: LoadOrderDto) {
        const query: any = {};
        if (input) {
            if (input.page || input.limit) {
                query.paginate = { page: input.page, limit: input.limit };
            }
            if (input.tableId) query.tableId = input.tableId;
            if (input.status)  query.status  = input.status;
        }
        const result = await this.loadOrderUseCase.execute(query);
        return { order: result.items };
    }

    @Query(() => LoadOrderByIdResponse, { name: 'loadOrderById', nullable: true })
    async loadOrderById(@Args('input') input: LoadOrderByIdDto) {
        const result = await this.loadOrderByIdUseCase.execute({ _id: input._id });
        if (!result) return { order: null };
        return { order: result };
    }

    @Query(() => LoadOrderResponse, { name: 'loadOrderByTable' })
    async loadOrderByTable(@Args('input') input: LoadOrderByTableDto) {
        const result = await this.loadOrderByTableUseCase.execute({ tableId: input.tableId });
        return { order: result.items };
    }

    // ─── MUTATIONS ────────────────────────────────────────

    @Mutation(() => CreateOrderResponse)
    async createOrder(@Args('input') input: CreateOrderDto) {
        const result = await this.createOrderUseCase.execute(input);
        return { order: result };
    }

    @Mutation(() => AddOrderItemResponse)
    async addOrderItem(@Args('input') input: AddOrderItemDto) {
        const result = await this.addOrderItemUseCase.execute(input);
        return result;
    }

    @Mutation(() => UpdateOrderResponse)
    async removeOrderItem(@Args('input') input: RemoveOrderItemDto) {
        await this.removeOrderItemUseCase.execute(input);
        const updated = await this.loadOrderByIdUseCase.execute({ _id: input.orderId });
        return { order: updated };
    }

    @Mutation(() => UpdateOrderResponse)
    async updateOrderStatus(@Args('input') input: UpdateOrderStatusDto) {
        await this.updateOrderStatusUseCase.execute(input);
        const updated = await this.loadOrderByIdUseCase.execute({ _id: input._id });
        return { order: updated };
    }

    @Mutation(() => CancelOrderResponse)
    async cancelOrder(@Args('input') input: CancelOrderDto) {
        await this.cancelOrderUseCase.execute(input);
        return { _id: input._id };
    }
}
