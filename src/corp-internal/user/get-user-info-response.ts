import { ApiProperty } from '@nestjs/swagger';
import { Response } from '../../response';

export class GetUserInfoResponse extends Response {
  @ApiProperty({
    type: 'string',
    description: '登录用户id',
    required: true,
    example: 'xxx',
  })
  Userid: string;
}
