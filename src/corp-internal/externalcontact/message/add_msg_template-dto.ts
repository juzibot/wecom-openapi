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

export class getGroupMsgSendResultDto {
  @ApiProperty({
    type: 'string',
    required: true,
    description: '企业群发消息的id，可用于获取群发消息发送结果',
  })
  msgid: string;

  @ApiProperty({
    type: 'string',
    description: '登录用户id',
    required: true,
    example: 'zhangsan',
  })
  userid: string;

  @ApiProperty({
    type: 'string',
    required: false,
    description:
      '用于分页查询的游标，字符串类型，由上一次调用返回，首次调用可不填',
  })
  cursor: string;

  @ApiProperty({
    type: 'number',
    format: 'int64',
    required: false,
    maximum: 1000,
    default: 500,
    description:
      '返回的最大记录数，整型，最大值1000，默认值500，超过最大值时取最大值',
  })
  limit: number;
}
