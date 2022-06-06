import { Module } from '@nestjs/common';
import { CorpInternalModule } from './corp-internal/corp-internal.module';
import { ThirdPartyModule } from './third-party/third-party.module';
import { OfficialAccountsModule } from './official_accounts/official_accounts.module';

@Module({
  providers: [],
  imports: [ThirdPartyModule, CorpInternalModule, OfficialAccountsModule],
})
export class AppModule {}
