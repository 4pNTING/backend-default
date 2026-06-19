import { Field, ObjectType, InputType } from '@nestjs/graphql';
import { IsString, IsOptional, IsNotEmpty, IsBoolean } from 'class-validator';

@ObjectType()
export class Currency {
    @Field({ nullable: true })
    _id: string;

    @Field()
    code: string;

    @Field()
    name: string;

    @Field(() => Boolean)
    isActive: boolean;

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

    @Field(() => Boolean, { defaultValue: true })
    @IsBoolean()
    isActive: boolean;
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

    @Field(() => Boolean, { nullable: true })
    @IsBoolean()
    @IsOptional()
    isActive?: boolean;
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
