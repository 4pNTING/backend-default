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
exports.InventoryLevelEntity = void 0;
const typeorm_1 = require("typeorm");
const product_entity_1 = require("./product.entity");
const zone_entity_1 = require("./zone.entity");
let InventoryLevelEntity = class InventoryLevelEntity {
};
exports.InventoryLevelEntity = InventoryLevelEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], InventoryLevelEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], InventoryLevelEntity.prototype, "productId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], InventoryLevelEntity.prototype, "zoneId", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { default: 0 }),
    __metadata("design:type", Number)
], InventoryLevelEntity.prototype, "quantity", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => product_entity_1.ProductEntity, product => product.inventoryLevels),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", product_entity_1.ProductEntity)
], InventoryLevelEntity.prototype, "product", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => zone_entity_1.ZoneEntity),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", zone_entity_1.ZoneEntity)
], InventoryLevelEntity.prototype, "zone", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], InventoryLevelEntity.prototype, "updatedAt", void 0);
exports.InventoryLevelEntity = InventoryLevelEntity = __decorate([
    (0, typeorm_1.Entity)('inventory_levels')
], InventoryLevelEntity);
//# sourceMappingURL=inventory-level.entity.js.map