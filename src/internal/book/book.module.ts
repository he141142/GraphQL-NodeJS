import {TypeOrmModule} from "@nestjs/typeorm";
import {BookEntity} from "./entities/book.entity";
import {Module} from "@nestjs/common";

@Module({
    imports: [
        TypeOrmModule.forFeature([BookEntity]),
    ],
    controllers: [],
    providers: [
    ],
    exports: [],
})
export class BookModule {}