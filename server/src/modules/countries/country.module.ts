import { Module } from '@nestjs/common';

import { CountryService } from './country.service';
import { PostsController } from './country.controller';
import { postsProviders } from './country.providers';

@Module({
  providers: [CountryService, ...postsProviders],
  controllers: [PostsController],
})
export class CountryModule {}
