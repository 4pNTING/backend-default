import { ObjectType, Field, InputType, Int } from '@nestjs/graphql';
import { InventoryMovementType } from '../../../domain/enums/enum';

@ObjectType()
export class InventoryMovement {
    @Field(() => Int, { nullable: true })
    _id: number;

    @Field(() => Int)
    productId: number;

    @Field(() => Int)
    zoneId: number;

    @Field(() => InventoryMovementType)
    type: InventoryMovementType;

    @Field(() => Int)
    quantity: number;

    @Field({ nullable: true })
    note?: string;

    @Field(() => Int, { nullable: true })
    userId?: number;

    @Field({ nullable: true })
    createdAt?: Date;
}

@ObjectType()
export class LoadInventoryMovementResponse {
    @Field(() => Int)
    count: number;

    @Field(() => [InventoryMovement])
    inventoryMovement: InventoryMovement[];
}

@ObjectType()
export class LoadInventoryMovementByIdResponse {
    @Field(() => InventoryMovement, { nullable: true })
    inventoryMovement: InventoryMovement;
}

@ObjectType()
export class CreateInventoryMovementResponse {
    @Field(() => InventoryMovement, { nullable: true })
    inventoryMovement: InventoryMovement;
}

@InputType()
export class CreateInventoryMovementDto {
    @Field(() => Int)
    productId: number;

    @Field(() => Int)
    zoneId: number;

    @Field(() => InventoryMovementType)
    type: InventoryMovementType;

    @Field(() => Int)
    quantity: number;

    @Field({ nullable: true })
    note?: string;

    @Field(() => Int, { nullable: true })
    userId?: number;
}

@InputType()
export class LoadInventoryMovementByIdDto {
    @Field(() => Int)
    _id: number;
}

@InputType()
export class LoadInventoryMovementDto {
    @Field(() => Int, { nullable: true })
    page?: number;

    @Field(() => Int, { nullable: true })
    limit?: number;
}
