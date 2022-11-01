import { ApiProperty } from '@nestjs/swagger';
import { WelcomeMsgAttachment, WelcomeMsgText } from './send-welcom-msg-dto';

export class AddMsgTemplateDto {
  @ApiProperty({
    type: 'string',
    enum: ['single', 'group'],
    required: false,
    description:
      '群发任务的类型，默认为single，表示发送给客户，group表示发送给客户群',
  })
  chat_type: string;

  @ApiProperty({
    type: 'string',
    required: false,
    isArray: true,
    description:
      '客户的外部联系人id列表，仅在chat_type为single时有效，不可与sender同时为空，最多可传入1万个客户',
    example:
      '["woAJ2GCAAAXtWyujaWJHDDGi0mACAAAA", "wmqfasd1e1927831123109rBAAAA"]',
  })
  external_userid: string[];

  @ApiProperty({
    type: 'string',
    required: false,
    description: '发送企业群发消息的成员userid，当类型为发送给客户群时必填',
    example: 'zhangsan',
  })
  sender: string;

  @ApiProperty({
    type: WelcomeMsgText,
    required: false,
  })
  text: WelcomeMsgText;

  @ApiProperty({
    type: WelcomeMsgAttachment,
    required: false,
    isArray: true,
  })
  attachments: WelcomeMsgAttachment[];
}
