import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, OpenAPIObject, SwaggerModule } from '@nestjs/swagger';
import { writeFileSync } from 'fs';
import { dump } from 'js-yaml';

export function SetupOpenAPI(app: INestApplication) {
  const config = new DocumentBuilder()
    .setTitle('WeCom Open API')
    .setDescription('The WeCom API description')
    .setVersion('1.0')
    .addServer('https://qyapi.weixin.qq.com/cgi-bin')
    .addServer('/cgi-bin')
    .addApiKey({
      type: 'apiKey',
      name: 'access_token',
      in: 'query',
    })
    .addSecurityRequirements('api_key', [])
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/', app, document);
  return document;
}

export async function GenerateOpenAPI(document: OpenAPIObject) {
  writeFileSync('./openapi.yaml', dump(document, {}));
}
