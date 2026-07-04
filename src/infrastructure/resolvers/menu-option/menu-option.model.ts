import { ObjectType, Field, InputType, Float } from '@nestjs/graphql';
import { ActiveStatus } from '../../../domain/enums/enum';

@ObjectType()
export class MenuOption {
    @Field({ nullable: true })
    _id: string;

    @Field()
    menuItemId: string;

    @Field()
    name: string;

    @Field(() => Float)
    extraPrice: number;

    @Field(() => String, { nullable: true })
    isActive?: ActiveStatus;

    @Field({ nullable: true })
    createdAt?: Date;

    @Field({ nullable: true })
    updatedAt?: Date;
}

@ObjectType()
export class LoadMenuOptionResponse {
    @Field(() => [MenuOption])
    menuOption: MenuOption[];
}

@ObjectType()
export class CreateMenuOptionResponse {
    @Field(() => MenuOption, { nullable: true })
    menuOption: MenuOption;
}

@ObjectType()
export class UpdateMenuOptionResponse {
    @Field(() => MenuOption, { nullable: true })
    menuOption: MenuOption;
}

@ObjectType()
export class DeleteMenuOptionResponse {
    @Field(() => String)
    _id: string;
}

@InputType()
export class CreateMenuOptionDto {
    @Field()
    menuItemId: string;

    @Field()
    name: string;

    @Field(() => Float, { nullable: true })
    extraPrice?: number;

    @Field(() => String, { nullable: true })
    isActive?: ActiveStatus;
}

@InputType()
export class UpdateMenuOptionDto {
    @Field()
    _id: string;

    @Field({ nullable: true })
    name?: string;

    @Field(() => Float, { nullable: true })
    extraPrice?: number;

    @Field(() => String, { nullable: true })
    isActive?: ActiveStatus;
}

@InputType()
export class DeleteMenuOptionDto {
    @Field()
    _id: string;
}

@InputType()
export class LoadMenuOptionByMenuItemDto {
    @Field()
    menuItemId: string;
}
