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
}

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
