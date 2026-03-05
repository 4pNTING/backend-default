import { ObjectType, Field, InputType, Int } from '@nestjs/graphql';
import { Product } from '../product/product.model';
import { Zone } from '../zone/zone.model';

@ObjectType()
export class InventoryLevel {
    @Field(() => Int, { nullable: true })
    _id: number;

    @Field(() => Int)
    productId: number;

    @Field(() => Int)
    zoneId: number;

    @Field(() => Int)
    quantity: number;

    @Field({ nullable: true })
    updatedAt?: Date;

    @Field(() => Product, { nullable: true })
    product?: Product;

    @Field(() => Zone, { nullable: true })
    zone?: Zone;
}

@ObjectType()
export class LoadInventoryLevelResponse {
    @Field(() => Int)
    count: number;

    @Field(() => [InventoryLevel])
    inventoryLevel: InventoryLevel[];
}

@ObjectType()
export class LoadInventoryLevelByIdResponse {
    @Field(() => InventoryLevel, { nullable: true })
    inventoryLevel: InventoryLevel;
}

@ObjectType()
export class CreateInventoryLevelResponse {
    @Field(() => InventoryLevel, { nullable: true })
    inventoryLevel: InventoryLevel;
}

@ObjectType()
export class UpdateInventoryLevelResponse {
    @Field(() => InventoryLevel, { nullable: true })
    inventoryLevel: InventoryLevel;
}

@InputType()
export class CreateInventoryLevelDto {
    @Field(() => Int)
    productId: number;

    @Field(() => Int)
    zoneId: number;

    @Field(() => Int)
    quantity: number;
}

@InputType()
export class UpdateInventoryLevelDto {
    @Field(() => Int)
    _id: number;

    @Field(() => Int)
    quantity: number;
}

@InputType()
export class LoadInventoryLevelByIdDto {
    @Field(() => Int)
    _id: number;
}

@InputType()
export class LoadInventoryLevelByProductAndZoneDto {
    @Field(() => Int)
    productId: number;

    @Field(() => Int)
    zoneId: number;
}

@InputType()
export class LoadInventoryLevelDto {
    @Field(() => Int, { nullable: true })
    page?: number;

    @Field(() => Int, { nullable: true })
    limit?: number;

    @Field(() => Int, { nullable: true })
    productId?: number;

    @Field(() => Int, { nullable: true })
    zoneId?: number;
}
