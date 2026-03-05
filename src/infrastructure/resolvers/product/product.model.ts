import { ObjectType, Field, InputType, Int } from '@nestjs/graphql';
import { ActiveStatus } from '../../../domain/enums/enum';
import { Category } from '../category/category.model';
import { InventoryLevel } from '../inventory-level/inventory-level.model';

@ObjectType()
export class Product {
    @Field(() => Int, { nullable: true })
    _id: number;

    @Field()
    sku: string;

    @Field()
    name: string;

    @Field({ nullable: true })
    description?: string;

    @Field(() => Int)
    price: number;

    @Field(() => Int)
    cost: number;

    @Field(() => Int)
    categoryId: number;

    @Field(() => Int)
    lowStockThreshold: number;

    @Field({ nullable: true })
    createdAt?: Date;

    @Field({ nullable: true })
    updatedAt?: Date;

    @Field({ nullable: true })
    isActive?: boolean;

    @Field(() => Category, { nullable: true })
    category?: Category;

    @Field(() => [InventoryLevel], { nullable: true })
    inventoryLevels?: InventoryLevel[];
}

@ObjectType()
export class LoadProductResponse {
    @Field(() => Int)
    count: number;

    @Field(() => [Product])
    product: Product[];
}

@ObjectType()
export class LoadProductByIdResponse {
    @Field(() => Product, { nullable: true })
    product: Product;
}

@ObjectType()
export class CreateProductResponse {
    @Field(() => Product, { nullable: true })
    product: Product;
}

@ObjectType()
export class UpdateProductResponse {
    @Field(() => Product, { nullable: true })
    product: Product;
}

@ObjectType()
export class DeleteProductResponse {
    @Field(() => Product, { nullable: true })
    product: Product;
}

@ObjectType()
export class RestoreProductResponse {
    @Field(() => Product, { nullable: true })
    product: Product;
}

@InputType()
export class CreateProductDto {
    @Field()
    sku: string;

    @Field()
    name: string;

    @Field({ nullable: true })
    description?: string;

    @Field(() => Int)
    price: number;

    @Field(() => Int)
    cost: number;

    @Field(() => Int)
    categoryId: number;

    @Field(() => Int, { nullable: true })
    lowStockThreshold?: number;

    @Field({ nullable: true })
    isActive?: boolean;
}

@InputType()
export class UpdateProductDto {
    @Field(() => Int)
    _id: number;

    @Field({ nullable: true })
    sku?: string;

    @Field({ nullable: true })
    name?: string;

    @Field({ nullable: true })
    description?: string;

    @Field(() => Int, { nullable: true })
    price?: number;

    @Field(() => Int, { nullable: true })
    cost?: number;

    @Field(() => Int, { nullable: true })
    categoryId?: number;

    @Field(() => Int, { nullable: true })
    lowStockThreshold?: number;

    @Field({ nullable: true })
    isActive?: boolean;
}

@InputType()
export class LoadProductByIdDto {
    @Field(() => Int)
    _id: number;
}

@InputType()
export class DeleteProductDto {
    @Field(() => Int)
    _id: number;
}

@InputType()
export class RestoreProductDto {
    @Field(() => Int)
    _id: number;
}

@InputType()
export class LoadProductDto {
    @Field(() => Int, { nullable: true })
    page?: number;

    @Field(() => Int, { nullable: true })
    limit?: number;

    @Field(() => ActiveStatus, { nullable: true })
    isActive?: ActiveStatus;

    @Field({ nullable: true })
    keyword?: string;
}
