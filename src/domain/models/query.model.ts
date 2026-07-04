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
  isActive?: boolean | string;
  select?: string[];
  sortField?: string;
  sortDirection?: string;
  // ─── Extended filters for POS modules ───────────────
  zoneId?: string;       // Table: filter by zone
  categoryId?: string;   // MenuItem: filter by category
  tableId?: string;      // Order: filter by table
  status?: string;       // Order: filter by status
}