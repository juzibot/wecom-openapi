import { Module } from '@nestjs/common';
import { CorporationController } from './corporation.controller';

@Module({
  controllers: [CorporationController],
})
export class CorporationModule {}
