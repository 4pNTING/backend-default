import { Field, Int, ObjectType, InputType } from '@nestjs/graphql';
import { IsString, IsOptional, IsNotEmpty, IsBoolean } from 'class-validator';
import {
    DateFilterDto,
    SearchDto,
    ActiveStatus
} from '../../common/graphql/common.model';

export { ActiveStatus };


@ObjectType()
export class Currency {
    @Field({ nullable: true })
    _id: string;

    @Field()
    code: string;

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
export class LoadCurrencyResponse {
    @Field(() => [Currency])
    currency: Currency[];
}

@ObjectType()
export class LoadCurrencyByIdResponse {
    @Field(() => Currency, { nullable: true })
    currency: Currency;
}

@ObjectType()
export class CreateCurrencyResponse {
    @Field(() => Currency, { nullable: true })
    currency: Currency;
}

@ObjectType()
export class UpdateCurrencyResponse {
    @Field(() => Currency, { nullable: true })
    currency: Currency;
}

@ObjectType()
export class DeleteCurrencyResponse {
    @Field()
    _id: string;
}

@InputType()
export class CreateCurrencyDto {
    @Field()
    @IsString()
    @IsNotEmpty()
    code: string;

    @Field()
    @IsString()
    @IsNotEmpty()
    name: string;
 @Field(() => String, { nullable: true })
    @IsOptional()
    isActive?: ActiveStatus;
}

@InputType()
export class UpdateCurrencyDto {
    @Field()
    @IsNotEmpty()
    _id: string;

    @Field({ nullable: true })
    @IsString()
    @IsOptional()
    code?: string;

    @Field({ nullable: true })
    @IsString()
    @IsOptional()
    name?: string;

    @Field(() => ActiveStatus, { nullable: true })
    @IsOptional()
    isActive?: ActiveStatus;
}

@InputType()
export class LoadCurrencyByIdDto {
    @Field()
    @IsNotEmpty()
    _id: string;
}

@InputType()
export class DeleteCurrencyDto {
    @Field()
    @IsNotEmpty()
    _id: string;
}

@InputType()
export class LoadCurrencyDto {
    @Field(() => Int, { nullable: true })
    @IsOptional()
    page?: number;

    @Field(() => Int, { nullable: true })
    @IsOptional()
    limit?: number;

    @Field(() => ActiveStatus, { nullable: true })
    @IsOptional()
    isActive?: ActiveStatus;

    @Field({ nullable: true })
    @IsString()
    @IsOptional()
    keyword?: string;

    @Field({ nullable: true })
    @IsString()
    @IsOptional()
    sortField?: string;

    @Field({ nullable: true })
    @IsString()
    @IsOptional()
    sortDirection?: string;
}
