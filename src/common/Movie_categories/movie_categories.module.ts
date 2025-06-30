import { Module } from '@nestjs/common';
import { MovieCategoriesService } from './movie_categories.service';
import { MovieCategoriesController } from './movie_categories.controller';

@Module({
  providers: [MovieCategoriesService],
  controllers: [MovieCategoriesController]
})
export class MovieCategoriesModule {}
