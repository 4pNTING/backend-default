export interface Paginate {
  limit?: number;
  page?: number;
}

export interface DateFilter {
  startDate?: string;
  endDate?: string;
}

export interface Search {
  searchField?: string[];
  q?: string;
}

export interface QueryProps {
  dateFilter?: DateFilter;
  search?: Search;
  sort?: number;
  paginate?: Paginate;
  isActive?: boolean;
  select?: string[];
}