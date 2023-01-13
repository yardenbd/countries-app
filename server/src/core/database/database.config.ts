import { SequelizeOptions } from 'sequelize-typescript';
import { Dialect } from 'sequelize/types';
export const dbConfig: SequelizeOptions = {
  dialect: (process.env.DB_DIALECT as Dialect) || 'mysql',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT) || 3306,
  username: process.env.DB_USERNAME,
  password: '',
  database: process.env.DB_NAME,
  logging: false,
};
