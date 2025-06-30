import { Module } from '@nestjs/common';
import { MovieFilesService } from './movie_files.service';

@Module({
  providers: [MovieFilesService]
})
export class MovieFilesModule {}
