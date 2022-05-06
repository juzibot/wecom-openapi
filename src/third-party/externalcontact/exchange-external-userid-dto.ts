import { ApiProperty } from '@nestjs/swagger';

export class ExchangeExternalUserIdDto {
  @ApiProperty({
    type: 'string',
    isArray: false,
    required: true,
    maxLength: 100,
    description: '代开发自建应用获取到的外部联系人ID',
  })
  external_userid: string;
}
