import {IsDefined, IsNotEmpty, IsNumber, IsOptional, IsString} from "class-validator";
import {ArgsType, Field, Float, InputType, Int, ObjectType} from "@nestjs/graphql";
@InputType()
export class CreateBookDTO{
    @Field(()=>String)
    @IsNotEmpty()
    title: string;

    @Field(()=>Int)
    @IsNumber()
    @IsDefined()
    availableQuantity: number;

    @Field(()=>Int)
    @IsNumber()
    @IsDefined()
    totalPage: number;

    @Field(()=>Float)
    @IsNumber()
    @IsDefined()
    price: number;

    @Field(()=>Float)
    @IsNumber()
    @IsOptional()
    salePrice: number;

    @Field(()=>String)
    @IsOptional()
    @IsString()
    author: string = null;
}