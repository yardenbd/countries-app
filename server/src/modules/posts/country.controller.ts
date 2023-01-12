import {
  Controller,
  Get,
  Query,
  Patch,
  Req,
  Delete,
  Param,
} from '@nestjs/common';
import { CustomRequest, IPagination } from 'src/types';
import { CountryService } from './country.service';
import { UpdateCountryDto } from './dto/update-country.dto';

@Controller('country')
export class PostsController {
  constructor(private readonly countryService: CountryService) {}

  @Get()
  findAll(@Query() query: IPagination) {
    const { limit, offset } = query;
    return this.countryService.findAll({ limit: +limit, offset: +offset });
  }

  @Get('/:name')
  findBy(@Query() query: IPagination, @Param() param: { name: string }) {
    const { limit, offset } = query;
    return this.countryService.findBy(
      { limit: +limit, offset: +offset },
      param.name,
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
