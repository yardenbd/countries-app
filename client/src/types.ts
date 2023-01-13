export interface IPagination {
  limit: number;
  offset: number;
}

export interface ICountry {
  id: number;
  name: string;
  code: string;
  flag: string;
  latitude: number;
  longitude: number;
  description: string;
}

export type TableHeaders =
  | keyof Pick<ICountry, "code" | "flag" | "name">
  | "action";

const t: TableHeaders[] = ["name", "code", "flag", "action"];

export interface IResponse {
  rows: ICountry[];
  count: number;
}

export interface IPaginationState {
  limit: number;
  offset: number;
  pageIndex: number;
  total: number;
}

export type SortBy = [string, "ASC" | "DESC"] | [];
