import { Request } from 'express';

export interface IPagination {
  limit: number;
  offset: number;
}
export type SortBy = [string, 'ASC' | 'DESC'] | [];

export interface IQueryParams extends IPagination {
  sortBy: string;
}
export interface CustomRequest<T> extends Request {
  body: T;
}
