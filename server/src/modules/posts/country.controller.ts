import {
  Controller,
  Get,
  Query,
  Patch,
  Req,
  Delete,
  Param,
} from '@nestjs/common';
import { OrderItem } from 'sequelize';
import { CustomRequest, IPagination, IQueryParams, SortBy } from 'src/types';
import { CountryService } from './country.service';
import { UpdateCountryDto } from './dto/update-country.dto';

@Controller('country')
export class PostsController {
  constructor(private readonly countryService: CountryService) {}

  @Get()
  findAll(@Query() query: IQueryParams) {
    const { limit, offset, sortBy } = query;
    const sortCriteria: OrderItem = sortBy && (sortBy.split(',') as OrderItem);

    return this.countryService.findAll(
      { limit: +limit, offset: +offset },
      sortCriteria,
    );
  }

  @Get('/:name')
  findBy(@Query() query: IQueryParams, @Param() param: { name: string }) {
    const { limit, offset, sortBy } = query;
    const sortCriteria: OrderItem = sortBy && (sortBy.split(',') as OrderItem);
    return this.countryService.findBy(
      { limit: +limit, offset: +offset },
      param.name,
      sortCriteria,
    );
  }
  @Patch()
  update(@Req() requset: CustomRequest<UpdateCountryDto>) {
    const { body } = requset;
    return this.countryService.update(body);
  }

  @Delete('/:id')
  delete(@Param('id') id: number) {
    return this.countryService.delete(id);
  }
}
