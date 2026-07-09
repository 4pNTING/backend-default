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
exports.LoadPaymentByOrderDto = exports.ProcessPaymentDto = exports.LoadPaymentResponse = exports.PaymentResponse = exports.Payment = void 0;
const graphql_1 = require("@nestjs/graphql");
const enum_1 = require("../../../domain/enums/enum");
let Payment = class Payment {
};
exports.Payment = Payment;
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], Payment.prototype, "_id", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Payment.prototype, "orderId", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Payment.prototype, "currencyId", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], Payment.prototype, "method", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Float),
    __metadata("design:type", Number)
], Payment.prototype, "amount", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Float),
    __metadata("design:type", Number)
], Payment.prototype, "change", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Date)
], Payment.prototype, "paidAt", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Date)
], Payment.prototype, "createdAt", void 0);
exports.Payment = Payment = __decorate([
    (0, graphql_1.ObjectType)()
], Payment);
let PaymentResponse = class PaymentResponse {
};
exports.PaymentResponse = PaymentResponse;
__decorate([
    (0, graphql_1.Field)(() => Payment, { nullable: true }),
    __metadata("design:type", Payment)
], PaymentResponse.prototype, "payment", void 0);
exports.PaymentResponse = PaymentResponse = __decorate([
    (0, graphql_1.ObjectType)()
], PaymentResponse);
let LoadPaymentResponse = class LoadPaymentResponse {
};
exports.LoadPaymentResponse = LoadPaymentResponse;
__decorate([
    (0, graphql_1.Field)(() => [Payment]),
    __metadata("design:type", Array)
], LoadPaymentResponse.prototype, "payment", void 0);
exports.LoadPaymentResponse = LoadPaymentResponse = __decorate([
    (0, graphql_1.ObjectType)()
], LoadPaymentResponse);
let ProcessPaymentDto = class ProcessPaymentDto {
};
exports.ProcessPaymentDto = ProcessPaymentDto;
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], ProcessPaymentDto.prototype, "orderId", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], ProcessPaymentDto.prototype, "currencyId", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], ProcessPaymentDto.prototype, "method", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Float),
    __metadata("design:type", Number)
], ProcessPaymentDto.prototype, "amount", void 0);
exports.ProcessPaymentDto = ProcessPaymentDto = __decorate([
    (0, graphql_1.InputType)()
], ProcessPaymentDto);
let LoadPaymentByOrderDto = class LoadPaymentByOrderDto {
};
exports.LoadPaymentByOrderDto = LoadPaymentByOrderDto;
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], LoadPaymentByOrderDto.prototype, "orderId", void 0);
exports.LoadPaymentByOrderDto = LoadPaymentByOrderDto = __decorate([
    (0, graphql_1.InputType)()
], LoadPaymentByOrderDto);
//# sourceMappingURL=payment.model.js.map