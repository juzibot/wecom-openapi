import { ApiProperty } from '@nestjs/swagger';
import { Response } from '../../response';

export class GetJsapiTicketResponse extends Response {
  @ApiProperty({
    type: 'string',
    required: false,
    description: '生成签名所需的jsapi_ticket，最长为512字节',
  })
  ticket: string;

  @ApiProperty({
    type: 'number',
    format: 'int64',
    required: false,
    description: '过期时间，单位：秒',
  })
  expires_in: number;
}
