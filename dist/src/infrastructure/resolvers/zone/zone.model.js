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
exports.LoadZoneDto = exports.RestoreZoneDto = exports.DeleteZoneDto = exports.LoadZoneByIdDto = exports.UpdateZoneDto = exports.CreateZoneDto = exports.RestoreZoneResponse = exports.DeleteZoneResponse = exports.UpdateZoneResponse = exports.CreateZoneResponse = exports.LoadZoneByIdResponse = exports.LoadZoneResponse = exports.Zone = exports.ActiveStatus = void 0;
const graphql_1 = require("@nestjs/graphql");
const common_model_1 = require("../../common/graphql/common.model");
Object.defineProperty(exports, "ActiveStatus", { enumerable: true, get: function () { return common_model_1.ActiveStatus; } });
let Zone = class Zone {
};
exports.Zone = Zone;
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], Zone.prototype, "_id", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Zone.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], Zone.prototype, "isActive", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Date)
], Zone.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Date)
], Zone.prototype, "updatedAt", void 0);
exports.Zone = Zone = __decorate([
    (0, graphql_1.ObjectType)()
], Zone);
let LoadZoneResponse = class LoadZoneResponse {
};
exports.LoadZoneResponse = LoadZoneResponse;
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], LoadZoneResponse.prototype, "count", void 0);
__decorate([
    (0, graphql_1.Field)(() => [Zone]),
    __metadata("design:type", Array)
], LoadZoneResponse.prototype, "zone", void 0);
exports.LoadZoneResponse = LoadZoneResponse = __decorate([
    (0, graphql_1.ObjectType)()
], LoadZoneResponse);
let LoadZoneByIdResponse = class LoadZoneByIdResponse {
};
exports.LoadZoneByIdResponse = LoadZoneByIdResponse;
__decorate([
    (0, graphql_1.Field)(() => Zone, { nullable: true }),
    __metadata("design:type", Zone)
], LoadZoneByIdResponse.prototype, "zone", void 0);
exports.LoadZoneByIdResponse = LoadZoneByIdResponse = __decorate([
    (0, graphql_1.ObjectType)()
], LoadZoneByIdResponse);
let CreateZoneResponse = class CreateZoneResponse {
};
exports.CreateZoneResponse = CreateZoneResponse;
__decorate([
    (0, graphql_1.Field)(() => Zone, { nullable: true }),
    __metadata("design:type", Zone)
], CreateZoneResponse.prototype, "zone", void 0);
exports.CreateZoneResponse = CreateZoneResponse = __decorate([
    (0, graphql_1.ObjectType)()
], CreateZoneResponse);
let UpdateZoneResponse = class UpdateZoneResponse {
};
exports.UpdateZoneResponse = UpdateZoneResponse;
__decorate([
    (0, graphql_1.Field)(() => Zone, { nullable: true }),
    __metadata("design:type", Zone)
], UpdateZoneResponse.prototype, "zone", void 0);
exports.UpdateZoneResponse = UpdateZoneResponse = __decorate([
    (0, graphql_1.ObjectType)()
], UpdateZoneResponse);
let DeleteZoneResponse = class DeleteZoneResponse {
};
exports.DeleteZoneResponse = DeleteZoneResponse;
__decorate([
    (0, graphql_1.Field)(() => Zone, { nullable: true }),
    __metadata("design:type", Zone)
], DeleteZoneResponse.prototype, "zone", void 0);
exports.DeleteZoneResponse = DeleteZoneResponse = __decorate([
    (0, graphql_1.ObjectType)()
], DeleteZoneResponse);
let RestoreZoneResponse = class RestoreZoneResponse {
};
exports.RestoreZoneResponse = RestoreZoneResponse;
__decorate([
    (0, graphql_1.Field)(() => Zone, { nullable: true }),
    __metadata("design:type", Zone)
], RestoreZoneResponse.prototype, "zone", void 0);
exports.RestoreZoneResponse = RestoreZoneResponse = __decorate([
    (0, graphql_1.ObjectType)()
], RestoreZoneResponse);
let CreateZoneDto = class CreateZoneDto {
};
exports.CreateZoneDto = CreateZoneDto;
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CreateZoneDto.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], CreateZoneDto.prototype, "isActive", void 0);
exports.CreateZoneDto = CreateZoneDto = __decorate([
    (0, graphql_1.InputType)()
], CreateZoneDto);
let UpdateZoneDto = class UpdateZoneDto {
};
exports.UpdateZoneDto = UpdateZoneDto;
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], UpdateZoneDto.prototype, "_id", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], UpdateZoneDto.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], UpdateZoneDto.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], UpdateZoneDto.prototype, "isActive", void 0);
exports.UpdateZoneDto = UpdateZoneDto = __decorate([
    (0, graphql_1.InputType)()
], UpdateZoneDto);
let LoadZoneByIdDto = class LoadZoneByIdDto {
};
exports.LoadZoneByIdDto = LoadZoneByIdDto;
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], LoadZoneByIdDto.prototype, "_id", void 0);
exports.LoadZoneByIdDto = LoadZoneByIdDto = __decorate([
    (0, graphql_1.InputType)()
], LoadZoneByIdDto);
let DeleteZoneDto = class DeleteZoneDto {
};
exports.DeleteZoneDto = DeleteZoneDto;
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], DeleteZoneDto.prototype, "_id", void 0);
exports.DeleteZoneDto = DeleteZoneDto = __decorate([
    (0, graphql_1.InputType)()
], DeleteZoneDto);
let RestoreZoneDto = class RestoreZoneDto {
};
exports.RestoreZoneDto = RestoreZoneDto;
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], RestoreZoneDto.prototype, "_id", void 0);
exports.RestoreZoneDto = RestoreZoneDto = __decorate([
    (0, graphql_1.InputType)()
], RestoreZoneDto);
let LoadZoneDto = class LoadZoneDto {
};
exports.LoadZoneDto = LoadZoneDto;
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int, { nullable: true }),
    __metadata("design:type", Number)
], LoadZoneDto.prototype, "page", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int, { nullable: true }),
    __metadata("design:type", Number)
], LoadZoneDto.prototype, "limit", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_model_1.ActiveStatus),
    __metadata("design:type", String)
], LoadZoneDto.prototype, "isActive", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], LoadZoneDto.prototype, "keyword", void 0);
exports.LoadZoneDto = LoadZoneDto = __decorate([
    (0, graphql_1.InputType)()
], LoadZoneDto);
//# sourceMappingURL=zone.model.js.map