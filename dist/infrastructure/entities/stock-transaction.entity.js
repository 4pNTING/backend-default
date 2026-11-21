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
exports.StockTransactionEntity = void 0;
const typeorm_1 = require("typeorm");
const enum_1 = require("../../domain/enums/enum");
const inventory_item_entity_1 = require("./inventory-item.entity");
const order_entity_1 = require("./order.entity");
const user_entity_1 = require("./user.entity");
let StockTransactionEntity = class StockTransactionEntity {
};
exports.StockTransactionEntity = StockTransactionEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], StockTransactionEntity.prototype, "_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid' }),
    __metadata("design:type", String)
], StockTransactionEntity.prototype, "inventoryItemId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => inventory_item_entity_1.InventoryItemEntity, (inv) => inv.transactions, { eager: false, onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'inventoryItemId' }),
    __metadata("design:type", inventory_item_entity_1.InventoryItemEntity)
], StockTransactionEntity.prototype, "inventoryItem", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: enum_1.StockTransactionType,
    }),
    __metadata("design:type", String)
], StockTransactionEntity.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 12, scale: 2 }),
    __metadata("design:type", Number)
], StockTransactionEntity.prototype, "quantity", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 12, scale: 2 }),
    __metadata("design:type", Number)
], StockTransactionEntity.prototype, "balanceAfter", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', nullable: true }),
    __metadata("design:type", String)
], StockTransactionEntity.prototype, "orderId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => order_entity_1.OrderEntity, { eager: false, onDelete: 'SET NULL', nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: 'orderId' }),
    __metadata("design:type", order_entity_1.OrderEntity)
], StockTransactionEntity.prototype, "order", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', nullable: true }),
    __metadata("design:type", String)
], StockTransactionEntity.prototype, "staffId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.UserEntity, { eager: false, onDelete: 'SET NULL', nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: 'staffId' }),
    __metadata("design:type", user_entity_1.UserEntity)
], StockTransactionEntity.prototype, "staff", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], StockTransactionEntity.prototype, "note", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], StockTransactionEntity.prototype, "createdAt", void 0);
exports.StockTransactionEntity = StockTransactionEntity = __decorate([
    (0, typeorm_1.Entity)('stock_transactions')
], StockTransactionEntity);
//# sourceMappingURL=stock-transaction.entity.js.map