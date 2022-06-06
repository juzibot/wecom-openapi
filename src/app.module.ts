import { Module } from '@nestjs/common';
import { AgentModule } from './agent/agent.module';
import { CorpInternalModule } from './corp-internal/corp-internal.module';
import { OfficialAccountsModule } from './official_accounts/official_accounts.module';
import { ThirdPartyModule } from './third-party/third-party.module';

@Module({
  providers: [],
  imports: [
    ThirdPartyModule,
    CorpInternalModule,
    AgentModule,
    OfficialAccountsModule,
  ],
})
export class AppModule {}
