import { Module } from '@nestjs/common';
import { CorpInternalModule } from './corp-internal/corp-internal.module';
import { ThirdPartyModule } from './third-party/third-party.module';

@Module({
  providers: [],
  imports: [ThirdPartyModule, CorpInternalModule],
})
export class AppModule {}
