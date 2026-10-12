import { IsString, IsNotEmpty, IsOptional, IsNumber, IsEnum } from "class-validator";
import { ObjectType, Field, InputType, Int, Float } from '@nestjs/graphql';
import { OrderStatus } from '../../../domain/enums/enum';

// ─── Order Item Object ────────────────────────────────────
@ObjectType()
export class OrderItem {
    @Field({ nullable: true })
    _id: string;

    @Field()
    orderId: string;

    @Field()
    menuItemId: string;

    @Field()
    menuItemName: string;

    @Field(() => Int)
    quantity: number;

    @Field(() => Float)
    unitPrice: number;

    @Field(() => Float)
    totalPrice: number;

    @Field({ nullable: true })
    note?: string;
}

// ─── Order Object ─────────────────────────────────────────
@ObjectType()
export class Order {
    @Field({ nullable: true })
    _id: string;

    @Field()
    orderNumber: string;

    @Field()
    tableId: string;

    @Field()
    staffId: string;

    @Field(() => String)
    status: OrderStatus;

    @Field({ nullable: true })
    note?: string;

    @Field(() => Float)
    subTotal: number;

    @Field(() => Float)
    discount: number;

    @Field(() => Float)
    total: number;

    @Field(() => [OrderItem], { nullable: true })
    items?: OrderItem[];

    @Field({ nullable: true })
    createdAt?: Date;

    @Field({ nullable: true })
    updatedAt?: Date;
}

// ─── Response Types ───────────────────────────────────────
@ObjectType()
export class LoadOrderResponse {
    @Field(() => [Order])
    order: Order[];
}

@ObjectType()
export class LoadOrderByIdResponse {
    @Field(() => Order, { nullable: true })
    order: Order;
}

@ObjectType()
export class CreateOrderResponse {
    @Field(() => Order, { nullable: true })
    order: Order;
}

@ObjectType()
export class UpdateOrderResponse {
    @Field(() => Order, { nullable: true })
    order: Order;
}

@ObjectType()
export class AddOrderItemResponse {
    @Field()
    orderId: string;

    @Field(() => OrderItem, { nullable: true })
    item: OrderItem;
}

@ObjectType()
export class CancelOrderResponse {
    @Field()
    _id: string;
}

@ObjectType()
export class TransferTableResponse {
    @Field(() => Order, { nullable: true })
    order: Order;
}

// ─── Input Types ──────────────────────────────────────────
@InputType()
export class CreateOrderDto {
    @Field()
    @IsString()
    @IsNotEmpty()
    tableId: string;

    @Field()
    @IsString()
    @IsNotEmpty()
    staffId: string;

    @Field({ nullable: true })
    @IsString()
    @IsOptional()
    note?: string;

    @Field(() => Float, { nullable: true })
    @IsNumber()
    @IsOptional()
    discount?: number;
}

@InputType()
export class AddOrderItemDto {
    @Field()
    @IsString()
    @IsNotEmpty()
    orderId: string;

    @Field()
    @IsString()
    @IsNotEmpty()
    menuItemId: string;

    @Field()
    @IsString()
    @IsNotEmpty()
    menuItemName: string;

    @Field(() => Int)
    @IsNumber()
    @IsNotEmpty()
    quantity: number;

    @Field(() => Float)
    @IsNumber()
    @IsNotEmpty()
    unitPrice: number;

    @Field({ nullable: true })
    @IsString()
    @IsOptional()
    note?: string;
}

@InputType()
export class RemoveOrderItemDto {
    @Field()
    @IsString()
    @IsNotEmpty()
    orderItemId: string;

    @Field()
    @IsString()
    @IsNotEmpty()
    orderId: string;
}

@InputType()
export class UpdateOrderStatusDto {
    @Field()
    @IsString()
    @IsNotEmpty()
    _id: string;

    @Field(() => String)
    @IsString()
    @IsNotEmpty()
    status: OrderStatus;
}

@InputType()
export class CancelOrderDto {
    @Field()
    @IsString()
    @IsNotEmpty()
    _id: string;

    @Field({ nullable: true })
    @IsString()
    @IsOptional()
    reason?: string;
}

@InputType()
export class LoadOrderDto {
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
    tableId?: string;

    @Field(() => String, { nullable: true })
    @IsOptional()
    status?: OrderStatus;
}

@InputType()
export class LoadOrderByIdDto {
    @Field()
    @IsString()
    @IsNotEmpty()
    _id: string;
}

@InputType()
export class LoadOrderByTableDto {
    @Field()
    @IsString()
    @IsNotEmpty()
    tableId: string;
}

@InputType()
export class TransferTableDto {
    @Field()
    @IsString()
    @IsNotEmpty()
    orderId: string;

    @Field()
    @IsString()
    @IsNotEmpty()
    fromTableId: string;

    @Field()
    @IsString()
    @IsNotEmpty()
    toTableId: string;
}
