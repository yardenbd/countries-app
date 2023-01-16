import { Sequelize } from 'sequelize-typescript';

import { SEQUELIZE } from '../constants';
import { Country } from '../../modules/countries/country.entity';
import { Dialect } from 'sequelize/types';

export const databaseProviders = [
  {
    provide: SEQUELIZE,
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: (process.env.DB_DIALECT as Dialect) || 'mysql',
        host: process.env.DB_HOST,
        port: parseInt(process.env.DB_PORT) || 3306,
        username: process.env.DB_USERNAME,
        password: '',
        database: process.env.DB_NAME,
        logging: false,
        dialectOptions: { decimalNumbers: true },
      });
      sequelize.addModels([Country]);
      return sequelize;
    },
  },
];
