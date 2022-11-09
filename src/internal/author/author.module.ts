import {TypeOrmModule} from "@nestjs/typeorm";
import {Module} from "@nestjs/common";
import {AuthorEntity} from "./entities/author.entity";
import {AuthorService} from "./author.service";

@Module({
    imports: [
        TypeOrmModule.forFeature([AuthorEntity]),
    ],
    controllers: [],
    providers: [
        AuthorService
    ],
    exports: [AuthorService],
})
export class AuthorModule {}