import { Module } from '@nestjs/common';
import { WebsiteModule } from './website/website.module';

@Module({
  imports: [WebsiteModule],
})
export class OfficialAccountsModule {}
