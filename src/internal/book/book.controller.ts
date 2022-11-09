import {Body, Controller, Delete, Param, Post} from "@nestjs/common";
import {CreateBookDTO} from "./dto/book.create.dto";
import {BookService} from "./book.service";

@Controller('book')
export class BookController {
    constructor(
        private bookService: BookService
    ) {
    }
    @Post('/create')
    async creatBook(@Body() dto: CreateBookDTO) {
        return this.bookService.createBook(dto);
    }

    @Delete('/:id')
    async deleteBook(@Param("id") id) {
        return this.bookService.deleteBook(id);
    }

    @Post("/genres-loader")
    async loadGenres () {
        return this.bookService.loadDefaultGenres();
    }
}