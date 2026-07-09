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
exports.OrderResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const common_1 = require("@nestjs/common");
const jwt_auth_guard_1 = require("../../common/jwt-auth.guard");
const order_model_1 = require("./order.model");
const order_usecases_proxy_module_1 = require("../../usecases-proxy/order-usecases-proxy.module");
const createOrder_usecase_1 = require("../../../usecases/order/createOrder.usecase");
const addOrderItem_usecase_1 = require("../../../usecases/order/addOrderItem.usecase");
const removeOrderItem_usecase_1 = require("../../../usecases/order/removeOrderItem.usecase");
const updateOrderStatus_usecase_1 = require("../../../usecases/order/updateOrderStatus.usecase");
const cancelOrder_usecase_1 = require("../../../usecases/order/cancelOrder.usecase");
const loadOrder_usecase_1 = require("../../../usecases/order/loadOrder.usecase");
const loadOrderById_usecase_1 = require("../../../usecases/order/loadOrderById.usecase");
const loadOrderByTable_usecase_1 = require("../../../usecases/order/loadOrderByTable.usecase");
let OrderResolver = class OrderResolver {
    constructor(createOrderUseCase, addOrderItemUseCase, removeOrderItemUseCase, updateOrderStatusUseCase, cancelOrderUseCase, loadOrderUseCase, loadOrderByIdUseCase, loadOrderByTableUseCase) {
        this.createOrderUseCase = createOrderUseCase;
        this.addOrderItemUseCase = addOrderItemUseCase;
        this.removeOrderItemUseCase = removeOrderItemUseCase;
        this.updateOrderStatusUseCase = updateOrderStatusUseCase;
        this.cancelOrderUseCase = cancelOrderUseCase;
        this.loadOrderUseCase = loadOrderUseCase;
        this.loadOrderByIdUseCase = loadOrderByIdUseCase;
        this.loadOrderByTableUseCase = loadOrderByTableUseCase;
    }
    async loadOrder(input) {
        const query = {};
        if (input) {
            if (input.page || input.limit) {
                query.paginate = { page: input.page, limit: input.limit };
            }
            if (input.tableId)
                query.tableId = input.tableId;
            if (input.status)
                query.status = input.status;
        }
        const result = await this.loadOrderUseCase.execute(query);
        return { order: result.items };
    }
    async loadOrderById(input) {
        const result = await this.loadOrderByIdUseCase.execute({ _id: input._id });
        if (!result)
            return { order: null };
        return { order: result };
    }
    async loadOrderByTable(input) {
        const result = await this.loadOrderByTableUseCase.execute({ tableId: input.tableId });
        return { order: result.items };
    }
    async createOrder(input) {
        const result = await this.createOrderUseCase.execute(input);
        return { order: result };
    }
    async addOrderItem(input) {
        const result = await this.addOrderItemUseCase.execute(input);
        return result;
    }
    async removeOrderItem(input) {
        await this.removeOrderItemUseCase.execute(input);
        const updated = await this.loadOrderByIdUseCase.execute({ _id: input.orderId });
        return { order: updated };
    }
    async updateOrderStatus(input) {
        await this.updateOrderStatusUseCase.execute(input);
        const updated = await this.loadOrderByIdUseCase.execute({ _id: input._id });
        return { order: updated };
    }
    async cancelOrder(input) {
        await this.cancelOrderUseCase.execute(input);
        return { _id: input._id };
    }
};
exports.OrderResolver = OrderResolver;
__decorate([
    (0, graphql_1.Query)(() => order_model_1.LoadOrderResponse, { name: 'loadOrder' }),
    __param(0, (0, graphql_1.Args)('input', { nullable: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [order_model_1.LoadOrderDto]),
    __metadata("design:returntype", Promise)
], OrderResolver.prototype, "loadOrder", null);
__decorate([
    (0, graphql_1.Query)(() => order_model_1.LoadOrderByIdResponse, { name: 'loadOrderById', nullable: true }),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [order_model_1.LoadOrderByIdDto]),
    __metadata("design:returntype", Promise)
], OrderResolver.prototype, "loadOrderById", null);
__decorate([
    (0, graphql_1.Query)(() => order_model_1.LoadOrderResponse, { name: 'loadOrderByTable' }),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [order_model_1.LoadOrderByTableDto]),
    __metadata("design:returntype", Promise)
], OrderResolver.prototype, "loadOrderByTable", null);
__decorate([
    (0, graphql_1.Mutation)(() => order_model_1.CreateOrderResponse),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [order_model_1.CreateOrderDto]),
    __metadata("design:returntype", Promise)
], OrderResolver.prototype, "createOrder", null);
__decorate([
    (0, graphql_1.Mutation)(() => order_model_1.AddOrderItemResponse),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [order_model_1.AddOrderItemDto]),
    __metadata("design:returntype", Promise)
], OrderResolver.prototype, "addOrderItem", null);
__decorate([
    (0, graphql_1.Mutation)(() => order_model_1.UpdateOrderResponse),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [order_model_1.RemoveOrderItemDto]),
    __metadata("design:returntype", Promise)
], OrderResolver.prototype, "removeOrderItem", null);
__decorate([
    (0, graphql_1.Mutation)(() => order_model_1.UpdateOrderResponse),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [order_model_1.UpdateOrderStatusDto]),
    __metadata("design:returntype", Promise)
], OrderResolver.prototype, "updateOrderStatus", null);
__decorate([
    (0, graphql_1.Mutation)(() => order_model_1.CancelOrderResponse),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [order_model_1.CancelOrderDto]),
    __metadata("design:returntype", Promise)
], OrderResolver.prototype, "cancelOrder", null);
exports.OrderResolver = OrderResolver = __decorate([
    (0, graphql_1.Resolver)(() => order_model_1.Order),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Inject)(order_usecases_proxy_module_1.OrderUsecasesProxyModule.CREATE_ORDER_PROXY)),
    __param(1, (0, common_1.Inject)(order_usecases_proxy_module_1.OrderUsecasesProxyModule.ADD_ORDER_ITEM_PROXY)),
    __param(2, (0, common_1.Inject)(order_usecases_proxy_module_1.OrderUsecasesProxyModule.REMOVE_ORDER_ITEM_PROXY)),
    __param(3, (0, common_1.Inject)(order_usecases_proxy_module_1.OrderUsecasesProxyModule.UPDATE_ORDER_STATUS_PROXY)),
    __param(4, (0, common_1.Inject)(order_usecases_proxy_module_1.OrderUsecasesProxyModule.CANCEL_ORDER_PROXY)),
    __param(5, (0, common_1.Inject)(order_usecases_proxy_module_1.OrderUsecasesProxyModule.LOAD_ORDER_PROXY)),
    __param(6, (0, common_1.Inject)(order_usecases_proxy_module_1.OrderUsecasesProxyModule.LOAD_ORDER_BY_ID_PROXY)),
    __param(7, (0, common_1.Inject)(order_usecases_proxy_module_1.OrderUsecasesProxyModule.LOAD_ORDER_BY_TABLE_PROXY)),
    __metadata("design:paramtypes", [createOrder_usecase_1.CreateOrderUseCase,
        addOrderItem_usecase_1.AddOrderItemUseCase,
        removeOrderItem_usecase_1.RemoveOrderItemUseCase,
        updateOrderStatus_usecase_1.UpdateOrderStatusUseCase,
        cancelOrder_usecase_1.CancelOrderUseCase,
        loadOrder_usecase_1.LoadOrderUseCase,
        loadOrderById_usecase_1.LoadOrderByIdUseCase,
        loadOrderByTable_usecase_1.LoadOrderByTableUseCase])
], OrderResolver);
//# sourceMappingURL=order.resolver.js.map