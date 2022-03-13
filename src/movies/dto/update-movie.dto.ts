// dto : Data Transfer Object
// dto는 기본적으로 클래스. 뭘 어떻게 받을 지


import { IsNumber, IsString } from "class-validator";
import { PartialType } from "@nestjs/mapped-types";
import { CreateMovieDto } from "./create-movie.dto";

// export class UpdateMovieDto {
//     @IsString()
//     readonly title?: string; // 읽기 전용, 필수 아님, 원하는 정보만 업데이트. ?가 필수 아니라는 뜻인듯
//     // readonly title: string;

//     @IsNumber()
//     readonly year?: number;
    
//     @IsString({ each: true }) // 모든 요소 하나씩 검사
//     readonly genres?: string[];
// }

// 위 코드 대신 partial types 사용
export class UpdateMovieDto extends PartialType(CreateMovieDto) {


}