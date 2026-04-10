import { ObjectType, Field, InputType, Int } from '@nestjs/graphql';
import { DateFilterDto, PaginateDto, SearchDto } from '../../common/graphql/common.model';
import { ActiveStatus } from '../../../domain/enums/enum';

export { ActiveStatus };

@ObjectType()
export class Category {
    @Field({ nullable: true })
    _id: string;

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
    // เพิ่ม isActive หรือ deletedAt ถ้ามี soft delete
    // @Field({ nullable: true })
    // isActive?: boolean;
}

@ObjectType()
export class LoadCategoryResponse {
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
    name: string;

    @Field({ nullable: true })
    description?: string;

    @Field({ nullable: true })
    photo?: string;

    @Field(() => String, { nullable: true })
    isActive?: ActiveStatus;
}

@InputType()
export class UpdateCategoryDto {
    @Field()
    _id: string;

    @Field({ nullable: true })
    name?: string;

    @Field({ nullable: true })
    description?: string;

    @Field({ nullable: true })
    photo?: string;

    @Field(() => String, { nullable: true })
    isActive?: ActiveStatus;
}

@InputType()
export class LoadCategoryByIdDto {
    @Field()
    _id: string;
}


@InputType()
export class DeleteCategoryDto {
    @Field()
    _id: string;
}

@InputType()
export class RestoreCategoryDto {
    @Field()
    _id: string;
}

@InputType()
export class LoadCategoryDto {
    @Field(() => Int, { nullable: true })
    page?: number;

    @Field(() => Int, { nullable: true })
    limit?: number;

    @Field(() => String, { nullable: true })
    isActive?: ActiveStatus;

    @Field({ nullable: true })
    keyword?: string;

    @Field({ nullable: true })
    sortField?: string;

    @Field({ nullable: true })
    sortDirection?: string;
}

