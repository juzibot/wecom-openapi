import { ApiProperty } from '@nestjs/swagger';
import { Response } from '../../response';

export class GetCustomizedAuthUrlResponse extends Response {
  @ApiProperty({
    type: 'string',
    description: '可用来生成二维码的授权url, 需要自行生成二维码',
    required: true,
    example: 'xxxxx',
  })
  qrcode_url: string;

  @ApiProperty({
    type: 'number',
    description: '有效期（秒）。10天过期',
    required: true,
    example: '864000',
  })
  expires_in: number;
}
