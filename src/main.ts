import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as fs from 'fs';
import { dump } from 'js-yaml';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('WeCom Open API')
    .setDescription('The WeCom API description')
    .setVersion('1.0')
    .addServer('https://qyapi.weixin.qq.com/cgi-bin')
    .addApiKey({
      type: 'apiKey',
      name: 'access_token',
      in: 'query',
    })
    .addSecurityRequirements('api_key', [])
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  fs.writeFileSync('./swagger-spec.yaml', dump(document, {}));

  await app.listen(3000);
}
bootstrap();
