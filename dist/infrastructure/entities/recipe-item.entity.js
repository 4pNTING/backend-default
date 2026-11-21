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
exports.RecipeItemEntity = void 0;
const typeorm_1 = require("typeorm");
const menu_item_entity_1 = require("./menu-item.entity");
const inventory_item_entity_1 = require("./inventory-item.entity");
let RecipeItemEntity = class RecipeItemEntity {
};
exports.RecipeItemEntity = RecipeItemEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], RecipeItemEntity.prototype, "_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid' }),
    __metadata("design:type", String)
], RecipeItemEntity.prototype, "menuItemId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => menu_item_entity_1.MenuItemEntity, { eager: false, onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'menuItemId' }),
    __metadata("design:type", menu_item_entity_1.MenuItemEntity)
], RecipeItemEntity.prototype, "menuItem", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid' }),
    __metadata("design:type", String)
], RecipeItemEntity.prototype, "inventoryItemId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => inventory_item_entity_1.InventoryItemEntity, (inv) => inv.recipes, { eager: true, onDelete: 'RESTRICT' }),
    (0, typeorm_1.JoinColumn)({ name: 'inventoryItemId' }),
    __metadata("design:type", inventory_item_entity_1.InventoryItemEntity)
], RecipeItemEntity.prototype, "inventoryItem", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 12, scale: 2 }),
    __metadata("design:type", Number)
], RecipeItemEntity.prototype, "quantityRequired", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], RecipeItemEntity.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], RecipeItemEntity.prototype, "updatedAt", void 0);
exports.RecipeItemEntity = RecipeItemEntity = __decorate([
    (0, typeorm_1.Entity)('recipe_items')
], RecipeItemEntity);
//# sourceMappingURL=recipe-item.entity.js.map