import { ApiProperty } from '@nestjs/swagger';

export class GetProviderTokenResponse {
  @ApiProperty({
    type: 'string',
    description: '第三方应用access_token,最长为512字节',
    example: 'xxxxxx',
  })
  provider_access_token: string;

  @ApiProperty({
    type: 'number',
    description: '有效期（秒）',
    example: 7200,
  })
  expires_in: number;
}
