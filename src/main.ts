import { NestFactory } from '@nestjs/core';
import { createProxyMiddleware } from 'http-proxy-middleware';
import { AppModule } from './app.module';
import { GenerateOpenAPI, SetupOpenAPI } from './openapi.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(
    '/cgi-bin',
    createProxyMiddleware({
      target: 'https://qyapi.weixin.qq.com',
      changeOrigin: true,
    }),
  );

  const doc = SetupOpenAPI(app);
  GenerateOpenAPI(doc);

  await app.listen(3000);
}

bootstrap();
