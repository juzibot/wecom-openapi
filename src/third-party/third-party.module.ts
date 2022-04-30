import { Module } from '@nestjs/common';
import { AuthorizationModule } from './authorization/authorization.module';
import { ExternalContactModule } from './externalcontact/externalcontact.module';

@Module({
  imports: [AuthorizationModule, ExternalContactModule],
})
export class ThirdPartyModule {}
