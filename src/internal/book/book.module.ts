import {TypeOrmModule} from "@nestjs/typeorm";
import {BookEntity} from "./entities/book.entity";
import {Module} from "@nestjs/common";
import {GenresEntity} from "./entities/genres.entity";
import {BookController} from "./book.controller";
import {BookService} from "./book.service";
import {AuthorModule} from "../author/author.module";
import {BookResolver} from "./resolver/book.resolver";

@Module({
    imports: [
        TypeOrmModule.forFeature([BookEntity,GenresEntity]),
        AuthorModule
    ],
    controllers: [],
    providers: [
        BookService,
        BookResolver
    ],
    exports: [],
})
export class BookModule {}