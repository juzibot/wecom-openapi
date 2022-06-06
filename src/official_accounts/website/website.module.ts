import { Module } from '@nestjs/common';
import { WebsiteController } from './website.controller';

@Module({
  controllers: [WebsiteController],
})
export class WebsiteModule {}
