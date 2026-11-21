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
exports.LoadStockHistoryDto = exports.SetMenuItemRecipeDto = exports.RecipeIngredientInput = exports.AdjustStockDto = exports.LoadInventoryDto = exports.DeleteInventoryItemDto = exports.UpdateInventoryItemDto = exports.CreateInventoryItemDto = exports.SetMenuItemRecipeResponse = exports.AdjustStockResponse = exports.DeleteInventoryItemResponse = exports.UpdateInventoryItemResponse = exports.CreateInventoryItemResponse = exports.LoadStockHistoryResponse = exports.LoadRecipeByMenuItemResponse = exports.LoadLowStockAlertResponse = exports.LoadInventoryResponse = exports.StockTransaction = exports.RecipeItem = exports.InventoryItem = void 0;
const graphql_1 = require("@nestjs/graphql");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const enum_1 = require("../../../domain/enums/enum");
let InventoryItem = class InventoryItem {
};
exports.InventoryItem = InventoryItem;
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], InventoryItem.prototype, "_id", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], InventoryItem.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], InventoryItem.prototype, "sku", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], InventoryItem.prototype, "category", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], InventoryItem.prototype, "unit", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Float),
    __metadata("design:type", Number)
], InventoryItem.prototype, "currentStock", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Float),
    __metadata("design:type", Number)
], InventoryItem.prototype, "minStockAlert", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Float),
    __metadata("design:type", Number)
], InventoryItem.prototype, "costPerUnit", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], InventoryItem.prototype, "isActive", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Date)
], InventoryItem.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Date)
], InventoryItem.prototype, "updatedAt", void 0);
exports.InventoryItem = InventoryItem = __decorate([
    (0, graphql_1.ObjectType)()
], InventoryItem);
let RecipeItem = class RecipeItem {
};
exports.RecipeItem = RecipeItem;
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], RecipeItem.prototype, "_id", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], RecipeItem.prototype, "menuItemId", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], RecipeItem.prototype, "inventoryItemId", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Float),
    __metadata("design:type", Number)
], RecipeItem.prototype, "quantityRequired", void 0);
__decorate([
    (0, graphql_1.Field)(() => InventoryItem, { nullable: true }),
    __metadata("design:type", InventoryItem)
], RecipeItem.prototype, "inventoryItem", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Date)
], RecipeItem.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Date)
], RecipeItem.prototype, "updatedAt", void 0);
exports.RecipeItem = RecipeItem = __decorate([
    (0, graphql_1.ObjectType)()
], RecipeItem);
let StockTransaction = class StockTransaction {
};
exports.StockTransaction = StockTransaction;
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], StockTransaction.prototype, "_id", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], StockTransaction.prototype, "inventoryItemId", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], StockTransaction.prototype, "type", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Float),
    __metadata("design:type", Number)
], StockTransaction.prototype, "quantity", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Float),
    __metadata("design:type", Number)
], StockTransaction.prototype, "balanceAfter", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], StockTransaction.prototype, "orderId", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], StockTransaction.prototype, "staffId", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], StockTransaction.prototype, "note", void 0);
__decorate([
    (0, graphql_1.Field)(() => InventoryItem, { nullable: true }),
    __metadata("design:type", InventoryItem)
], StockTransaction.prototype, "inventoryItem", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Date)
], StockTransaction.prototype, "createdAt", void 0);
exports.StockTransaction = StockTransaction = __decorate([
    (0, graphql_1.ObjectType)()
], StockTransaction);
let LoadInventoryResponse = class LoadInventoryResponse {
};
exports.LoadInventoryResponse = LoadInventoryResponse;
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], LoadInventoryResponse.prototype, "total", void 0);
__decorate([
    (0, graphql_1.Field)(() => [InventoryItem]),
    __metadata("design:type", Array)
], LoadInventoryResponse.prototype, "items", void 0);
exports.LoadInventoryResponse = LoadInventoryResponse = __decorate([
    (0, graphql_1.ObjectType)()
], LoadInventoryResponse);
let LoadLowStockAlertResponse = class LoadLowStockAlertResponse {
};
exports.LoadLowStockAlertResponse = LoadLowStockAlertResponse;
__decorate([
    (0, graphql_1.Field)(() => [InventoryItem]),
    __metadata("design:type", Array)
], LoadLowStockAlertResponse.prototype, "items", void 0);
exports.LoadLowStockAlertResponse = LoadLowStockAlertResponse = __decorate([
    (0, graphql_1.ObjectType)()
], LoadLowStockAlertResponse);
let LoadRecipeByMenuItemResponse = class LoadRecipeByMenuItemResponse {
};
exports.LoadRecipeByMenuItemResponse = LoadRecipeByMenuItemResponse;
__decorate([
    (0, graphql_1.Field)(() => [RecipeItem]),
    __metadata("design:type", Array)
], LoadRecipeByMenuItemResponse.prototype, "recipes", void 0);
exports.LoadRecipeByMenuItemResponse = LoadRecipeByMenuItemResponse = __decorate([
    (0, graphql_1.ObjectType)()
], LoadRecipeByMenuItemResponse);
let LoadStockHistoryResponse = class LoadStockHistoryResponse {
};
exports.LoadStockHistoryResponse = LoadStockHistoryResponse;
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], LoadStockHistoryResponse.prototype, "total", void 0);
__decorate([
    (0, graphql_1.Field)(() => [StockTransaction]),
    __metadata("design:type", Array)
], LoadStockHistoryResponse.prototype, "items", void 0);
exports.LoadStockHistoryResponse = LoadStockHistoryResponse = __decorate([
    (0, graphql_1.ObjectType)()
], LoadStockHistoryResponse);
let CreateInventoryItemResponse = class CreateInventoryItemResponse {
};
exports.CreateInventoryItemResponse = CreateInventoryItemResponse;
__decorate([
    (0, graphql_1.Field)(() => InventoryItem, { nullable: true }),
    __metadata("design:type", InventoryItem)
], CreateInventoryItemResponse.prototype, "item", void 0);
exports.CreateInventoryItemResponse = CreateInventoryItemResponse = __decorate([
    (0, graphql_1.ObjectType)()
], CreateInventoryItemResponse);
let UpdateInventoryItemResponse = class UpdateInventoryItemResponse {
};
exports.UpdateInventoryItemResponse = UpdateInventoryItemResponse;
__decorate([
    (0, graphql_1.Field)(() => InventoryItem, { nullable: true }),
    __metadata("design:type", InventoryItem)
], UpdateInventoryItemResponse.prototype, "item", void 0);
exports.UpdateInventoryItemResponse = UpdateInventoryItemResponse = __decorate([
    (0, graphql_1.ObjectType)()
], UpdateInventoryItemResponse);
let DeleteInventoryItemResponse = class DeleteInventoryItemResponse {
};
exports.DeleteInventoryItemResponse = DeleteInventoryItemResponse;
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], DeleteInventoryItemResponse.prototype, "_id", void 0);
exports.DeleteInventoryItemResponse = DeleteInventoryItemResponse = __decorate([
    (0, graphql_1.ObjectType)()
], DeleteInventoryItemResponse);
let AdjustStockResponse = class AdjustStockResponse {
};
exports.AdjustStockResponse = AdjustStockResponse;
__decorate([
    (0, graphql_1.Field)(() => StockTransaction, { nullable: true }),
    __metadata("design:type", StockTransaction)
], AdjustStockResponse.prototype, "transaction", void 0);
__decorate([
    (0, graphql_1.Field)(() => InventoryItem, { nullable: true }),
    __metadata("design:type", InventoryItem)
], AdjustStockResponse.prototype, "item", void 0);
exports.AdjustStockResponse = AdjustStockResponse = __decorate([
    (0, graphql_1.ObjectType)()
], AdjustStockResponse);
let SetMenuItemRecipeResponse = class SetMenuItemRecipeResponse {
};
exports.SetMenuItemRecipeResponse = SetMenuItemRecipeResponse;
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], SetMenuItemRecipeResponse.prototype, "menuItemId", void 0);
__decorate([
    (0, graphql_1.Field)(() => [RecipeItem]),
    __metadata("design:type", Array)
], SetMenuItemRecipeResponse.prototype, "recipes", void 0);
exports.SetMenuItemRecipeResponse = SetMenuItemRecipeResponse = __decorate([
    (0, graphql_1.ObjectType)()
], SetMenuItemRecipeResponse);
let CreateInventoryItemDto = class CreateInventoryItemDto {
};
exports.CreateInventoryItemDto = CreateInventoryItemDto;
__decorate([
    (0, graphql_1.Field)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateInventoryItemDto.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateInventoryItemDto.prototype, "sku", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateInventoryItemDto.prototype, "category", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateInventoryItemDto.prototype, "unit", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Float, { nullable: true }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], CreateInventoryItemDto.prototype, "currentStock", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Float, { nullable: true }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], CreateInventoryItemDto.prototype, "minStockAlert", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Float, { nullable: true }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], CreateInventoryItemDto.prototype, "costPerUnit", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, class_validator_1.IsEnum)(enum_1.ActiveStatus),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateInventoryItemDto.prototype, "isActive", void 0);
exports.CreateInventoryItemDto = CreateInventoryItemDto = __decorate([
    (0, graphql_1.InputType)()
], CreateInventoryItemDto);
let UpdateInventoryItemDto = class UpdateInventoryItemDto {
};
exports.UpdateInventoryItemDto = UpdateInventoryItemDto;
__decorate([
    (0, graphql_1.Field)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UpdateInventoryItemDto.prototype, "_id", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateInventoryItemDto.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateInventoryItemDto.prototype, "sku", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateInventoryItemDto.prototype, "category", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateInventoryItemDto.prototype, "unit", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Float, { nullable: true }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], UpdateInventoryItemDto.prototype, "minStockAlert", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Float, { nullable: true }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], UpdateInventoryItemDto.prototype, "costPerUnit", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, class_validator_1.IsEnum)(enum_1.ActiveStatus),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateInventoryItemDto.prototype, "isActive", void 0);
exports.UpdateInventoryItemDto = UpdateInventoryItemDto = __decorate([
    (0, graphql_1.InputType)()
], UpdateInventoryItemDto);
let DeleteInventoryItemDto = class DeleteInventoryItemDto {
};
exports.DeleteInventoryItemDto = DeleteInventoryItemDto;
__decorate([
    (0, graphql_1.Field)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], DeleteInventoryItemDto.prototype, "_id", void 0);
exports.DeleteInventoryItemDto = DeleteInventoryItemDto = __decorate([
    (0, graphql_1.InputType)()
], DeleteInventoryItemDto);
let LoadInventoryDto = class LoadInventoryDto {
};
exports.LoadInventoryDto = LoadInventoryDto;
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int, { nullable: true }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], LoadInventoryDto.prototype, "page", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int, { nullable: true }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], LoadInventoryDto.prototype, "limit", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], LoadInventoryDto.prototype, "search", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], LoadInventoryDto.prototype, "category", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, class_validator_1.IsEnum)(enum_1.ActiveStatus),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], LoadInventoryDto.prototype, "isActive", void 0);
exports.LoadInventoryDto = LoadInventoryDto = __decorate([
    (0, graphql_1.InputType)()
], LoadInventoryDto);
let AdjustStockDto = class AdjustStockDto {
};
exports.AdjustStockDto = AdjustStockDto;
__decorate([
    (0, graphql_1.Field)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], AdjustStockDto.prototype, "inventoryItemId", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    (0, class_validator_1.IsEnum)(enum_1.StockTransactionType),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], AdjustStockDto.prototype, "type", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Float),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], AdjustStockDto.prototype, "quantity", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], AdjustStockDto.prototype, "staffId", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], AdjustStockDto.prototype, "note", void 0);
exports.AdjustStockDto = AdjustStockDto = __decorate([
    (0, graphql_1.InputType)()
], AdjustStockDto);
let RecipeIngredientInput = class RecipeIngredientInput {
};
exports.RecipeIngredientInput = RecipeIngredientInput;
__decorate([
    (0, graphql_1.Field)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], RecipeIngredientInput.prototype, "inventoryItemId", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Float),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], RecipeIngredientInput.prototype, "quantityRequired", void 0);
exports.RecipeIngredientInput = RecipeIngredientInput = __decorate([
    (0, graphql_1.InputType)()
], RecipeIngredientInput);
let SetMenuItemRecipeDto = class SetMenuItemRecipeDto {
};
exports.SetMenuItemRecipeDto = SetMenuItemRecipeDto;
__decorate([
    (0, graphql_1.Field)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], SetMenuItemRecipeDto.prototype, "menuItemId", void 0);
__decorate([
    (0, graphql_1.Field)(() => [RecipeIngredientInput]),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => RecipeIngredientInput),
    __metadata("design:type", Array)
], SetMenuItemRecipeDto.prototype, "ingredients", void 0);
exports.SetMenuItemRecipeDto = SetMenuItemRecipeDto = __decorate([
    (0, graphql_1.InputType)()
], SetMenuItemRecipeDto);
let LoadStockHistoryDto = class LoadStockHistoryDto {
};
exports.LoadStockHistoryDto = LoadStockHistoryDto;
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], LoadStockHistoryDto.prototype, "inventoryItemId", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, class_validator_1.IsEnum)(enum_1.StockTransactionType),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], LoadStockHistoryDto.prototype, "type", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int, { nullable: true }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], LoadStockHistoryDto.prototype, "page", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int, { nullable: true }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], LoadStockHistoryDto.prototype, "limit", void 0);
exports.LoadStockHistoryDto = LoadStockHistoryDto = __decorate([
    (0, graphql_1.InputType)()
], LoadStockHistoryDto);
//# sourceMappingURL=inventory.model.js.map