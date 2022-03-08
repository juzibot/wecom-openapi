import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { GenerateOpenAPI, SetupOpenAPI } from './openapi.config';

async function generate() {
  const app = await NestFactory.create(AppModule);
  GenerateOpenAPI(SetupOpenAPI(app));
}

generate();
