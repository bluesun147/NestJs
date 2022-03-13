import { Module } from '@nestjs/common';
import { MoviesController } from './movies/movies.controller';
import { MoviesService } from './movies/movies.service';
// 루트 모듈.
@Module({ // *데코레이터. 클래스에 함수 추가. 클래스 위에 함수
  imports: [],
  controllers: [MoviesController], // express의 라우터 역할. url가져오고 함수 실행
  providers: [MoviesService], // 만들면 자동 생성
})
export class AppModule {}

