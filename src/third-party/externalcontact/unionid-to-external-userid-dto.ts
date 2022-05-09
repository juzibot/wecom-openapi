import { ApiProperty } from '@nestjs/swagger';

export class UnionIdToExternalUserIdDto {
  @ApiProperty({
    type: 'string',
    isArray: false,
    required: true,
    maxLength: 100,
    description: '代开发自建应用获取到的外部联系人ID',
  })
  unionid: string;
  
  @ApiProperty({
    type: 'string',
    isArray: false,
    required: true,
    maxLength: 100,
    description: '代开发自建应用获取到的外部联系人ID',
  })
  openid: string;

  @ApiProperty({
    type: 'string',
    isArray: false,
    required: false,
    maxLength: 100,
    description: '代开发自建应用获取到的外部联系人ID',
  })
  corpid: string;
}
