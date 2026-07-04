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

// ─── Input Types ──────────────────────────────────────────
@InputType()
export class CreateOrderDto {
    @Field()
    tableId: string;

    @Field()
    staffId: string;

    @Field({ nullable: true })
    note?: string;

    @Field(() => Float, { nullable: true })
    discount?: number;
}

@InputType()
export class AddOrderItemDto {
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

    @Field({ nullable: true })
    note?: string;
}

@InputType()
export class RemoveOrderItemDto {
    @Field()
    orderItemId: string;

    @Field()
    orderId: string;
}

@InputType()
export class UpdateOrderStatusDto {
    @Field()
    _id: string;

    @Field(() => String)
    status: OrderStatus;
}

@InputType()
export class CancelOrderDto {
    @Field()
    _id: string;

    @Field({ nullable: true })
    reason?: string;
}

@InputType()
export class LoadOrderDto {
    @Field(() => Int, { nullable: true })
    page?: number;

    @Field(() => Int, { nullable: true })
    limit?: number;

    @Field({ nullable: true })
    tableId?: string;

    @Field(() => String, { nullable: true })
    status?: OrderStatus;
}

@InputType()
export class LoadOrderByIdDto {
    @Field()
    _id: string;
}

@InputType()
export class LoadOrderByTableDto {
    @Field()
    tableId: string;
}
