import { Module } from '@nestjs/common';
import { AccessTokenController } from './access-token/internal-corp.controller';
import { AuthenticationController } from './authentication/authentication.controller';
import { DepartmentController } from './department/department.controller';
import { ContactWayController } from './externalcontact/contact-way/contact-way.controller';
import { CorpTagController } from './externalcontact/corp-tag/corp-tag.controller';
import { ExternalcontactController } from './externalcontact/externalcontact.controller';
import { GroupchatController } from './externalcontact/groupchat/groupchat.controller';
import { MessageModule } from './externalcontact/message/message.module';
import { MediaModule } from './media/media.module';
import { TagController } from './tag/tag.controller';
import { BatchController } from './user/batch/batch.controller';
import { CorpController } from './user/corp/corp.controller';
import { ExportController } from './user/export/export.controller';
import { UserController } from './user/user.controller';
import { JsapiTicketModule } from './jsapi_ticket/jsapi_ticket.module';
import { MessageController } from './message/message.controller';

@Module({
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
    ContactWayController,
    AuthenticationController,
    MessageController,
  ],
  imports: [MessageModule, MediaModule, JsapiTicketModule],
})
export class CorpInternalModule {}
