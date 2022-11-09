import {Args, Query, Resolver} from "@nestjs/graphql";
import {BookEntity} from "../entities/book.entity";
import {Inject} from "@nestjs/common";
import {BookService} from "../book.service";

@Resolver(of => {
    BookEntity
})
export class BookResolver{
    constructor(
        @Inject(BookService) private bookService: BookService,
    ) {
    }
    @Query(returns => BookEntity)
    async book(@Args('id') id: string): Promise<BookEntity>{
        return this.bookService.getBookById(id);
    }

}