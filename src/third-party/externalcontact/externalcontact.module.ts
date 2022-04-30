import { Module } from '@nestjs/common';
import { ExternalcontactController } from './externalcontact.controller';

@Module({
  controllers: [ExternalcontactController],
})
export class ExternalContactModule {}
