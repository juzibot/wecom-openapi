import { Module } from '@nestjs/common';
import { ThirdPartyController } from './access-token/3rd.controller';
import { AccessTokenController } from './access-token/internal-corp.controller';
import { DepartmentController } from './department/department.controller';
import { CorpTagController } from './externalcontact/corp-tag/corp-tag.controller';
import { ExternalcontactController } from './externalcontact/externalcontact.controller';
import { GroupchatController } from './externalcontact/groupchat/groupchat.controller';
import { TagController } from './tag/tag.controller';
import { BatchController } from './user/batch/batch.controller';
import { CorpController } from './user/corp/corp.controller';
import { ExportController } from './user/export/export.controller';
import { UserController } from './user/user.controller';
import { ContactWayController } from './externalcontact/contact-way/contact-way.controller';

@Module({
  imports: [],
  controllers: [
    DepartmentController,
    TagController,
    ExternalcontactController,
    GroupchatController,
    CorpTagController,
    UserController,
    CorpController,
    BatchController,
    ExportController,
    AccessTokenController,
    ThirdPartyController,
    ContactWayController,
  ],
  providers: [],
})
export class AppModule {}
