import { Injectable, Inject } from '@nestjs/common';
import { UpdateCountryDto } from './dto/update-country.dto';
import { Country } from './country.entity';
import { COUNTRY_REPOSITORY } from '../../core/constants';
import { IPagination } from 'src/types';

@Injectable()
export class CountryService {
  constructor(
    @Inject(COUNTRY_REPOSITORY)
    private readonly countryRepository: typeof Country,
  ) {}

  findAll(pagination: IPagination): Promise<Country[]> {
    const { limit = 10, offset = 0 } = pagination;
    return this.countryRepository.findAll<Country>({ limit: 10, offset: 5 });
  }

  update(UpdateCountryDto: UpdateCountryDto) {
    return this.countryRepository.update(
      { ...UpdateCountryDto, updatedAt: Date.now },
      { where: { id: UpdateCountryDto.id } },
    );
  }

  delete(id: number) {
    return this.countryRepository.destroy({ where: { id } });
  }
}
