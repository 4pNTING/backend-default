import { Field, Int, ObjectType, InputType } from '@nestjs/graphql';
import {
    DateFilterDto,
    SearchDto,
    ActiveStatus
} from '../../common/graphql/common.model';

export { ActiveStatus };

// ==============================
// OBJECT TYPES (Output)
// ==============================

@ObjectType()
export class Zone {
    @Field({ nullable: true })
    _id: string;

    @Field()
    name: string;



    @Field(() => String, { nullable: true })
    isActive?: ActiveStatus;

    @Field({ nullable: true })
    createdAt?: Date;

    @Field({ nullable: true })
    updatedAt?: Date;
}

@ObjectType()
export class LoadZoneResponse {
    @Field(() => Int)
    count: number;

    @Field(() => [Zone])
    zone: Zone[];
}

@ObjectType()
export class LoadZoneByIdResponse {
    @Field(() => Zone, { nullable: true })
    zone: Zone;
}

@ObjectType()
export class CreateZoneResponse {
    @Field(() => Zone, { nullable: true })
    zone: Zone;
}

@ObjectType()
export class UpdateZoneResponse {
    @Field(() => Zone, { nullable: true })
    zone: Zone;
}

@ObjectType()
export class DeleteZoneResponse {
    @Field(() => Zone, { nullable: true })
    zone: Zone;
}

@ObjectType()
export class RestoreZoneResponse {
    @Field(() => Zone, { nullable: true })
    zone: Zone;
}


// ==============================
// INPUT TYPES (Input)
// ==============================

@InputType()
export class CreateZoneDto {
    @Field()
    name: string;

    @Field(() => String, { nullable: true })
    isActive?: ActiveStatus;
}

@InputType()
export class UpdateZoneDto {
    @Field()
    _id: string;

    @Field({ nullable: true })
    name?: string;

    @Field({ nullable: true })
    description?: string;

    @Field(() => String, { nullable: true })
    isActive?: ActiveStatus;
}

@InputType()
export class LoadZoneByIdDto {
    @Field()
    _id: string;
}


@InputType()
export class DeleteZoneDto {
    @Field()
    _id: string;
}

@InputType()
export class RestoreZoneDto {
    @Field()
    _id: string;
}

@InputType()
export class LoadZoneDto {
    @Field(() => Int, { nullable: true })
    page?: number;

    @Field(() => Int, { nullable: true })
    limit?: number;

    @Field(() => ActiveStatus)
    isActive: ActiveStatus;

    @Field({ nullable: true })
    keyword?: string;
}
