import {IsDefined, IsNotEmpty, IsNumber, IsOptional, IsString} from "class-validator";

export class CreateBookDTO{
    @IsNotEmpty()
    title: string;

    @IsNumber()
    @IsDefined()
    availableQuantity: number;

    @IsNumber()
    @IsDefined()
    totalPage: number;

    @IsNumber()
    @IsDefined()
    price: number;

    @IsNumber()
    @IsOptional()
    salePrice: number;

    @IsOptional()
    @IsString()
    author: string = null;
}