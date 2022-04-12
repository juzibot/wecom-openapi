import { ApiProperty } from '@nestjs/swagger';
import { Response } from '../../response';

export class AccessTokenResponse extends Response {
  @ApiProperty({
    type: 'string',
    description: 'access_token',
    example: 'xxxxxx',
  })
  access_token: string;

  @ApiProperty({
    type: 'number',
    description: 'access_token超时时间',
    example: 7200,
  })
  expires_in: number;
}
