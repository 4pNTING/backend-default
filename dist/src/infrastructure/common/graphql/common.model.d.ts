import { ActiveStatus } from '../../../domain/enums/enum';
export { ActiveStatus };
export declare class DateFilterDto {
    startDate?: string;
    endDate?: string;
}
export declare class SearchDto {
    searchField?: string[];
    q?: string;
}
export declare class PaginateDto {
    limit?: number;
    page?: number;
}
