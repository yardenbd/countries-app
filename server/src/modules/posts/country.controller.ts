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
    console.log('in the controller');
    const { limit, offset } = query;
    return this.countryService.findAll({ limit: +limit, offset: +offset });
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
