import { ApiProperty } from '@nestjs/swagger';
import { Response } from '../response';

export class GetSuiteTokenResponse extends Response {
  @ApiProperty({
    type: 'string',
    description: '第三方应用access_token,最长为512字节',
    example: 'xxxxxx',
  })
  suite_access_token: string;

  @ApiProperty({
    type: 'number',
    description: '有效期（秒）',
    example: 7200,
  })
  expires_in: number;
}
