import { Field, Int, ObjectType, InputType } from '@nestjs/graphql';
import {
    ConditionDto,
    DateFilterDto,
    InNumberDto,
    InStringDto,
    PaginateDto,
    SearchDto,
    ActiveStatus
} from '../../common/graphql/common.model';

export { ActiveStatus };

// ==============================
// OBJECT TYPES (Output)
// ==============================

@ObjectType()
export class Category {
    @Field(() => Int, { nullable: true })
    _id: number; // ใช้ _id จริงๆ ตามที่ขอ

    @Field()
    name: string;

    @Field({ nullable: true })
    description?: string;

    @Field({ nullable: true })
    photo?: string;

    @Field({ nullable: true })
    createdAt?: Date; // ควรใช้ Date scalar ถ้าตั้งค่าไว้

    @Field({ nullable: true })
    updatedAt?: Date;

    @Field({ nullable: true })
    isActive?: boolean;
    // เพิ่ม isActive หรือ deletedAt ถ้ามี soft delete
    // @Field({ nullable: true })
    // isActive?: boolean;
}

@ObjectType()
export class LoadCategoryResponse {
    @Field(() => Int)
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


// ==============================
// INPUT TYPES (Input)
// ==============================

@InputType()
export class CreateCategoryDto {
    @Field()
    name: string;

    @Field({ nullable: true })
    description?: string;

    @Field({ nullable: true })
    photo?: string;

    @Field({ nullable: true })
    isActive?: boolean;
}

@InputType()
export class UpdateCategoryDto {
    @Field(() => Int)
    _id: number;

    @Field({ nullable: true })
    name?: string;

    @Field({ nullable: true })
    description?: string;

    @Field({ nullable: true })
    photo?: string;

    @Field({ nullable: true })
    isActive?: boolean;
}

@InputType()
export class LoadCategoryByIdDto {
    @Field(() => Int)
    _id: number;
}


@InputType()
export class DeleteCategoryDto {
    @Field(() => Int)
    _id: number;
}

@InputType()
export class RestoreCategoryDto {
    @Field(() => Int)
    _id: number;
}

@InputType()
@InputType()
export class LoadCategoryDto {
    @Field(() => Int, { nullable: true })
    page?: number;

    @Field(() => Int, { nullable: true })
    limit?: number;

    @Field(() => ActiveStatus, { nullable: true })
    isActive?: ActiveStatus;

    @Field({ nullable: true })
    keyword?: string;
}
