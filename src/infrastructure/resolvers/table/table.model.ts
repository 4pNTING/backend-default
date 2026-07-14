import { ObjectType, Field, InputType, Int } from '@nestjs/graphql';
import { ActiveStatus, TableStatus } from '../../../domain/enums/enum';

export { ActiveStatus, TableStatus };

// ─── Object Types ─────────────────────────────────────────
@ObjectType()
export class Table {
    @Field({ nullable: true })
    _id: string;

    @Field()
    number: string;

    @Field()
    zoneId: string;

    @Field(() => Int)
    capacity: number;

    @Field(() => String)
    status: TableStatus;

    @Field(() => String, { nullable: true })
    isActive?: ActiveStatus;

    @Field({ nullable: true })
    createdAt?: Date;

    @Field({ nullable: true })
    updatedAt?: Date;
}

@ObjectType()
export class LoadTableResponse {
    @Field(() => Int, { nullable: true })
    count: number;

    @Field(() => [Table])
    table: Table[];
}

@ObjectType()
export class LoadTableByIdResponse {
    @Field(() => Table, { nullable: true })
    table: Table;
}

@ObjectType()
export class CreateTableResponse {
    @Field(() => Table, { nullable: true })
    table: Table;
}

@ObjectType()
export class UpdateTableResponse {
    @Field(() => Table, { nullable: true })
    table: Table;
}

@ObjectType()
export class DeleteTableResponse {
    @Field(() => Table, { nullable: true })
    table: Table;
}

@ObjectType()
export class RestoreTableResponse {
    @Field(() => Table, { nullable: true })
    table: Table;
}

// ─── Input Types ──────────────────────────────────────────
@InputType()
export class CreateTableDto {
    @Field()
    number: string;

    @Field()
    zoneId: string;

    @Field(() => Int, { nullable: true })
    capacity?: number;

    @Field(() => String, { nullable: true })
    status?: TableStatus;

    @Field(() => String, { nullable: true })
    isActive?: ActiveStatus;
}

@InputType()
export class UpdateTableDto {
    @Field()
    _id: string;

    @Field({ nullable: true })
    number?: string;

    @Field({ nullable: true })
    zoneId?: string;

    @Field(() => Int, { nullable: true })
    capacity?: number;

    @Field(() => String, { nullable: true })
    status?: TableStatus;

    @Field(() => String, { nullable: true })
    isActive?: ActiveStatus;
}

@InputType()
export class LoadTableDto {
    @Field(() => Int, { nullable: true })
    page?: number;

    @Field(() => Int, { nullable: true })
    limit?: number;

    @Field({ nullable: true })
    zoneId?: string;

    @Field(() => String, { nullable: true })
    isActive?: ActiveStatus;

    @Field({ nullable: true })
    keyword?: string;

    @Field({ nullable: true })
    sortField?: string;

    @Field({ nullable: true })
    sortDirection?: string;
}

@InputType()
export class LoadTableByIdDto {
    @Field()
    _id: string;
}

@InputType()
export class DeleteTableDto {
    @Field()
    _id: string;
}

@InputType()
export class RestoreTableDto {
    @Field()
    _id: string;
}

@InputType()
export class LoadTableByZoneDto {
    @Field()
    zoneId: string;
}
