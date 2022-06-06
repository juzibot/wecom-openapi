import { Module } from '@nestjs/common';
import { CorpInternalModule } from './corp-internal/corp-internal.module';
import { ThirdPartyModule } from './third-party/third-party.module';
import { AgentModule } from './agent/agent.module';

@Module({
  providers: [],
  imports: [ThirdPartyModule, CorpInternalModule, AgentModule],
})
export class AppModule {}
