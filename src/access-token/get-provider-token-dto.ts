import { ApiProperty } from '@nestjs/swagger';

export class GetProviderTokenDto {
  @ApiProperty({
    type: 'string',
    description: '服务商的corpid',
    required: true,
    example: 'xxxxx',
  })
  corpid: string;

  @ApiProperty({
    type: 'string',
    description: '服务商的secret，在服务商管理后台可见',
    required: true,
    example: 'xxxxx',
  })
  provider_secret: string;
}
