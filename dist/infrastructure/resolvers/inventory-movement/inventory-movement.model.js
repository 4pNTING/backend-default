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
exports.LoadInventoryMovementDto = exports.LoadInventoryMovementByIdDto = exports.CreateInventoryMovementDto = exports.CreateInventoryMovementResponse = exports.LoadInventoryMovementByIdResponse = exports.LoadInventoryMovementResponse = exports.InventoryMovement = void 0;
const graphql_1 = require("@nestjs/graphql");
const enum_1 = require("../../../domain/enums/enum");
let InventoryMovement = class InventoryMovement {
};
exports.InventoryMovement = InventoryMovement;
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], InventoryMovement.prototype, "_id", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], InventoryMovement.prototype, "productId", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], InventoryMovement.prototype, "zoneId", void 0);
__decorate([
    (0, graphql_1.Field)(() => enum_1.InventoryMovementType),
    __metadata("design:type", String)
], InventoryMovement.prototype, "type", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], InventoryMovement.prototype, "quantity", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], InventoryMovement.prototype, "note", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], InventoryMovement.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Date)
], InventoryMovement.prototype, "createdAt", void 0);
exports.InventoryMovement = InventoryMovement = __decorate([
    (0, graphql_1.ObjectType)()
], InventoryMovement);
let LoadInventoryMovementResponse = class LoadInventoryMovementResponse {
};
exports.LoadInventoryMovementResponse = LoadInventoryMovementResponse;
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], LoadInventoryMovementResponse.prototype, "count", void 0);
__decorate([
    (0, graphql_1.Field)(() => [InventoryMovement]),
    __metadata("design:type", Array)
], LoadInventoryMovementResponse.prototype, "inventoryMovement", void 0);
exports.LoadInventoryMovementResponse = LoadInventoryMovementResponse = __decorate([
    (0, graphql_1.ObjectType)()
], LoadInventoryMovementResponse);
let LoadInventoryMovementByIdResponse = class LoadInventoryMovementByIdResponse {
};
exports.LoadInventoryMovementByIdResponse = LoadInventoryMovementByIdResponse;
__decorate([
    (0, graphql_1.Field)(() => InventoryMovement, { nullable: true }),
    __metadata("design:type", InventoryMovement)
], LoadInventoryMovementByIdResponse.prototype, "inventoryMovement", void 0);
exports.LoadInventoryMovementByIdResponse = LoadInventoryMovementByIdResponse = __decorate([
    (0, graphql_1.ObjectType)()
], LoadInventoryMovementByIdResponse);
let CreateInventoryMovementResponse = class CreateInventoryMovementResponse {
};
exports.CreateInventoryMovementResponse = CreateInventoryMovementResponse;
__decorate([
    (0, graphql_1.Field)(() => InventoryMovement, { nullable: true }),
    __metadata("design:type", InventoryMovement)
], CreateInventoryMovementResponse.prototype, "inventoryMovement", void 0);
exports.CreateInventoryMovementResponse = CreateInventoryMovementResponse = __decorate([
    (0, graphql_1.ObjectType)()
], CreateInventoryMovementResponse);
let CreateInventoryMovementDto = class CreateInventoryMovementDto {
};
exports.CreateInventoryMovementDto = CreateInventoryMovementDto;
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CreateInventoryMovementDto.prototype, "productId", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CreateInventoryMovementDto.prototype, "zoneId", void 0);
__decorate([
    (0, graphql_1.Field)(() => enum_1.InventoryMovementType),
    __metadata("design:type", String)
], CreateInventoryMovementDto.prototype, "type", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], CreateInventoryMovementDto.prototype, "quantity", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], CreateInventoryMovementDto.prototype, "note", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], CreateInventoryMovementDto.prototype, "userId", void 0);
exports.CreateInventoryMovementDto = CreateInventoryMovementDto = __decorate([
    (0, graphql_1.InputType)()
], CreateInventoryMovementDto);
let LoadInventoryMovementByIdDto = class LoadInventoryMovementByIdDto {
};
exports.LoadInventoryMovementByIdDto = LoadInventoryMovementByIdDto;
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], LoadInventoryMovementByIdDto.prototype, "_id", void 0);
exports.LoadInventoryMovementByIdDto = LoadInventoryMovementByIdDto = __decorate([
    (0, graphql_1.InputType)()
], LoadInventoryMovementByIdDto);
let LoadInventoryMovementDto = class LoadInventoryMovementDto {
};
exports.LoadInventoryMovementDto = LoadInventoryMovementDto;
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int, { nullable: true }),
    __metadata("design:type", Number)
], LoadInventoryMovementDto.prototype, "page", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int, { nullable: true }),
    __metadata("design:type", Number)
], LoadInventoryMovementDto.prototype, "limit", void 0);
exports.LoadInventoryMovementDto = LoadInventoryMovementDto = __decorate([
    (0, graphql_1.InputType)()
], LoadInventoryMovementDto);
//# sourceMappingURL=inventory-movement.model.js.map