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
exports.MenuOptionEntity = void 0;
const typeorm_1 = require("typeorm");
const enum_1 = require("../../domain/enums/enum");
const menu_item_entity_1 = require("./menu-item.entity");
let MenuOptionEntity = class MenuOptionEntity {
};
exports.MenuOptionEntity = MenuOptionEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], MenuOptionEntity.prototype, "_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid' }),
    __metadata("design:type", String)
], MenuOptionEntity.prototype, "menuItemId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => menu_item_entity_1.MenuItemEntity, { eager: false, onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'menuItemId' }),
    __metadata("design:type", menu_item_entity_1.MenuItemEntity)
], MenuOptionEntity.prototype, "menuItem", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], MenuOptionEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 2, default: 0 }),
    __metadata("design:type", Number)
], MenuOptionEntity.prototype, "extraPrice", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: enum_1.ActiveStatus,
        default: enum_1.ActiveStatus.active,
    }),
    __metadata("design:type", String)
], MenuOptionEntity.prototype, "isActive", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], MenuOptionEntity.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], MenuOptionEntity.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)(),
    __metadata("design:type", Date)
], MenuOptionEntity.prototype, "deletedAt", void 0);
exports.MenuOptionEntity = MenuOptionEntity = __decorate([
    (0, typeorm_1.Entity)('menu_options')
], MenuOptionEntity);
//# sourceMappingURL=menu-option.entity.js.map