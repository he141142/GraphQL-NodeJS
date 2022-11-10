import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {typeOrmConfig} from "./configs/db/typeorm.config";
import {BookModule} from "./internal/book/book.module";
import {AuthorModule} from "./internal/author/author.module";
import {GraphQLModule} from "@nestjs/graphql";
import {ApolloDriver, ApolloDriverConfig} from "@nestjs/apollo";
import { join } from 'path';
import {CustomUuidScalar} from "./internal/utils/uuid-scalar";

console.log(process.cwd())
@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    BookModule,
    AuthorModule,
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/graphql-schema/schema.gql'),
      resolvers: { UUID: CustomUuidScalar },
    }),

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
