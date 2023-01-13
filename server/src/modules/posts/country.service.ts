import { Injectable, Inject } from '@nestjs/common';
import { UpdateCountryDto } from './dto/update-country.dto';
import { Country } from './country.entity';
import { COUNTRY_REPOSITORY } from '../../core/constants';
import { IPagination, SortBy } from 'src/types';
import { Op, OrderItem } from 'sequelize';

const attributes = [
  'id',
  'name',
  'code',
  'flag',
  'longitude',
  'latitude',
  'description',
];
@Injectable()
export class CountryService {
  constructor(
    @Inject(COUNTRY_REPOSITORY)
    private readonly countryRepository: typeof Country,
  ) {}

  findAll(pagination: IPagination, sortBy?: OrderItem) {
    const { limit = 10, offset = 0 } = pagination;
    const setOrderBy = sortBy && { order: [sortBy] };
    return this.countryRepository.findAndCountAll<Country>({
      limit,
      offset,
      attributes,
      ...setOrderBy,
    });
  }

  async findBy(
    pagination: IPagination,
    countryName: string,
    sortBy?: OrderItem,
  ) {
    const { limit = 10, offset = 0 } = pagination;
    const setOrderBy = sortBy && { order: [sortBy] };
    return this.countryRepository.findAndCountAll<Country>({
      limit,
      offset,
      attributes,
      where: {
        name: { [Op.startsWith]: countryName },
      },
      ...setOrderBy,
    });
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
