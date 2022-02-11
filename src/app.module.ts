import { Module } from '@nestjs/common';
import { DepartmentController } from './department/department.controller';
import { CorpTagController } from './externalcontact/corp-tag/corp-tag.controller';
import { ExternalcontactController } from './externalcontact/externalcontact.controller';
import { GroupchatController } from './externalcontact/groupchat/groupchat.controller';
import { TagController } from './tag/tag.controller';

@Module({
  imports: [],
  controllers: [
    DepartmentController,
    TagController,
    ExternalcontactController,
    GroupchatController,
    CorpTagController,
  ],
  providers: [],
})
export class AppModule {}
