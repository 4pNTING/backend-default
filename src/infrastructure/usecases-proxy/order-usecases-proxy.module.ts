import { DynamicModule, Module } from '@nestjs/common';
import { DatabaseOrderRepository } from '../repositories/order/order.repository';
import { RepositoriesModule } from '../repositories/repositories.module';

import { CreateOrderUseCase }         from '../../usecases/order/createOrder.usecase';
import { AddOrderItemUseCase }        from '../../usecases/order/addOrderItem.usecase';
import { RemoveOrderItemUseCase }     from '../../usecases/order/removeOrderItem.usecase';
import { UpdateOrderStatusUseCase }   from '../../usecases/order/updateOrderStatus.usecase';
import { CancelOrderUseCase }         from '../../usecases/order/cancelOrder.usecase';
import { LoadOrderUseCase }           from '../../usecases/order/loadOrder.usecase';
import { LoadOrderByIdUseCase }       from '../../usecases/order/loadOrderById.usecase';
import { LoadOrderByTableUseCase }    from '../../usecases/order/loadOrderByTable.usecase';

@Module({
    imports: [RepositoriesModule],
})
export class OrderUsecasesProxyModule {
    static CREATE_ORDER_PROXY          = 'CreateOrderProxy';
    static ADD_ORDER_ITEM_PROXY        = 'AddOrderItemProxy';
    static REMOVE_ORDER_ITEM_PROXY     = 'RemoveOrderItemProxy';
    static UPDATE_ORDER_STATUS_PROXY   = 'UpdateOrderStatusProxy';
    static CANCEL_ORDER_PROXY          = 'CancelOrderProxy';
    static LOAD_ORDER_PROXY            = 'LoadOrderProxy';
    static LOAD_ORDER_BY_ID_PROXY      = 'LoadOrderByIdProxy';
    static LOAD_ORDER_BY_TABLE_PROXY   = 'LoadOrderByTableProxy';

    static register(): DynamicModule {
        return {
            module: OrderUsecasesProxyModule,
            providers: [
                {
                    inject: [DatabaseOrderRepository],
                    provide: OrderUsecasesProxyModule.CREATE_ORDER_PROXY,
                    useFactory: (repo: DatabaseOrderRepository) => new CreateOrderUseCase(repo),
                },
                {
                    inject: [DatabaseOrderRepository],
                    provide: OrderUsecasesProxyModule.ADD_ORDER_ITEM_PROXY,
                    useFactory: (repo: DatabaseOrderRepository) => new AddOrderItemUseCase(repo),
                },
                {
                    inject: [DatabaseOrderRepository],
                    provide: OrderUsecasesProxyModule.REMOVE_ORDER_ITEM_PROXY,
                    useFactory: (repo: DatabaseOrderRepository) => new RemoveOrderItemUseCase(repo),
                },
                {
                    inject: [DatabaseOrderRepository],
                    provide: OrderUsecasesProxyModule.UPDATE_ORDER_STATUS_PROXY,
                    useFactory: (repo: DatabaseOrderRepository) => new UpdateOrderStatusUseCase(repo),
                },
                {
                    inject: [DatabaseOrderRepository],
                    provide: OrderUsecasesProxyModule.CANCEL_ORDER_PROXY,
                    useFactory: (repo: DatabaseOrderRepository) => new CancelOrderUseCase(repo),
                },
                {
                    inject: [DatabaseOrderRepository],
                    provide: OrderUsecasesProxyModule.LOAD_ORDER_PROXY,
                    useFactory: (repo: DatabaseOrderRepository) => new LoadOrderUseCase(repo),
                },
                {
                    inject: [DatabaseOrderRepository],
                    provide: OrderUsecasesProxyModule.LOAD_ORDER_BY_ID_PROXY,
                    useFactory: (repo: DatabaseOrderRepository) => new LoadOrderByIdUseCase(repo),
                },
                {
                    inject: [DatabaseOrderRepository],
                    provide: OrderUsecasesProxyModule.LOAD_ORDER_BY_TABLE_PROXY,
                    useFactory: (repo: DatabaseOrderRepository) => new LoadOrderByTableUseCase(repo),
                },
            ],
            exports: [
                OrderUsecasesProxyModule.CREATE_ORDER_PROXY,
                OrderUsecasesProxyModule.ADD_ORDER_ITEM_PROXY,
                OrderUsecasesProxyModule.REMOVE_ORDER_ITEM_PROXY,
                OrderUsecasesProxyModule.UPDATE_ORDER_STATUS_PROXY,
                OrderUsecasesProxyModule.CANCEL_ORDER_PROXY,
                OrderUsecasesProxyModule.LOAD_ORDER_PROXY,
                OrderUsecasesProxyModule.LOAD_ORDER_BY_ID_PROXY,
                OrderUsecasesProxyModule.LOAD_ORDER_BY_TABLE_PROXY,
            ],
        };
    }
}
