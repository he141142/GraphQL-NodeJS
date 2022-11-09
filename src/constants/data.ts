import {CreateAuthorDTO} from "../internal/author/dto/author.create.dto";

class GenresDTO{
    name: string;
    orderTimes: number;

}
export const defaultAuthor: CreateAuthorDTO = {
    firstName: "Mr",
    lastName: "Unstoppable",
    pseudonym: "sykr0s"
}


export const GenresDefault:GenresDTO[] = [
    {
        name:"Gothic",
        orderTimes: 10
    },
    {
        name: 'Fantasy',
        orderTimes: 19
    },
    {
        name: 'Science Fiction',
        orderTimes: 19
    },
    {
        name: 'Action & Adventure',
        orderTimes: 19
    },   {
        name: 'Mystery',
        orderTimes: 19
    },   {
        name: 'Horror',
        orderTimes: 19
    },   {
        name: 'Thriller & Suspense',
        orderTimes: 19
    },   {
        name: 'Historical Fiction',
        orderTimes: 19
    },   {
        name: 'Romance',
        orderTimes: 19
    },   {
        name: 'Women’s Fiction',
        orderTimes: 19
    },   {
        name: 'Contemporary Fiction',
        orderTimes: 19
    },

]

