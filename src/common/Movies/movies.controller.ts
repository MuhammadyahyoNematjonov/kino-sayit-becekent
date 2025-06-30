import { Controller, Post } from '@nestjs/common';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
    constructor(private readonly moviesService: MoviesService) {}

    @Post('create')
    createMovie() {
        // return this.moviesService.createMovie();
    }

    
}
