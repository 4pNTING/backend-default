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
exports.LoadCategoryDto = exports.RestoreCategoryDto = exports.DeleteCategoryDto = exports.LoadCategoryByIdDto = exports.UpdateCategoryDto = exports.CreateCategoryDto = exports.RestoreCategoryResponse = exports.DeleteCategoryResponse = exports.UpdateCategoryResponse = exports.CreateCategoryResponse = exports.LoadCategoryByIdResponse = exports.LoadCategoryResponse = exports.Category = exports.ActiveStatus = void 0;
const graphql_1 = require("@nestjs/graphql");
const common_model_1 = require("../../common/graphql/common.model");
Object.defineProperty(exports, "ActiveStatus", { enumerable: true, get: function () { return common_model_1.ActiveStatus; } });
let Category = class Category {
};
exports.Category = Category;
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int, { nullable: true }),
    __metadata("design:type", Number)
], Category.prototype, "_id", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Category.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], Category.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], Category.prototype, "photo", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Date)
], Category.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Date)
], Category.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Boolean)
], Category.prototype, "isActive", void 0);
exports.Category = Category = __decorate([
    (0, graphql_1.ObjectType)()
], Category);
let LoadCategoryResponse = class LoadCategoryResponse {
};
exports.LoadCategoryResponse = LoadCategoryResponse;
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], LoadCategoryResponse.prototype, "count", void 0);
__decorate([
    (0, graphql_1.Field)(() => [Category]),
    __metadata("design:type", Array)
], LoadCategoryResponse.prototype, "category", void 0);
exports.LoadCategoryResponse = LoadCategoryResponse = __decorate([
    (0, graphql_1.ObjectType)()
], LoadCategoryResponse);
let LoadCategoryByIdResponse = class LoadCategoryByIdResponse {
};
exports.LoadCategoryByIdResponse = LoadCategoryByIdResponse;
__decorate([
    (0, graphql_1.Field)(() => Category, { nullable: true }),
    __metadata("design:type", Category)
], LoadCategoryByIdResponse.prototype, "category", void 0);
exports.LoadCategoryByIdResponse = LoadCategoryByIdResponse = __decorate([
    (0, graphql_1.ObjectType)()
], LoadCategoryByIdResponse);
let CreateCategoryResponse = class CreateCategoryResponse {
};
exports.CreateCategoryResponse = CreateCategoryResponse;
__decorate([
    (0, graphql_1.Field)(() => Category, { nullable: true }),
    __metadata("design:type", Category)
], CreateCategoryResponse.prototype, "category", void 0);
exports.CreateCategoryResponse = CreateCategoryResponse = __decorate([
    (0, graphql_1.ObjectType)()
], CreateCategoryResponse);
let UpdateCategoryResponse = class UpdateCategoryResponse {
};
exports.UpdateCategoryResponse = UpdateCategoryResponse;
__decorate([
    (0, graphql_1.Field)(() => Category, { nullable: true }),
    __metadata("design:type", Category)
], UpdateCategoryResponse.prototype, "category", void 0);
exports.UpdateCategoryResponse = UpdateCategoryResponse = __decorate([
    (0, graphql_1.ObjectType)()
], UpdateCategoryResponse);
let DeleteCategoryResponse = class DeleteCategoryResponse {
};
exports.DeleteCategoryResponse = DeleteCategoryResponse;
__decorate([
    (0, graphql_1.Field)(() => Category, { nullable: true }),
    __metadata("design:type", Category)
], DeleteCategoryResponse.prototype, "category", void 0);
exports.DeleteCategoryResponse = DeleteCategoryResponse = __decorate([
    (0, graphql_1.ObjectType)()
], DeleteCategoryResponse);
let RestoreCategoryResponse = class RestoreCategoryResponse {
};
exports.RestoreCategoryResponse = RestoreCategoryResponse;
__decorate([
    (0, graphql_1.Field)(() => Category, { nullable: true }),
    __metadata("design:type", Category)
], RestoreCategoryResponse.prototype, "category", void 0);
exports.RestoreCategoryResponse = RestoreCategoryResponse = __decorate([
    (0, graphql_1.ObjectType)()
], RestoreCategoryResponse);
let CreateCategoryDto = class CreateCategoryDto {
};
exports.CreateCategoryDto = CreateCategoryDto;
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CreateCategoryDto.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], CreateCategoryDto.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], CreateCategoryDto.prototype, "photo", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Boolean)
], CreateCategoryDto.prototype, "isActive", void 0);
exports.CreateCategoryDto = CreateCategoryDto = __decorate([
    (0, graphql_1.InputType)()
], CreateCategoryDto);
let UpdateCategoryDto = class UpdateCategoryDto {
};
exports.UpdateCategoryDto = UpdateCategoryDto;
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], UpdateCategoryDto.prototype, "_id", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], UpdateCategoryDto.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], UpdateCategoryDto.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], UpdateCategoryDto.prototype, "photo", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Boolean)
], UpdateCategoryDto.prototype, "isActive", void 0);
exports.UpdateCategoryDto = UpdateCategoryDto = __decorate([
    (0, graphql_1.InputType)()
], UpdateCategoryDto);
let LoadCategoryByIdDto = class LoadCategoryByIdDto {
};
exports.LoadCategoryByIdDto = LoadCategoryByIdDto;
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], LoadCategoryByIdDto.prototype, "_id", void 0);
exports.LoadCategoryByIdDto = LoadCategoryByIdDto = __decorate([
    (0, graphql_1.InputType)()
], LoadCategoryByIdDto);
let DeleteCategoryDto = class DeleteCategoryDto {
};
exports.DeleteCategoryDto = DeleteCategoryDto;
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], DeleteCategoryDto.prototype, "_id", void 0);
exports.DeleteCategoryDto = DeleteCategoryDto = __decorate([
    (0, graphql_1.InputType)()
], DeleteCategoryDto);
let RestoreCategoryDto = class RestoreCategoryDto {
};
exports.RestoreCategoryDto = RestoreCategoryDto;
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], RestoreCategoryDto.prototype, "_id", void 0);
exports.RestoreCategoryDto = RestoreCategoryDto = __decorate([
    (0, graphql_1.InputType)()
], RestoreCategoryDto);
let LoadCategoryDto = class LoadCategoryDto {
};
exports.LoadCategoryDto = LoadCategoryDto;
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int, { nullable: true }),
    __metadata("design:type", Number)
], LoadCategoryDto.prototype, "page", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int, { nullable: true }),
    __metadata("design:type", Number)
], LoadCategoryDto.prototype, "limit", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_model_1.ActiveStatus, { nullable: true }),
    __metadata("design:type", String)
], LoadCategoryDto.prototype, "isActive", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], LoadCategoryDto.prototype, "keyword", void 0);
exports.LoadCategoryDto = LoadCategoryDto = __decorate([
    (0, graphql_1.InputType)(),
    (0, graphql_1.InputType)()
], LoadCategoryDto);
//# sourceMappingURL=category.model.js.map