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
exports.InventoryItemEntity = void 0;
const typeorm_1 = require("typeorm");
const enum_1 = require("../../domain/enums/enum");
const recipe_item_entity_1 = require("./recipe-item.entity");
const stock_transaction_entity_1 = require("./stock-transaction.entity");
let InventoryItemEntity = class InventoryItemEntity {
};
exports.InventoryItemEntity = InventoryItemEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], InventoryItemEntity.prototype, "_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], InventoryItemEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], InventoryItemEntity.prototype, "sku", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], InventoryItemEntity.prototype, "category", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], InventoryItemEntity.prototype, "unit", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 12, scale: 2, default: 0 }),
    __metadata("design:type", Number)
], InventoryItemEntity.prototype, "currentStock", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 12, scale: 2, default: 0 }),
    __metadata("design:type", Number)
], InventoryItemEntity.prototype, "minStockAlert", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 12, scale: 2, default: 0 }),
    __metadata("design:type", Number)
], InventoryItemEntity.prototype, "costPerUnit", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: enum_1.ActiveStatus,
        default: enum_1.ActiveStatus.active,
    }),
    __metadata("design:type", String)
], InventoryItemEntity.prototype, "isActive", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => recipe_item_entity_1.RecipeItemEntity, (r) => r.inventoryItem),
    __metadata("design:type", Array)
], InventoryItemEntity.prototype, "recipes", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => stock_transaction_entity_1.StockTransactionEntity, (t) => t.inventoryItem),
    __metadata("design:type", Array)
], InventoryItemEntity.prototype, "transactions", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], InventoryItemEntity.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], InventoryItemEntity.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)(),
    __metadata("design:type", Date)
], InventoryItemEntity.prototype, "deletedAt", void 0);
exports.InventoryItemEntity = InventoryItemEntity = __decorate([
    (0, typeorm_1.Entity)('inventory_items')
], InventoryItemEntity);
//# sourceMappingURL=inventory-item.entity.js.map