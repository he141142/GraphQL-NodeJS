import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {ValidationPipe} from "@nestjs/common";
import {config} from "dotenv";
import { ConfigService } from '@nestjs/config';

config();

const configService = new ConfigService();
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(configService.get<number>('PORT') || 3000);
}
bootstrap();
