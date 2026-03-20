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
exports.InventoryMovementEntity = void 0;
const typeorm_1 = require("typeorm");
const product_entity_1 = require("./product.entity");
const zone_entity_1 = require("./zone.entity");
const enum_1 = require("../../domain/enums/enum");
let InventoryMovementEntity = class InventoryMovementEntity {
};
exports.InventoryMovementEntity = InventoryMovementEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], InventoryMovementEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], InventoryMovementEntity.prototype, "productId", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], InventoryMovementEntity.prototype, "zoneId", void 0);
__decorate([
    (0, typeorm_1.Column)('int'),
    __metadata("design:type", Number)
], InventoryMovementEntity.prototype, "quantity", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: enum_1.InventoryMovementType
    }),
    __metadata("design:type", String)
], InventoryMovementEntity.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], InventoryMovementEntity.prototype, "note", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], InventoryMovementEntity.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => product_entity_1.ProductEntity, product => product.movements),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", product_entity_1.ProductEntity)
], InventoryMovementEntity.prototype, "product", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => zone_entity_1.ZoneEntity),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", zone_entity_1.ZoneEntity)
], InventoryMovementEntity.prototype, "zone", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], InventoryMovementEntity.prototype, "createdAt", void 0);
exports.InventoryMovementEntity = InventoryMovementEntity = __decorate([
    (0, typeorm_1.Entity)('inventory_movements')
], InventoryMovementEntity);
//# sourceMappingURL=inventory-movement.entity.js.map