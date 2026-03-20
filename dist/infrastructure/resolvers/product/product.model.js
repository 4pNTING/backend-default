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
exports.LoadProductDto = exports.RestoreProductDto = exports.DeleteProductDto = exports.LoadProductByIdDto = exports.UpdateProductDto = exports.CreateProductDto = exports.RestoreProductResponse = exports.DeleteProductResponse = exports.UpdateProductResponse = exports.CreateProductResponse = exports.LoadProductByIdResponse = exports.LoadProductResponse = exports.Product = void 0;
const graphql_1 = require("@nestjs/graphql");
const enum_1 = require("../../../domain/enums/enum");
const category_model_1 = require("../category/category.model");
const inventory_level_model_1 = require("../inventory-level/inventory-level.model");
let Product = class Product {
};
exports.Product = Product;
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], Product.prototype, "_id", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Product.prototype, "sku", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Product.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], Product.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], Product.prototype, "price", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], Product.prototype, "cost", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Product.prototype, "categoryId", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], Product.prototype, "lowStockThreshold", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Date)
], Product.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Date)
], Product.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], Product.prototype, "isActive", void 0);
__decorate([
    (0, graphql_1.Field)(() => category_model_1.Category, { nullable: true }),
    __metadata("design:type", category_model_1.Category)
], Product.prototype, "category", void 0);
__decorate([
    (0, graphql_1.Field)(() => [inventory_level_model_1.InventoryLevel], { nullable: true }),
    __metadata("design:type", Array)
], Product.prototype, "inventoryLevels", void 0);
exports.Product = Product = __decorate([
    (0, graphql_1.ObjectType)()
], Product);
let LoadProductResponse = class LoadProductResponse {
};
exports.LoadProductResponse = LoadProductResponse;
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], LoadProductResponse.prototype, "count", void 0);
__decorate([
    (0, graphql_1.Field)(() => [Product]),
    __metadata("design:type", Array)
], LoadProductResponse.prototype, "product", void 0);
exports.LoadProductResponse = LoadProductResponse = __decorate([
    (0, graphql_1.ObjectType)()
], LoadProductResponse);
let LoadProductByIdResponse = class LoadProductByIdResponse {
};
exports.LoadProductByIdResponse = LoadProductByIdResponse;
__decorate([
    (0, graphql_1.Field)(() => Product, { nullable: true }),
    __metadata("design:type", Product)
], LoadProductByIdResponse.prototype, "product", void 0);
exports.LoadProductByIdResponse = LoadProductByIdResponse = __decorate([
    (0, graphql_1.ObjectType)()
], LoadProductByIdResponse);
let CreateProductResponse = class CreateProductResponse {
};
exports.CreateProductResponse = CreateProductResponse;
__decorate([
    (0, graphql_1.Field)(() => Product, { nullable: true }),
    __metadata("design:type", Product)
], CreateProductResponse.prototype, "product", void 0);
exports.CreateProductResponse = CreateProductResponse = __decorate([
    (0, graphql_1.ObjectType)()
], CreateProductResponse);
let UpdateProductResponse = class UpdateProductResponse {
};
exports.UpdateProductResponse = UpdateProductResponse;
__decorate([
    (0, graphql_1.Field)(() => Product, { nullable: true }),
    __metadata("design:type", Product)
], UpdateProductResponse.prototype, "product", void 0);
exports.UpdateProductResponse = UpdateProductResponse = __decorate([
    (0, graphql_1.ObjectType)()
], UpdateProductResponse);
let DeleteProductResponse = class DeleteProductResponse {
};
exports.DeleteProductResponse = DeleteProductResponse;
__decorate([
    (0, graphql_1.Field)(() => Product, { nullable: true }),
    __metadata("design:type", Product)
], DeleteProductResponse.prototype, "product", void 0);
exports.DeleteProductResponse = DeleteProductResponse = __decorate([
    (0, graphql_1.ObjectType)()
], DeleteProductResponse);
let RestoreProductResponse = class RestoreProductResponse {
};
exports.RestoreProductResponse = RestoreProductResponse;
__decorate([
    (0, graphql_1.Field)(() => Product, { nullable: true }),
    __metadata("design:type", Product)
], RestoreProductResponse.prototype, "product", void 0);
exports.RestoreProductResponse = RestoreProductResponse = __decorate([
    (0, graphql_1.ObjectType)()
], RestoreProductResponse);
let CreateProductDto = class CreateProductDto {
};
exports.CreateProductDto = CreateProductDto;
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CreateProductDto.prototype, "sku", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CreateProductDto.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], CreateProductDto.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], CreateProductDto.prototype, "price", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], CreateProductDto.prototype, "cost", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CreateProductDto.prototype, "categoryId", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int, { nullable: true }),
    __metadata("design:type", Number)
], CreateProductDto.prototype, "lowStockThreshold", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], CreateProductDto.prototype, "isActive", void 0);
exports.CreateProductDto = CreateProductDto = __decorate([
    (0, graphql_1.InputType)()
], CreateProductDto);
let UpdateProductDto = class UpdateProductDto {
};
exports.UpdateProductDto = UpdateProductDto;
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], UpdateProductDto.prototype, "_id", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], UpdateProductDto.prototype, "sku", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], UpdateProductDto.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], UpdateProductDto.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int, { nullable: true }),
    __metadata("design:type", Number)
], UpdateProductDto.prototype, "price", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int, { nullable: true }),
    __metadata("design:type", Number)
], UpdateProductDto.prototype, "cost", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], UpdateProductDto.prototype, "categoryId", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int, { nullable: true }),
    __metadata("design:type", Number)
], UpdateProductDto.prototype, "lowStockThreshold", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], UpdateProductDto.prototype, "isActive", void 0);
exports.UpdateProductDto = UpdateProductDto = __decorate([
    (0, graphql_1.InputType)()
], UpdateProductDto);
let LoadProductByIdDto = class LoadProductByIdDto {
};
exports.LoadProductByIdDto = LoadProductByIdDto;
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], LoadProductByIdDto.prototype, "_id", void 0);
exports.LoadProductByIdDto = LoadProductByIdDto = __decorate([
    (0, graphql_1.InputType)()
], LoadProductByIdDto);
let DeleteProductDto = class DeleteProductDto {
};
exports.DeleteProductDto = DeleteProductDto;
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], DeleteProductDto.prototype, "_id", void 0);
exports.DeleteProductDto = DeleteProductDto = __decorate([
    (0, graphql_1.InputType)()
], DeleteProductDto);
let RestoreProductDto = class RestoreProductDto {
};
exports.RestoreProductDto = RestoreProductDto;
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], RestoreProductDto.prototype, "_id", void 0);
exports.RestoreProductDto = RestoreProductDto = __decorate([
    (0, graphql_1.InputType)()
], RestoreProductDto);
let LoadProductDto = class LoadProductDto {
};
exports.LoadProductDto = LoadProductDto;
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int, { nullable: true }),
    __metadata("design:type", Number)
], LoadProductDto.prototype, "page", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int, { nullable: true }),
    __metadata("design:type", Number)
], LoadProductDto.prototype, "limit", void 0);
__decorate([
    (0, graphql_1.Field)(() => enum_1.ActiveStatus, { nullable: true }),
    __metadata("design:type", String)
], LoadProductDto.prototype, "isActive", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], LoadProductDto.prototype, "keyword", void 0);
exports.LoadProductDto = LoadProductDto = __decorate([
    (0, graphql_1.InputType)()
], LoadProductDto);
//# sourceMappingURL=product.model.js.map