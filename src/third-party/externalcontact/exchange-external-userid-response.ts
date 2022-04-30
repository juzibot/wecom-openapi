import { ApiProperty } from '@nestjs/swagger';
import { Response } from '../../response';

export class ExchangeExternalUserIdResponse extends Response {
  @ApiProperty({
    type: 'string',
    required: false,
    description:
      '该服务商第三方应用下的企业的外部联系人ID',
  })
  external_userid: string;
}
