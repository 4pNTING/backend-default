import { Field, Int, InputType } from '@nestjs/graphql';
import { ActiveStatus } from '../../../domain/enums/enum';

export { ActiveStatus };

@InputType()
export class DateFilterDto {
    @Field({ nullable: true })
    startDate?: string;

    @Field({ nullable: true })
    endDate?: string;
}

@InputType()
export class SearchDto {
    @Field(() => [String], { nullable: true })
    searchField?: string[];

    @Field({ nullable: true })
    q?: string;
}

@InputType()
export class PaginateDto {
    @Field(() => Int, { nullable: true })
    limit?: number;

    @Field(() => Int, { nullable: true })
    page?: number;
}


