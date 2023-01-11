import { Request } from 'express';

export interface IPagination {
  limit: number;
  offset: number;
}

export interface CustomRequest<T> extends Request {
  body: T;
}
