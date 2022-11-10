import {Args, Mutation, Query, Resolver} from "@nestjs/graphql";
import {BookEntity} from "../entities/book.entity";
import {Inject, ValidationPipe} from "@nestjs/common";
import {BookService} from "../book.service";
import {CustomUuidScalar} from "../../utils/uuid-scalar";
import {GenresEntity} from "../entities/genres.entity";
import {CreateBookDTO} from "../dto/book.create.dto";
import {BookDeleteResponse} from "../dto/delete-book.dto";

@Resolver("book")
export class BookResolver {
    constructor(
        @Inject(BookService) private bookService: BookService,
    ) {
    }

    @Query(() => BookEntity)
    async book(@Args({
        name: 'id',
        type: () => CustomUuidScalar
    }) id): Promise<BookEntity> {
        return this.bookService.getBookById(id);
    }

    @Mutation(() => String)
    async loadDefaultGenres(): Promise<string> {
        return await this.bookService.loadDefaultGenres();
    }

    @Mutation(()=>BookEntity)
    async createBook(
        @Args({
            name:'CreateBookDTO',
            type:()=>CreateBookDTO
        },new ValidationPipe()) dto
    ):Promise<BookEntity>{
        return this.bookService.createBook(dto);
    }

    @Mutation(()=>BookDeleteResponse)
    async deleteBookByTitle(@Args({
        name: 'title',
        type: ()=> String
    }) title:string): Promise<BookDeleteResponse>{
        return this.bookService.deleteBookByTitle(title);
    }



}