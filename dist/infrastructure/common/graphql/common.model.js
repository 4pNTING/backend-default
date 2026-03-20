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
exports.PaginateDto = exports.SearchDto = exports.DateFilterDto = exports.ActiveStatus = void 0;
const graphql_1 = require("@nestjs/graphql");
const enum_1 = require("../../../domain/enums/enum");
Object.defineProperty(exports, "ActiveStatus", { enumerable: true, get: function () { return enum_1.ActiveStatus; } });
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
//# sourceMappingURL=common.model.js.map