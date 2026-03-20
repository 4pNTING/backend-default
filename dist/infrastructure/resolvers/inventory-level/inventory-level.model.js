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
exports.LoadInventoryLevelDto = exports.LoadInventoryLevelByProductAndZoneDto = exports.LoadInventoryLevelByIdDto = exports.UpdateInventoryLevelDto = exports.CreateInventoryLevelDto = exports.UpdateInventoryLevelResponse = exports.CreateInventoryLevelResponse = exports.LoadInventoryLevelByIdResponse = exports.LoadInventoryLevelResponse = exports.InventoryLevel = void 0;
const graphql_1 = require("@nestjs/graphql");
const product_model_1 = require("../product/product.model");
const zone_model_1 = require("../zone/zone.model");
let InventoryLevel = class InventoryLevel {
};
exports.InventoryLevel = InventoryLevel;
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], InventoryLevel.prototype, "_id", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], InventoryLevel.prototype, "productId", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], InventoryLevel.prototype, "zoneId", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], InventoryLevel.prototype, "quantity", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Date)
], InventoryLevel.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => product_model_1.Product, { nullable: true }),
    __metadata("design:type", product_model_1.Product)
], InventoryLevel.prototype, "product", void 0);
__decorate([
    (0, graphql_1.Field)(() => zone_model_1.Zone, { nullable: true }),
    __metadata("design:type", zone_model_1.Zone)
], InventoryLevel.prototype, "zone", void 0);
exports.InventoryLevel = InventoryLevel = __decorate([
    (0, graphql_1.ObjectType)()
], InventoryLevel);
let LoadInventoryLevelResponse = class LoadInventoryLevelResponse {
};
exports.LoadInventoryLevelResponse = LoadInventoryLevelResponse;
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], LoadInventoryLevelResponse.prototype, "count", void 0);
__decorate([
    (0, graphql_1.Field)(() => [InventoryLevel]),
    __metadata("design:type", Array)
], LoadInventoryLevelResponse.prototype, "inventoryLevel", void 0);
exports.LoadInventoryLevelResponse = LoadInventoryLevelResponse = __decorate([
    (0, graphql_1.ObjectType)()
], LoadInventoryLevelResponse);
let LoadInventoryLevelByIdResponse = class LoadInventoryLevelByIdResponse {
};
exports.LoadInventoryLevelByIdResponse = LoadInventoryLevelByIdResponse;
__decorate([
    (0, graphql_1.Field)(() => InventoryLevel, { nullable: true }),
    __metadata("design:type", InventoryLevel)
], LoadInventoryLevelByIdResponse.prototype, "inventoryLevel", void 0);
exports.LoadInventoryLevelByIdResponse = LoadInventoryLevelByIdResponse = __decorate([
    (0, graphql_1.ObjectType)()
], LoadInventoryLevelByIdResponse);
let CreateInventoryLevelResponse = class CreateInventoryLevelResponse {
};
exports.CreateInventoryLevelResponse = CreateInventoryLevelResponse;
__decorate([
    (0, graphql_1.Field)(() => InventoryLevel, { nullable: true }),
    __metadata("design:type", InventoryLevel)
], CreateInventoryLevelResponse.prototype, "inventoryLevel", void 0);
exports.CreateInventoryLevelResponse = CreateInventoryLevelResponse = __decorate([
    (0, graphql_1.ObjectType)()
], CreateInventoryLevelResponse);
let UpdateInventoryLevelResponse = class UpdateInventoryLevelResponse {
};
exports.UpdateInventoryLevelResponse = UpdateInventoryLevelResponse;
__decorate([
    (0, graphql_1.Field)(() => InventoryLevel, { nullable: true }),
    __metadata("design:type", InventoryLevel)
], UpdateInventoryLevelResponse.prototype, "inventoryLevel", void 0);
exports.UpdateInventoryLevelResponse = UpdateInventoryLevelResponse = __decorate([
    (0, graphql_1.ObjectType)()
], UpdateInventoryLevelResponse);
let CreateInventoryLevelDto = class CreateInventoryLevelDto {
};
exports.CreateInventoryLevelDto = CreateInventoryLevelDto;
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CreateInventoryLevelDto.prototype, "productId", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CreateInventoryLevelDto.prototype, "zoneId", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], CreateInventoryLevelDto.prototype, "quantity", void 0);
exports.CreateInventoryLevelDto = CreateInventoryLevelDto = __decorate([
    (0, graphql_1.InputType)()
], CreateInventoryLevelDto);
let UpdateInventoryLevelDto = class UpdateInventoryLevelDto {
};
exports.UpdateInventoryLevelDto = UpdateInventoryLevelDto;
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], UpdateInventoryLevelDto.prototype, "_id", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], UpdateInventoryLevelDto.prototype, "quantity", void 0);
exports.UpdateInventoryLevelDto = UpdateInventoryLevelDto = __decorate([
    (0, graphql_1.InputType)()
], UpdateInventoryLevelDto);
let LoadInventoryLevelByIdDto = class LoadInventoryLevelByIdDto {
};
exports.LoadInventoryLevelByIdDto = LoadInventoryLevelByIdDto;
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], LoadInventoryLevelByIdDto.prototype, "_id", void 0);
exports.LoadInventoryLevelByIdDto = LoadInventoryLevelByIdDto = __decorate([
    (0, graphql_1.InputType)()
], LoadInventoryLevelByIdDto);
let LoadInventoryLevelByProductAndZoneDto = class LoadInventoryLevelByProductAndZoneDto {
};
exports.LoadInventoryLevelByProductAndZoneDto = LoadInventoryLevelByProductAndZoneDto;
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], LoadInventoryLevelByProductAndZoneDto.prototype, "productId", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], LoadInventoryLevelByProductAndZoneDto.prototype, "zoneId", void 0);
exports.LoadInventoryLevelByProductAndZoneDto = LoadInventoryLevelByProductAndZoneDto = __decorate([
    (0, graphql_1.InputType)()
], LoadInventoryLevelByProductAndZoneDto);
let LoadInventoryLevelDto = class LoadInventoryLevelDto {
};
exports.LoadInventoryLevelDto = LoadInventoryLevelDto;
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int, { nullable: true }),
    __metadata("design:type", Number)
], LoadInventoryLevelDto.prototype, "page", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int, { nullable: true }),
    __metadata("design:type", Number)
], LoadInventoryLevelDto.prototype, "limit", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], LoadInventoryLevelDto.prototype, "productId", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], LoadInventoryLevelDto.prototype, "zoneId", void 0);
exports.LoadInventoryLevelDto = LoadInventoryLevelDto = __decorate([
    (0, graphql_1.InputType)()
], LoadInventoryLevelDto);
//# sourceMappingURL=inventory-level.model.js.map