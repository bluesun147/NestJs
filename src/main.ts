import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({ // validation pipe. express의 미들웨어 같은 것. 유효성 검사
  // validationPipe와 그걸로 검사하는 CreateMovieDto 사용하기 때문에 값 입력시 유효성 검사
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true, // input을 원하는 타입으로 변환
    }),
  );

  await app.listen(3000);
}
bootstrap();