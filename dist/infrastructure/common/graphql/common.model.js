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
exports.InStringDto = exports.InNumberDto = exports.ConditionDto = exports.PaginateDto = exports.SearchDto = exports.DateFilterDto = exports.ActiveStatus = void 0;
const graphql_1 = require("@nestjs/graphql");
var ActiveStatus;
(function (ActiveStatus) {
    ActiveStatus["ACTIVE"] = "ACTIVE";
    ActiveStatus["INACTIVE"] = "INACTIVE";
    ActiveStatus["ALL"] = "ALL";
})(ActiveStatus || (exports.ActiveStatus = ActiveStatus = {}));
(0, graphql_1.registerEnumType)(ActiveStatus, {
    name: 'ActiveStatus',
});
let DateFilterDto = class DateFilterDto {
};
exports.DateFilterDto = DateFilterDto;
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], DateFilterDto.prototype, "startDate", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], DateFilterDto.prototype, "endDate", void 0);
exports.DateFilterDto = DateFilterDto = __decorate([
    (0, graphql_1.InputType)()
], DateFilterDto);
let SearchDto = class SearchDto {
};
exports.SearchDto = SearchDto;
__decorate([
    (0, graphql_1.Field)(() => [String], { nullable: true }),
    __metadata("design:type", Array)
], SearchDto.prototype, "searchField", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], SearchDto.prototype, "q", void 0);
exports.SearchDto = SearchDto = __decorate([
    (0, graphql_1.InputType)()
], SearchDto);
let PaginateDto = class PaginateDto {
};
exports.PaginateDto = PaginateDto;
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int, { nullable: true }),
    __metadata("design:type", Number)
], PaginateDto.prototype, "limit", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int, { nullable: true }),
    __metadata("design:type", Number)
], PaginateDto.prototype, "page", void 0);
exports.PaginateDto = PaginateDto = __decorate([
    (0, graphql_1.InputType)()
], PaginateDto);
let ConditionDto = class ConditionDto {
};
exports.ConditionDto = ConditionDto;
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], ConditionDto.prototype, "field", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], ConditionDto.prototype, "value", void 0);
exports.ConditionDto = ConditionDto = __decorate([
    (0, graphql_1.InputType)()
], ConditionDto);
let InNumberDto = class InNumberDto {
};
exports.InNumberDto = InNumberDto;
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], InNumberDto.prototype, "field", void 0);
__decorate([
    (0, graphql_1.Field)(() => [Number], { nullable: true }),
    __metadata("design:type", Array)
], InNumberDto.prototype, "value", void 0);
exports.InNumberDto = InNumberDto = __decorate([
    (0, graphql_1.InputType)()
], InNumberDto);
let InStringDto = class InStringDto {
};
exports.InStringDto = InStringDto;
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], InStringDto.prototype, "field", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String], { nullable: true }),
    __metadata("design:type", Array)
], InStringDto.prototype, "value", void 0);
exports.InStringDto = InStringDto = __decorate([
    (0, graphql_1.InputType)()
], InStringDto);
//# sourceMappingURL=common.model.js.map