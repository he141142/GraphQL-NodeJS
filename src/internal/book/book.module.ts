import {TypeOrmModule} from "@nestjs/typeorm";
import {BookEntity} from "./entities/book.entity";
import {Module} from "@nestjs/common";
import {GenresEntity} from "./entities/genres.entity";
import {BookController} from "./book.controller";
import {BookService} from "./book.service";
import {AuthorModule} from "../author/author.module";

@Module({
    imports: [
        TypeOrmModule.forFeature([BookEntity,GenresEntity]),
        AuthorModule
    ],
    controllers: [BookController],
    providers: [
        BookService
    ],
    exports: [],
})
export class BookModule {}