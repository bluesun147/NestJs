import { Controller, Delete, Get, Param, Post, Patch, Body, Query } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { Movie } from './entities/movie.entity';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';

// 여기서 사용하는 func들을 sevice에 만들어 둬야함.

@Controller('movies') // 컨트롤러 위한 url 생성. http://localhost:3000/movies
export class MoviesController {

    // 서비스에 접근. 요청. MoviesService라는 클래스
    constructor(private readonly moviesService: MoviesService) {}

    // express에서의 라우터
    @Get() // decorator
    getAll() : Movie[] { // 이 function을 서비스에 작성하자. Movie array 리턴
        return this.moviesService.getAll();
    }

    @Get('/search')
    search(@Query('year') searchingYear: string) { // http://localhost:3000/movies/search?year=2000
        return `We are searching for a movie made after: ${searchingYear}`
    }

    // nest는 타입 받아서 넘겨줄 때 타입도 자동으로 변환해줌. main.ts에 transform, express는 직접 해야 함.
    @Get('/:id') // http://localhost:3000/movies/1
    getOne(@Param('id') movieId: number): Movie { // nestjs에서 필요한게 있으면 요청해야 함. id라는 파라미터 요청. 그것을 movieId라는 argument에 저장
        //return `This will return one movie with the id: ${movieId}`;
        console.log(typeof movieId); // number 출력 됨
        return this.moviesService.getOne(movieId);
    }

    @Post()
    create(@Body() movieData: CreateMovieDto) { // rquest의 body 가져옴. movieData의 타입은 CreatemovieDto.
        return this.moviesService.create(movieData);
    }

    @Delete('/:id')
    remove(@Param('id') movieId: number) {
        //return `This will delete a movie with the movie id: ${movieId}.`;
        return this.moviesService.deleteOne(movieId);
    }

    @Patch('/:id') // Put은 update whole resource. Patch는 일부분. updateData는 UpdateMovieDto 타입이라는 뜻
    patch(@Param('id') movieId: number, @Body() updateData: UpdateMovieDto) { // 요청하지 않으면 아무것도 제공되지 않음. need to call param, body...
        // return { // object 리턴
        //     updatedMovie: movieId,
        //     ...updateData, // 전개 연산자
        // };
        return this.moviesService.update(movieId, updateData);
    }
}