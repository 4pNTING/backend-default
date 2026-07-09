"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var OrderUsecasesProxyModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderUsecasesProxyModule = void 0;
const common_1 = require("@nestjs/common");
const order_repository_1 = require("../repositories/order/order.repository");
const repositories_module_1 = require("../repositories/repositories.module");
const createOrder_usecase_1 = require("../../usecases/order/createOrder.usecase");
const addOrderItem_usecase_1 = require("../../usecases/order/addOrderItem.usecase");
const removeOrderItem_usecase_1 = require("../../usecases/order/removeOrderItem.usecase");
const updateOrderStatus_usecase_1 = require("../../usecases/order/updateOrderStatus.usecase");
const cancelOrder_usecase_1 = require("../../usecases/order/cancelOrder.usecase");
const loadOrder_usecase_1 = require("../../usecases/order/loadOrder.usecase");
const loadOrderById_usecase_1 = require("../../usecases/order/loadOrderById.usecase");
const loadOrderByTable_usecase_1 = require("../../usecases/order/loadOrderByTable.usecase");
let OrderUsecasesProxyModule = OrderUsecasesProxyModule_1 = class OrderUsecasesProxyModule {
    static register() {
        return {
            module: OrderUsecasesProxyModule_1,
            providers: [
                {
                    inject: [order_repository_1.DatabaseOrderRepository],
                    provide: OrderUsecasesProxyModule_1.CREATE_ORDER_PROXY,
                    useFactory: (repo) => new createOrder_usecase_1.CreateOrderUseCase(repo),
                },
                {
                    inject: [order_repository_1.DatabaseOrderRepository],
                    provide: OrderUsecasesProxyModule_1.ADD_ORDER_ITEM_PROXY,
                    useFactory: (repo) => new addOrderItem_usecase_1.AddOrderItemUseCase(repo),
                },
                {
                    inject: [order_repository_1.DatabaseOrderRepository],
                    provide: OrderUsecasesProxyModule_1.REMOVE_ORDER_ITEM_PROXY,
                    useFactory: (repo) => new removeOrderItem_usecase_1.RemoveOrderItemUseCase(repo),
                },
                {
                    inject: [order_repository_1.DatabaseOrderRepository],
                    provide: OrderUsecasesProxyModule_1.UPDATE_ORDER_STATUS_PROXY,
                    useFactory: (repo) => new updateOrderStatus_usecase_1.UpdateOrderStatusUseCase(repo),
                },
                {
                    inject: [order_repository_1.DatabaseOrderRepository],
                    provide: OrderUsecasesProxyModule_1.CANCEL_ORDER_PROXY,
                    useFactory: (repo) => new cancelOrder_usecase_1.CancelOrderUseCase(repo),
                },
                {
                    inject: [order_repository_1.DatabaseOrderRepository],
                    provide: OrderUsecasesProxyModule_1.LOAD_ORDER_PROXY,
                    useFactory: (repo) => new loadOrder_usecase_1.LoadOrderUseCase(repo),
                },
                {
                    inject: [order_repository_1.DatabaseOrderRepository],
                    provide: OrderUsecasesProxyModule_1.LOAD_ORDER_BY_ID_PROXY,
                    useFactory: (repo) => new loadOrderById_usecase_1.LoadOrderByIdUseCase(repo),
                },
                {
                    inject: [order_repository_1.DatabaseOrderRepository],
                    provide: OrderUsecasesProxyModule_1.LOAD_ORDER_BY_TABLE_PROXY,
                    useFactory: (repo) => new loadOrderByTable_usecase_1.LoadOrderByTableUseCase(repo),
                },
            ],
            exports: [
                OrderUsecasesProxyModule_1.CREATE_ORDER_PROXY,
                OrderUsecasesProxyModule_1.ADD_ORDER_ITEM_PROXY,
                OrderUsecasesProxyModule_1.REMOVE_ORDER_ITEM_PROXY,
                OrderUsecasesProxyModule_1.UPDATE_ORDER_STATUS_PROXY,
                OrderUsecasesProxyModule_1.CANCEL_ORDER_PROXY,
                OrderUsecasesProxyModule_1.LOAD_ORDER_PROXY,
                OrderUsecasesProxyModule_1.LOAD_ORDER_BY_ID_PROXY,
                OrderUsecasesProxyModule_1.LOAD_ORDER_BY_TABLE_PROXY,
            ],
        };
    }
};
exports.OrderUsecasesProxyModule = OrderUsecasesProxyModule;
OrderUsecasesProxyModule.CREATE_ORDER_PROXY = 'CreateOrderProxy';
OrderUsecasesProxyModule.ADD_ORDER_ITEM_PROXY = 'AddOrderItemProxy';
OrderUsecasesProxyModule.REMOVE_ORDER_ITEM_PROXY = 'RemoveOrderItemProxy';
OrderUsecasesProxyModule.UPDATE_ORDER_STATUS_PROXY = 'UpdateOrderStatusProxy';
OrderUsecasesProxyModule.CANCEL_ORDER_PROXY = 'CancelOrderProxy';
OrderUsecasesProxyModule.LOAD_ORDER_PROXY = 'LoadOrderProxy';
OrderUsecasesProxyModule.LOAD_ORDER_BY_ID_PROXY = 'LoadOrderByIdProxy';
OrderUsecasesProxyModule.LOAD_ORDER_BY_TABLE_PROXY = 'LoadOrderByTableProxy';
exports.OrderUsecasesProxyModule = OrderUsecasesProxyModule = OrderUsecasesProxyModule_1 = __decorate([
    (0, common_1.Module)({
        imports: [repositories_module_1.RepositoriesModule],
    })
], OrderUsecasesProxyModule);
//# sourceMappingURL=order-usecases-proxy.module.js.map