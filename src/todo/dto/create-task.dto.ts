import { IsOptional, IsNotEmpty, IsString } from "class-validator";

export class CreateTaskDto{
    @IsNotEmpty()
    @IsString()
    title:string;

    @IsOptional()
    @IsString()
    description?:string;
}