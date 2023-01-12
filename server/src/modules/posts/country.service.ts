import { Injectable, Inject } from '@nestjs/common';
import { UpdateCountryDto } from './dto/update-country.dto';
import { Country } from './country.entity';
import { COUNTRY_REPOSITORY } from '../../core/constants';
import { IPagination } from 'src/types';
import { Op, Sequelize } from 'sequelize';

const attributes = ['id', 'name', 'code', 'flag', 'longitude', 'latitude'];
@Injectable()
export class CountryService {
  constructor(
    @Inject(COUNTRY_REPOSITORY)
    private readonly countryRepository: typeof Country,
  ) {}

  findAll(pagination: IPagination) {
    const { limit = 10, offset = 0 } = pagination;
    return this.countryRepository.findAndCountAll<Country>({
      limit,
      offset,
      attributes,
    });
  }

  async findBy(pagination: IPagination, countryName: string) {
    const { limit = 10, offset = 0 } = pagination;

    return this.countryRepository.findAndCountAll<Country>({
      limit,
      offset,
      attributes,
      where: {
        name: { [Op.startsWith]: countryName },
      },
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
