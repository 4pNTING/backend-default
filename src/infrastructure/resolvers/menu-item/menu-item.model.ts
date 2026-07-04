import { ObjectType, Field, InputType, Int, Float } from '@nestjs/graphql';
import { ActiveStatus } from '../../../domain/enums/enum';

// ─── Object Types ─────────────────────────────────────────
@ObjectType()
export class MenuItem {
    @Field({ nullable: true })
    _id: string;

    @Field()
    name: string;

    @Field({ nullable: true })
    description?: string;

    @Field({ nullable: true })
    photo?: string;

    @Field(() => Float)
    price: number;

    @Field()
    categoryId: string;

    @Field(() => String, { nullable: true })
    isActive?: ActiveStatus;

    @Field({ nullable: true })
    createdAt?: Date;

    @Field({ nullable: true })
    updatedAt?: Date;
}

@ObjectType()
export class LoadMenuItemResponse {
    @Field(() => [MenuItem])
    menuItem: MenuItem[];
}

@ObjectType()
export class LoadMenuItemByIdResponse {
    @Field(() => MenuItem, { nullable: true })
    menuItem: MenuItem;
}

@ObjectType()
export class CreateMenuItemResponse {
    @Field(() => MenuItem, { nullable: true })
    menuItem: MenuItem;
}

@ObjectType()
export class UpdateMenuItemResponse {
    @Field(() => MenuItem, { nullable: true })
    menuItem: MenuItem;
}

@ObjectType()
export class DeleteMenuItemResponse {
    @Field(() => MenuItem, { nullable: true })
    menuItem: MenuItem;
}

// ─── Input Types ──────────────────────────────────────────
@InputType()
export class CreateMenuItemDto {
    @Field()
    name: string;

    @Field({ nullable: true })
    description?: string;

    @Field({ nullable: true })
    photo?: string;

    @Field(() => Float)
    price: number;

    @Field()
    categoryId: string;

    @Field(() => String, { nullable: true })
    isActive?: ActiveStatus;
}

@InputType()
export class UpdateMenuItemDto {
    @Field()
    _id: string;

    @Field({ nullable: true })
    name?: string;

    @Field({ nullable: true })
    description?: string;

    @Field({ nullable: true })
    photo?: string;

    @Field(() => Float, { nullable: true })
    price?: number;

    @Field({ nullable: true })
    categoryId?: string;

    @Field(() => String, { nullable: true })
    isActive?: ActiveStatus;
}

@InputType()
export class LoadMenuItemDto {
    @Field(() => Int, { nullable: true })
    page?: number;

    @Field(() => Int, { nullable: true })
    limit?: number;

    @Field({ nullable: true })
    categoryId?: string;

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
export class LoadMenuItemByIdDto {
    @Field()
    _id: string;
}

@InputType()
export class DeleteMenuItemDto {
    @Field()
    _id: string;
}

@InputType()
export class LoadMenuItemByCategoryDto {
    @Field()
    categoryId: string;
}
