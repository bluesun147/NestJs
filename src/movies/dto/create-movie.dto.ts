// dto : Data Transfer Object
// dto는 기본적으로 클래스. 뭘 어떻게 받을 지


import { IsNumber, IsOptional, IsString } from "class-validator";

// 사람들이 보낼 수 있는것. id는 x
export class CreateMovieDto {

    @IsString()
    readonly title: string;

    @IsNumber()
    readonly year: number;
    
    @IsOptional()
    @IsString({ each: true}) // 모든 요소 하나씩 검사
    readonly genres: string[];
}