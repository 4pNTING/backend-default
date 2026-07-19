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
exports.TableEntity = void 0;
const typeorm_1 = require("typeorm");
const enum_1 = require("../../domain/enums/enum");
const zone_entity_1 = require("./zone.entity");
let TableEntity = class TableEntity {
};
exports.TableEntity = TableEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], TableEntity.prototype, "_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', default: 0 }),
    __metadata("design:type", Number)
], TableEntity.prototype, "uniqueId", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], TableEntity.prototype, "uid", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], TableEntity.prototype, "number", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid' }),
    __metadata("design:type", String)
], TableEntity.prototype, "zoneId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => zone_entity_1.ZoneEntity, { eager: false, onDelete: 'SET NULL', nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: 'zoneId' }),
    __metadata("design:type", zone_entity_1.ZoneEntity)
], TableEntity.prototype, "zone", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', default: 2 }),
    __metadata("design:type", Number)
], TableEntity.prototype, "capacity", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: enum_1.TableStatus,
        default: enum_1.TableStatus.available
    }),
    __metadata("design:type", String)
], TableEntity.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: enum_1.ActiveStatus,
        default: enum_1.ActiveStatus.active
    }),
    __metadata("design:type", String)
], TableEntity.prototype, "isActive", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], TableEntity.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], TableEntity.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)(),
    __metadata("design:type", Date)
], TableEntity.prototype, "deletedAt", void 0);
exports.TableEntity = TableEntity = __decorate([
    (0, typeorm_1.Entity)('tables')
], TableEntity);
//# sourceMappingURL=table.entity.js.map