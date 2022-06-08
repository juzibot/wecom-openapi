import { ApiProperty } from '@nestjs/swagger';

export class GetUserInfo3rdDto {
  @ApiProperty({
    type: 'string',
    description: '通过成员授权获取到的code',
    required: true,
    example: 'auth_code_value',
  })
  code: string;
}
