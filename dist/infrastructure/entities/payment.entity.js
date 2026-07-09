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
exports.PaymentEntity = void 0;
const typeorm_1 = require("typeorm");
const enum_1 = require("../../domain/enums/enum");
const order_entity_1 = require("./order.entity");
const currency_entity_1 = require("./currency.entity");
let PaymentEntity = class PaymentEntity {
};
exports.PaymentEntity = PaymentEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], PaymentEntity.prototype, "_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid' }),
    __metadata("design:type", String)
], PaymentEntity.prototype, "orderId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => order_entity_1.OrderEntity, { eager: false, onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'orderId' }),
    __metadata("design:type", order_entity_1.OrderEntity)
], PaymentEntity.prototype, "order", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid' }),
    __metadata("design:type", String)
], PaymentEntity.prototype, "currencyId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => currency_entity_1.CurrencyEntity, { eager: false, onDelete: 'SET NULL', nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: 'currencyId' }),
    __metadata("design:type", currency_entity_1.CurrencyEntity)
], PaymentEntity.prototype, "currency", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: enum_1.PaymentMethod,
        default: enum_1.PaymentMethod.cash,
    }),
    __metadata("design:type", String)
], PaymentEntity.prototype, "method", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 12, scale: 2, default: 0 }),
    __metadata("design:type", Number)
], PaymentEntity.prototype, "amount", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 12, scale: 2, default: 0 }),
    __metadata("design:type", Number)
], PaymentEntity.prototype, "change", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp' }),
    __metadata("design:type", Date)
], PaymentEntity.prototype, "paidAt", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], PaymentEntity.prototype, "createdAt", void 0);
exports.PaymentEntity = PaymentEntity = __decorate([
    (0, typeorm_1.Entity)('payments')
], PaymentEntity);
//# sourceMappingURL=payment.entity.js.map