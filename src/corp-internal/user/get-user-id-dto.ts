import { ApiProperty } from '@nestjs/swagger';

export class GetUserIdDto {
  @ApiProperty({
    type: 'string',
    required: true,
    description: '手机号码。长度为5~32个字节',
    example: '13430388888',
  })
  mobile: string;
}
