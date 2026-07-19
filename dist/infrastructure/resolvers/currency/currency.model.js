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
exports.LoadCurrencyDto = exports.DeleteCurrencyDto = exports.LoadCurrencyByIdDto = exports.UpdateCurrencyDto = exports.CreateCurrencyDto = exports.DeleteCurrencyResponse = exports.UpdateCurrencyResponse = exports.CreateCurrencyResponse = exports.LoadCurrencyByIdResponse = exports.LoadCurrencyResponse = exports.Currency = exports.ActiveStatus = void 0;
const graphql_1 = require("@nestjs/graphql");
const class_validator_1 = require("class-validator");
const common_model_1 = require("../../common/graphql/common.model");
Object.defineProperty(exports, "ActiveStatus", { enumerable: true, get: function () { return common_model_1.ActiveStatus; } });
let Currency = class Currency {
};
exports.Currency = Currency;
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], Currency.prototype, "_id", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int, { nullable: true }),
    __metadata("design:type", Number)
], Currency.prototype, "uniqueId", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], Currency.prototype, "uid", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Currency.prototype, "code", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Currency.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], Currency.prototype, "isActive", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Date)
], Currency.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Date)
], Currency.prototype, "updatedAt", void 0);
exports.Currency = Currency = __decorate([
    (0, graphql_1.ObjectType)()
], Currency);
let LoadCurrencyResponse = class LoadCurrencyResponse {
};
exports.LoadCurrencyResponse = LoadCurrencyResponse;
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int, { nullable: true }),
    __metadata("design:type", Number)
], LoadCurrencyResponse.prototype, "count", void 0);
__decorate([
    (0, graphql_1.Field)(() => [Currency]),
    __metadata("design:type", Array)
], LoadCurrencyResponse.prototype, "currency", void 0);
exports.LoadCurrencyResponse = LoadCurrencyResponse = __decorate([
    (0, graphql_1.ObjectType)()
], LoadCurrencyResponse);
let LoadCurrencyByIdResponse = class LoadCurrencyByIdResponse {
};
exports.LoadCurrencyByIdResponse = LoadCurrencyByIdResponse;
__decorate([
    (0, graphql_1.Field)(() => Currency, { nullable: true }),
    __metadata("design:type", Currency)
], LoadCurrencyByIdResponse.prototype, "currency", void 0);
exports.LoadCurrencyByIdResponse = LoadCurrencyByIdResponse = __decorate([
    (0, graphql_1.ObjectType)()
], LoadCurrencyByIdResponse);
let CreateCurrencyResponse = class CreateCurrencyResponse {
};
exports.CreateCurrencyResponse = CreateCurrencyResponse;
__decorate([
    (0, graphql_1.Field)(() => Currency, { nullable: true }),
    __metadata("design:type", Currency)
], CreateCurrencyResponse.prototype, "currency", void 0);
exports.CreateCurrencyResponse = CreateCurrencyResponse = __decorate([
    (0, graphql_1.ObjectType)()
], CreateCurrencyResponse);
let UpdateCurrencyResponse = class UpdateCurrencyResponse {
};
exports.UpdateCurrencyResponse = UpdateCurrencyResponse;
__decorate([
    (0, graphql_1.Field)(() => Currency, { nullable: true }),
    __metadata("design:type", Currency)
], UpdateCurrencyResponse.prototype, "currency", void 0);
exports.UpdateCurrencyResponse = UpdateCurrencyResponse = __decorate([
    (0, graphql_1.ObjectType)()
], UpdateCurrencyResponse);
let DeleteCurrencyResponse = class DeleteCurrencyResponse {
};
exports.DeleteCurrencyResponse = DeleteCurrencyResponse;
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], DeleteCurrencyResponse.prototype, "_id", void 0);
exports.DeleteCurrencyResponse = DeleteCurrencyResponse = __decorate([
    (0, graphql_1.ObjectType)()
], DeleteCurrencyResponse);
let CreateCurrencyDto = class CreateCurrencyDto {
};
exports.CreateCurrencyDto = CreateCurrencyDto;
__decorate([
    (0, graphql_1.Field)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateCurrencyDto.prototype, "code", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateCurrencyDto.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateCurrencyDto.prototype, "isActive", void 0);
exports.CreateCurrencyDto = CreateCurrencyDto = __decorate([
    (0, graphql_1.InputType)()
], CreateCurrencyDto);
let UpdateCurrencyDto = class UpdateCurrencyDto {
};
exports.UpdateCurrencyDto = UpdateCurrencyDto;
__decorate([
    (0, graphql_1.Field)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UpdateCurrencyDto.prototype, "_id", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateCurrencyDto.prototype, "code", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateCurrencyDto.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_model_1.ActiveStatus, { nullable: true }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateCurrencyDto.prototype, "isActive", void 0);
exports.UpdateCurrencyDto = UpdateCurrencyDto = __decorate([
    (0, graphql_1.InputType)()
], UpdateCurrencyDto);
let LoadCurrencyByIdDto = class LoadCurrencyByIdDto {
};
exports.LoadCurrencyByIdDto = LoadCurrencyByIdDto;
__decorate([
    (0, graphql_1.Field)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], LoadCurrencyByIdDto.prototype, "_id", void 0);
exports.LoadCurrencyByIdDto = LoadCurrencyByIdDto = __decorate([
    (0, graphql_1.InputType)()
], LoadCurrencyByIdDto);
let DeleteCurrencyDto = class DeleteCurrencyDto {
};
exports.DeleteCurrencyDto = DeleteCurrencyDto;
__decorate([
    (0, graphql_1.Field)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], DeleteCurrencyDto.prototype, "_id", void 0);
exports.DeleteCurrencyDto = DeleteCurrencyDto = __decorate([
    (0, graphql_1.InputType)()
], DeleteCurrencyDto);
let LoadCurrencyDto = class LoadCurrencyDto {
};
exports.LoadCurrencyDto = LoadCurrencyDto;
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int, { nullable: true }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], LoadCurrencyDto.prototype, "page", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int, { nullable: true }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], LoadCurrencyDto.prototype, "limit", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_model_1.ActiveStatus, { nullable: true }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], LoadCurrencyDto.prototype, "isActive", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], LoadCurrencyDto.prototype, "keyword", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], LoadCurrencyDto.prototype, "sortField", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], LoadCurrencyDto.prototype, "sortDirection", void 0);
exports.LoadCurrencyDto = LoadCurrencyDto = __decorate([
    (0, graphql_1.InputType)()
], LoadCurrencyDto);
//# sourceMappingURL=currency.model.js.map