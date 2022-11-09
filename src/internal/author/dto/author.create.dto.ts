import {IsDefined, IsNotEmpty} from "class-validator";


export class CreateAuthorDTO{

    @IsNotEmpty()
    @IsDefined()
    pseudonym: string;

    @IsNotEmpty()
    @IsDefined()
    lastName: string;

    @IsNotEmpty()
    @IsDefined()
    firstName: string;
}