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

  getAll() {
    return this.countryRepository.findAll();
  }

  getAllByPage(pagination: IPagination, sortBy?: OrderItem) {
    const { limit = 15, pageIndex = 1 } = pagination;
    const setOrderBy = sortBy && { order: [sortBy] };
    return this.countryRepository.findAndCountAll<Country>({
      limit,
      offset: pageIndex * limit,
      attributes,
      ...setOrderBy,
    });
  }

  async findBy(
    pagination: IPagination,
    countryName: string,
    sortBy?: OrderItem,
  ) {
    const { limit = 15, pageIndex = 1 } = pagination;
    const setOrderBy = sortBy && { order: [sortBy] };
    return this.countryRepository.findAndCountAll<Country>({
      limit,
      offset: pageIndex * limit,
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
