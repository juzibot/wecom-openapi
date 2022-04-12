import { ApiProperty } from '@nestjs/swagger';
import { Response } from '../../response';

export class ConvertToOpenIdResponse extends Response {
  @ApiProperty({
    type: 'string',
    required: true,
    description: '企业微信成员userid对应的openid',
    example: 'oDjGHs-1yCnGrRovBj2yHij5JAAA',
  })
  openid: string;
}
