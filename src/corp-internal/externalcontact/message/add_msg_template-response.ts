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
