import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {typeOrmConfig} from "./configs/db/typeorm.config";
import {BookModule} from "./internal/book/book.module";
import {AuthorModule} from "./internal/author/author.module";

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    BookModule,
    AuthorModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
