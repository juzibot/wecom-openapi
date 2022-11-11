import { ApiProperty } from '@nestjs/swagger';
import { Response } from '../../../response';

export class AddMsgTemplateResponse extends Response {
  @ApiProperty({
    type: 'string',
    isArray: true,
    required: false,
    description: '无效或无法发送的external_userid列表',
    example:
      '["woAJ2GCAAAXtWyujaWJHDDGi0mACAAA", "wmqfasd1e1927831291723123109rAAA"]',
  })
  fail_list: string[];

  @ApiProperty({
    type: 'string',
    required: false,
    description: '企业群发消息的id，可用于获取群发消息发送结果',
  })
  msgid: string;
}

export class SendList {
  @ApiProperty({
    type: 'string',
    required: false,
  })
  external_userid: string;

  @ApiProperty({
    type: 'string',
    required: false,
  })
  chat_id: string;

  @ApiProperty({
    type: 'string',
    required: false,
  })
  userid: string;

  @ApiProperty({
    enum: [0, 1, 2, 3],
    type: 'number',
    format: 'int64',
    required: false,
    description:
      '发送状态：0-未发送 1-已发送 2-因客户不是好友导致发送失败 3-因客户已经收到其他群发消息导致发送失败',
    example: 1,
  })
  status: number;

  @ApiProperty({
    type: 'number',
    format: 'int64',
    required: false,
  })
  send_time: number;
}

export class getGroupMsgSendResultResponse extends Response {
  @ApiProperty({
    type: 'string',
    required: false,
    description:
      '分页游标，再下次请求时填写以获取之后分页的记录，如果已经没有更多的数据则返回空',
  })
  next_cursor: string;

  @ApiProperty({
    type: SendList,
    required: false,
    isArray: true,
  })
  send_list: SendList[];
}
