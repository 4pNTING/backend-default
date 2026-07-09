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
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadOrderByTableDto = exports.LoadOrderByIdDto = exports.LoadOrderDto = exports.CancelOrderDto = exports.UpdateOrderStatusDto = exports.RemoveOrderItemDto = exports.AddOrderItemDto = exports.CreateOrderDto = exports.CancelOrderResponse = exports.AddOrderItemResponse = exports.UpdateOrderResponse = exports.CreateOrderResponse = exports.LoadOrderByIdResponse = exports.LoadOrderResponse = exports.Order = exports.OrderItem = void 0;
const graphql_1 = require("@nestjs/graphql");
const enum_1 = require("../../../domain/enums/enum");
let OrderItem = class OrderItem {
};
exports.OrderItem = OrderItem;
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], OrderItem.prototype, "_id", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], OrderItem.prototype, "orderId", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], OrderItem.prototype, "menuItemId", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], OrderItem.prototype, "menuItemName", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], OrderItem.prototype, "quantity", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Float),
    __metadata("design:type", Number)
], OrderItem.prototype, "unitPrice", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Float),
    __metadata("design:type", Number)
], OrderItem.prototype, "totalPrice", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], OrderItem.prototype, "note", void 0);
exports.OrderItem = OrderItem = __decorate([
    (0, graphql_1.ObjectType)()
], OrderItem);
let Order = class Order {
};
exports.Order = Order;
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], Order.prototype, "_id", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Order.prototype, "orderNumber", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Order.prototype, "tableId", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Order.prototype, "staffId", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], Order.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], Order.prototype, "note", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Float),
    __metadata("design:type", Number)
], Order.prototype, "subTotal", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Float),
    __metadata("design:type", Number)
], Order.prototype, "discount", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Float),
    __metadata("design:type", Number)
], Order.prototype, "total", void 0);
__decorate([
    (0, graphql_1.Field)(() => [OrderItem], { nullable: true }),
    __metadata("design:type", Array)
], Order.prototype, "items", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Date)
], Order.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Date)
], Order.prototype, "updatedAt", void 0);
exports.Order = Order = __decorate([
    (0, graphql_1.ObjectType)()
], Order);
let LoadOrderResponse = class LoadOrderResponse {
};
exports.LoadOrderResponse = LoadOrderResponse;
__decorate([
    (0, graphql_1.Field)(() => [Order]),
    __metadata("design:type", Array)
], LoadOrderResponse.prototype, "order", void 0);
exports.LoadOrderResponse = LoadOrderResponse = __decorate([
    (0, graphql_1.ObjectType)()
], LoadOrderResponse);
let LoadOrderByIdResponse = class LoadOrderByIdResponse {
};
exports.LoadOrderByIdResponse = LoadOrderByIdResponse;
__decorate([
    (0, graphql_1.Field)(() => Order, { nullable: true }),
    __metadata("design:type", Order)
], LoadOrderByIdResponse.prototype, "order", void 0);
exports.LoadOrderByIdResponse = LoadOrderByIdResponse = __decorate([
    (0, graphql_1.ObjectType)()
], LoadOrderByIdResponse);
let CreateOrderResponse = class CreateOrderResponse {
};
exports.CreateOrderResponse = CreateOrderResponse;
__decorate([
    (0, graphql_1.Field)(() => Order, { nullable: true }),
    __metadata("design:type", Order)
], CreateOrderResponse.prototype, "order", void 0);
exports.CreateOrderResponse = CreateOrderResponse = __decorate([
    (0, graphql_1.ObjectType)()
], CreateOrderResponse);
let UpdateOrderResponse = class UpdateOrderResponse {
};
exports.UpdateOrderResponse = UpdateOrderResponse;
__decorate([
    (0, graphql_1.Field)(() => Order, { nullable: true }),
    __metadata("design:type", Order)
], UpdateOrderResponse.prototype, "order", void 0);
exports.UpdateOrderResponse = UpdateOrderResponse = __decorate([
    (0, graphql_1.ObjectType)()
], UpdateOrderResponse);
let AddOrderItemResponse = class AddOrderItemResponse {
};
exports.AddOrderItemResponse = AddOrderItemResponse;
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], AddOrderItemResponse.prototype, "orderId", void 0);
__decorate([
    (0, graphql_1.Field)(() => OrderItem, { nullable: true }),
    __metadata("design:type", OrderItem)
], AddOrderItemResponse.prototype, "item", void 0);
exports.AddOrderItemResponse = AddOrderItemResponse = __decorate([
    (0, graphql_1.ObjectType)()
], AddOrderItemResponse);
let CancelOrderResponse = class CancelOrderResponse {
};
exports.CancelOrderResponse = CancelOrderResponse;
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CancelOrderResponse.prototype, "_id", void 0);
exports.CancelOrderResponse = CancelOrderResponse = __decorate([
    (0, graphql_1.ObjectType)()
], CancelOrderResponse);
let CreateOrderDto = class CreateOrderDto {
};
exports.CreateOrderDto = CreateOrderDto;
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CreateOrderDto.prototype, "tableId", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CreateOrderDto.prototype, "staffId", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], CreateOrderDto.prototype, "note", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Float, { nullable: true }),
    __metadata("design:type", Number)
], CreateOrderDto.prototype, "discount", void 0);
exports.CreateOrderDto = CreateOrderDto = __decorate([
    (0, graphql_1.InputType)()
], CreateOrderDto);
let AddOrderItemDto = class AddOrderItemDto {
};
exports.AddOrderItemDto = AddOrderItemDto;
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], AddOrderItemDto.prototype, "orderId", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], AddOrderItemDto.prototype, "menuItemId", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], AddOrderItemDto.prototype, "menuItemName", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], AddOrderItemDto.prototype, "quantity", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Float),
    __metadata("design:type", Number)
], AddOrderItemDto.prototype, "unitPrice", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], AddOrderItemDto.prototype, "note", void 0);
exports.AddOrderItemDto = AddOrderItemDto = __decorate([
    (0, graphql_1.InputType)()
], AddOrderItemDto);
let RemoveOrderItemDto = class RemoveOrderItemDto {
};
exports.RemoveOrderItemDto = RemoveOrderItemDto;
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], RemoveOrderItemDto.prototype, "orderItemId", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], RemoveOrderItemDto.prototype, "orderId", void 0);
exports.RemoveOrderItemDto = RemoveOrderItemDto = __decorate([
    (0, graphql_1.InputType)()
], RemoveOrderItemDto);
let UpdateOrderStatusDto = class UpdateOrderStatusDto {
};
exports.UpdateOrderStatusDto = UpdateOrderStatusDto;
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], UpdateOrderStatusDto.prototype, "_id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], UpdateOrderStatusDto.prototype, "status", void 0);
exports.UpdateOrderStatusDto = UpdateOrderStatusDto = __decorate([
    (0, graphql_1.InputType)()
], UpdateOrderStatusDto);
let CancelOrderDto = class CancelOrderDto {
};
exports.CancelOrderDto = CancelOrderDto;
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CancelOrderDto.prototype, "_id", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], CancelOrderDto.prototype, "reason", void 0);
exports.CancelOrderDto = CancelOrderDto = __decorate([
    (0, graphql_1.InputType)()
], CancelOrderDto);
let LoadOrderDto = class LoadOrderDto {
};
exports.LoadOrderDto = LoadOrderDto;
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int, { nullable: true }),
    __metadata("design:type", Number)
], LoadOrderDto.prototype, "page", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int, { nullable: true }),
    __metadata("design:type", Number)
], LoadOrderDto.prototype, "limit", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], LoadOrderDto.prototype, "tableId", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], LoadOrderDto.prototype, "status", void 0);
exports.LoadOrderDto = LoadOrderDto = __decorate([
    (0, graphql_1.InputType)()
], LoadOrderDto);
let LoadOrderByIdDto = class LoadOrderByIdDto {
};
exports.LoadOrderByIdDto = LoadOrderByIdDto;
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], LoadOrderByIdDto.prototype, "_id", void 0);
exports.LoadOrderByIdDto = LoadOrderByIdDto = __decorate([
    (0, graphql_1.InputType)()
], LoadOrderByIdDto);
let LoadOrderByTableDto = class LoadOrderByTableDto {
};
exports.LoadOrderByTableDto = LoadOrderByTableDto;
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], LoadOrderByTableDto.prototype, "tableId", void 0);
exports.LoadOrderByTableDto = LoadOrderByTableDto = __decorate([
    (0, graphql_1.InputType)()
], LoadOrderByTableDto);
//# sourceMappingURL=order.model.js.map