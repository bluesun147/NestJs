import { Injectable } from '@nestjs/common';
import { Movie } from './entities/movie.entity';

@Injectable()
export class MoviesService {
    private movies: Movie[] = []; // movies는 Movie타입의 array

    getAll(): Movie[] {
        return this.movies;
    }

    getOne(id: string): Movie {
        return this.movies.find(movie => movie.id === parseInt(id)); // parseInt(id)와 +id 같은 의미
    }

    deleteOne(id: string): boolean { // 파라미터 id는 string 타입, deleteOne의 리턴 타임은 불리언
        this.movies.filter(movie => movie.id !== +id);
        return true;
    }

    create(movieData) {
        this.movies.push({
            id: this.movies.length + 1,
            ...movieData
        })
    }
}
