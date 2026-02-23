export declare enum ActiveStatus {
    ACTIVE = "ACTIVE",
    INACTIVE = "INACTIVE",
    ALL = "ALL"
}
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
export declare class ConditionDto {
    field?: string;
    value?: string;
}
export declare class InNumberDto {
    field?: string;
    value?: number[];
}
export declare class InStringDto {
    field?: string;
    value?: string[];
}
