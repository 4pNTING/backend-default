import { ObjectType, Field, InputType, Int, Float } from '@nestjs/graphql';
import { IsString, IsNotEmpty, IsOptional, IsNumber, IsEnum, ValidateNested, IsArray } from 'class-validator';
import { Type } from 'class-transformer';
import { ActiveStatus, StockTransactionType } from '../../../domain/enums/enum';

// ─── Object Types ─────────────────────────────────────────

@ObjectType()
export class InventoryItem {
    @Field({ nullable: true })
    _id: string;

    @Field()
    name: string;

    @Field({ nullable: true })
    sku?: string;

    @Field()
    category: string;

    @Field()
    unit: string;

    @Field(() => Float)
    currentStock: number;

    @Field(() => Float)
    minStockAlert: number;

    @Field(() => Float)
    costPerUnit: number;

    @Field(() => String)
    isActive: ActiveStatus;

    @Field({ nullable: true })
    createdAt?: Date;

    @Field({ nullable: true })
    updatedAt?: Date;
}

@ObjectType()
export class RecipeItem {
    @Field({ nullable: true })
    _id: string;

    @Field()
    menuItemId: string;

    @Field()
    inventoryItemId: string;

    @Field(() => Float)
    quantityRequired: number;

    @Field(() => InventoryItem, { nullable: true })
    inventoryItem?: InventoryItem;

    @Field({ nullable: true })
    createdAt?: Date;

    @Field({ nullable: true })
    updatedAt?: Date;
}

@ObjectType()
export class StockTransaction {
    @Field({ nullable: true })
    _id: string;

    @Field()
    inventoryItemId: string;

    @Field(() => String)
    type: StockTransactionType;

    @Field(() => Float)
    quantity: number;

    @Field(() => Float)
    balanceAfter: number;

    @Field({ nullable: true })
    orderId?: string;

    @Field({ nullable: true })
    staffId?: string;

    @Field({ nullable: true })
    note?: string;

    @Field(() => InventoryItem, { nullable: true })
    inventoryItem?: InventoryItem;

    @Field({ nullable: true })
    createdAt?: Date;
}

// ─── Query Response Types ─────────────────────────────────

@ObjectType()
export class LoadInventoryResponse {
    @Field(() => Int)
    total: number;

    @Field(() => [InventoryItem])
    items: InventoryItem[];
}

@ObjectType()
export class LoadLowStockAlertResponse {
    @Field(() => [InventoryItem])
    items: InventoryItem[];
}

@ObjectType()
export class LoadRecipeByMenuItemResponse {
    @Field(() => [RecipeItem])
    recipes: RecipeItem[];
}

@ObjectType()
export class LoadStockHistoryResponse {
    @Field(() => Int)
    total: number;

    @Field(() => [StockTransaction])
    items: StockTransaction[];
}

// ─── Mutation Response Types ──────────────────────────────

@ObjectType()
export class CreateInventoryItemResponse {
    @Field(() => InventoryItem, { nullable: true })
    item: InventoryItem;
}

@ObjectType()
export class UpdateInventoryItemResponse {
    @Field(() => InventoryItem, { nullable: true })
    item: InventoryItem;
}

@ObjectType()
export class DeleteInventoryItemResponse {
    @Field()
    _id: string;
}

@ObjectType()
export class AdjustStockResponse {
    @Field(() => StockTransaction, { nullable: true })
    transaction: StockTransaction;

    @Field(() => InventoryItem, { nullable: true })
    item: InventoryItem;
}

@ObjectType()
export class SetMenuItemRecipeResponse {
    @Field()
    menuItemId: string;

    @Field(() => [RecipeItem])
    recipes: RecipeItem[];
}

// ─── Input Types ──────────────────────────────────────────

@InputType()
export class CreateInventoryItemDto {
    @Field()
    @IsString()
    @IsNotEmpty()
    name: string;

    @Field({ nullable: true })
    @IsString()
    @IsOptional()
    sku?: string;

    @Field()
    @IsString()
    @IsNotEmpty()
    category: string;

    @Field()
    @IsString()
    @IsNotEmpty()
    unit: string;

    @Field(() => Float, { nullable: true })
    @IsNumber()
    @IsOptional()
    currentStock?: number;

    @Field(() => Float, { nullable: true })
    @IsNumber()
    @IsOptional()
    minStockAlert?: number;

    @Field(() => Float, { nullable: true })
    @IsNumber()
    @IsOptional()
    costPerUnit?: number;

    @Field(() => String, { nullable: true })
    @IsEnum(ActiveStatus)
    @IsOptional()
    isActive?: ActiveStatus;
}

@InputType()
export class UpdateInventoryItemDto {
    @Field()
    @IsString()
    @IsNotEmpty()
    _id: string;

    @Field({ nullable: true })
    @IsString()
    @IsOptional()
    name?: string;

    @Field({ nullable: true })
    @IsString()
    @IsOptional()
    sku?: string;

    @Field({ nullable: true })
    @IsString()
    @IsOptional()
    category?: string;

    @Field({ nullable: true })
    @IsString()
    @IsOptional()
    unit?: string;

    @Field(() => Float, { nullable: true })
    @IsNumber()
    @IsOptional()
    minStockAlert?: number;

    @Field(() => Float, { nullable: true })
    @IsNumber()
    @IsOptional()
    costPerUnit?: number;

    @Field(() => String, { nullable: true })
    @IsEnum(ActiveStatus)
    @IsOptional()
    isActive?: ActiveStatus;
}

@InputType()
export class DeleteInventoryItemDto {
    @Field()
    @IsString()
    @IsNotEmpty()
    _id: string;
}

@InputType()
export class LoadInventoryDto {
    @Field(() => Int, { nullable: true })
    @IsNumber()
    @IsOptional()
    page?: number;

    @Field(() => Int, { nullable: true })
    @IsNumber()
    @IsOptional()
    limit?: number;

    @Field({ nullable: true })
    @IsString()
    @IsOptional()
    search?: string;

    @Field({ nullable: true })
    @IsString()
    @IsOptional()
    category?: string;

    @Field(() => String, { nullable: true })
    @IsEnum(ActiveStatus)
    @IsOptional()
    isActive?: ActiveStatus;
}

@InputType()
export class AdjustStockDto {
    @Field()
    @IsString()
    @IsNotEmpty()
    inventoryItemId: string;

    @Field(() => String)
    @IsEnum(StockTransactionType)
    @IsNotEmpty()
    type: StockTransactionType;

    @Field(() => Float)
    @IsNumber()
    @IsNotEmpty()
    quantity: number;

    @Field({ nullable: true })
    @IsString()
    @IsOptional()
    staffId?: string;

    @Field({ nullable: true })
    @IsString()
    @IsOptional()
    note?: string;
}

@InputType()
export class RecipeIngredientInput {
    @Field()
    @IsString()
    @IsNotEmpty()
    inventoryItemId: string;

    @Field(() => Float)
    @IsNumber()
    @IsNotEmpty()
    quantityRequired: number;
}

@InputType()
export class SetMenuItemRecipeDto {
    @Field()
    @IsString()
    @IsNotEmpty()
    menuItemId: string;

    @Field(() => [RecipeIngredientInput])
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => RecipeIngredientInput)
    ingredients: RecipeIngredientInput[];
}

@InputType()
export class LoadStockHistoryDto {
    @Field({ nullable: true })
    @IsString()
    @IsOptional()
    inventoryItemId?: string;

    @Field(() => String, { nullable: true })
    @IsEnum(StockTransactionType)
    @IsOptional()
    type?: StockTransactionType;

    @Field(() => Int, { nullable: true })
    @IsNumber()
    @IsOptional()
    page?: number;

    @Field(() => Int, { nullable: true })
    @IsNumber()
    @IsOptional()
    limit?: number;
}
