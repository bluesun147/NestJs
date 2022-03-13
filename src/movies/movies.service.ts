import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { Movie } from './entities/movie.entity';
import { UpdateMovieDto } from './dto/update-movie.dto';

@Injectable()
export class MoviesService {
    private movies: Movie[] = []; // movies는 Movie타입의 array

    getAll(): Movie[] {
        return this.movies;
    }

    getOne(id: number): Movie {
        const movie =  this.movies.find(movie => movie.id === id); // parseInt(id)와 +id 같은 의미
        if (!movie) {
            throw new NotFoundException(`Movie with ID ${id} not found.`);
        }
        return movie;
    }

    deleteOne(id: number) { // 파라미터 id는 string 타입, deleteOne의 리턴 타임은 불리언
        this.getOne(id); // 여기서 에러 안나면 뒤는 문제 없음. 가져왔다는 뜻.
        this.movies = this.movies.filter(movie => movie.id !== id); // parseInt(id)
    }

    create(movieData: CreateMovieDto) {
        this.movies.push({
            id: this.movies.length + 1,
            ...movieData
        })
    }

    update(id: number, updateData: UpdateMovieDto) {
        const movie = this.getOne(id);
        this.deleteOne(id); // delete old movie
        this.movies.push({...movie, ...updateData}); // add one more movie to previous data
    }
}
