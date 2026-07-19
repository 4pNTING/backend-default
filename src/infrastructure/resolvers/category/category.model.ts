import { Field, Int, ObjectType, InputType } from '@nestjs/graphql';
import { IsString, IsOptional, IsNotEmpty } from 'class-validator';
import { ActiveStatus } from '../../common/graphql/common.model';

export { ActiveStatus };

@ObjectType()
export class Category {
    @Field({ nullable: true })
    _id: string;

    @Field(() => Int, { nullable: true })
    uniqueId: number;

    @Field({ nullable: true })
    uid: string;

    @Field()
    name: string;

    @Field({ nullable: true })
    description?: string;

    @Field({ nullable: true })
    photo?: string;

    @Field({ nullable: true })
    createdAt?: Date;

    @Field({ nullable: true })
    updatedAt?: Date;

    @Field(() => String, { nullable: true })
    isActive?: ActiveStatus;
}

@ObjectType()
export class LoadCategoryResponse {
    @Field(() => Int, { nullable: true })
    count: number;

    @Field(() => [Category])
    category: Category[];
}

@ObjectType()
export class LoadCategoryByIdResponse {
    @Field(() => Category, { nullable: true })
    category: Category;
}

@ObjectType()
export class CreateCategoryResponse {
    @Field(() => Category, { nullable: true })
    category: Category;
}

@ObjectType()
export class UpdateCategoryResponse {
    @Field(() => Category, { nullable: true })
    category: Category;
}

@ObjectType()
export class DeleteCategoryResponse {
    @Field(() => Category, { nullable: true })
    category: Category;
}

@ObjectType()
export class RestoreCategoryResponse {
    @Field(() => Category, { nullable: true })
    category: Category;
}


@InputType()
export class CreateCategoryDto {
    @Field()
    @IsString()
    @IsNotEmpty()
    name: string;

    @Field({ nullable: true })
    @IsOptional()
    description?: string;

    @Field({ nullable: true })
    @IsOptional()
    photo?: string;

    @Field(() => String, { nullable: true })
    @IsOptional()
    isActive?: ActiveStatus;
}

@InputType()
export class UpdateCategoryDto {
    @Field()
    @IsString()
    @IsNotEmpty()
    _id: string;

    @Field({ nullable: true })
    @IsString()
    @IsOptional()
    name?: string;

    @Field({ nullable: true })
    @IsString()
    @IsOptional()
    description?: string;

    @Field({ nullable: true })
    @IsString()
    @IsOptional()
    photo?: string;

    @Field(() => String, { nullable: true })
    @IsOptional()
    isActive?: ActiveStatus;
}

@InputType()
export class LoadCategoryByIdDto {
    @Field()
    @IsString()
    @IsNotEmpty()
    _id: string;
}


@InputType()
export class DeleteCategoryDto {
    @Field()
    @IsString()
    @IsNotEmpty()
    _id: string;
}

@InputType()
export class RestoreCategoryDto {
    @Field()
    @IsString()
    @IsNotEmpty()
    _id: string;
}

@InputType()
export class LoadCategoryDto {
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