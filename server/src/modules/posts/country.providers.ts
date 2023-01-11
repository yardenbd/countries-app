import { Country } from './country.entity';
import { COUNTRY_REPOSITORY } from '../../core/constants';

export const postsProviders = [
  {
    provide: COUNTRY_REPOSITORY,
    useValue: Country,
  },
];
