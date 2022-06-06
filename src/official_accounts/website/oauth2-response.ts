import { ApiProperty } from '@nestjs/swagger';
import { Response } from '../../response';

export class Oauth2Response extends Response {
  @ApiProperty({
    type: 'string',
    description:
      '网页授权接口调用凭证,注意：此access_token与基础支持的access_token不同',
    required: false,
    example: 'ACCESS_TOKEN',
  })
  access_token: string;

  @ApiProperty({
    type: 'number',
    description: 'access_token接口调用凭证超时时间，单位（秒）',
    required: false,
    example: 7200,
  })
  expires_in: number;

  @ApiProperty({
    type: 'string',
    description: '用户刷新access_token',
    required: false,
    example: 'REFRESH_TOKEN',
  })
  refresh_token: string;

  @ApiProperty({
    type: 'string',
    description:
      '用户唯一标识，请注意，在未关注公众号时，用户访问公众号的网页，也会产生一个用户和公众号唯一的OpenID',
    required: false,
    example: 'OPENID',
  })
  openid: string;

  @ApiProperty({
    type: 'string',
    description: '用户授权的作用域，使用逗号（,）分隔',
    required: false,
    example: 'SCOPE',
  })
  scope: string;
}
