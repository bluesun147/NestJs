import { Module } from '@nestjs/common';
//import { MoviesController } from './movies/movies.controller';
//import { MoviesService } from './movies/movies.service';
import { MoviesModule } from './movies/movies.module';
import { AppController } from './movies/app.controller';
// 루트 모듈.

// 여기에 여러가지 import하고 nest가 앱 구동하면 모든걸 하나의 모듈로 생성해줌.
@Module({ // *데코레이터. 클래스에 함수 추가. 클래스 위에 함수
  imports: [MoviesModule], // app 모듈에서 movies 모듈 임포트하는 것이 가장 좋은 방법. 각각 모듈로 분리하기
  // controllers: [MoviesController], // express의 라우터 역할. url가져오고 함수 실행
  // providers: [MoviesService], // 만들면 자동 생성
  controllers: [AppController],
  providers: [],
})
export class AppModule {}

