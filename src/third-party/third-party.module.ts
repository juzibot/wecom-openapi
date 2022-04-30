import { Module } from '@nestjs/common';
import { AuthorizationModule } from './authorization/authorization.module';
import { CorporationModule } from './corporation/corporation.module';
import { ExternalContactModule } from './externalcontact/externalcontact.module'

@Module({
  imports: [AuthorizationModule, CorporationModule, ExternalContactModule]
})
export class ThirdPartyModule {}
